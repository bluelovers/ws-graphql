"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getTypesFromData_1 = __importDefault(require("./getTypesFromData"));
const createSchemaQueryType_1 = __importDefault(require("./getSchemaFromData/createSchemaQueryType"));
const createMutationType_1 = __importDefault(require("./getSchemaFromData/createMutationType"));
const createSchemaExtension_1 = __importDefault(require("./getSchemaFromData/createSchemaExtension"));
/**
 * Get a GraphQL schema from data
 *
 * @example
 * const data = {
 *    "posts": [
 *        {
 *            "id": 1,
 *            "title": "Lorem Ipsum",
 *            "views": 254,
 *            "user_id": 123,
 *        },
 *        {
 *            "id": 2,
 *            "title": "Sic Dolor amet",
 *            "views": 65,
 *            "user_id": 456,
 *        },
 *    ],
 *    "users": [
 *        {
 *            "id": 123,
 *            "name": "John Doe"
 *        },
 *        {
 *            "id": 456,
 *            "name": "Jane Doe"
 *        }
 *    ],
 * };
 * const types = getTypesFromData(data);
 * // type Post {
 * //     id: ID
 * //     title: String
 * //     views: Int
 * //     user_id: ID
 * // }
 * //
 * // type User {
 * //     id: ID
 * //     name: String
 * // }
 * //
 * // type Query {
 * //     Post(id: ID!): Post
 * //     allPosts(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PostFilter): [Post]
 * //     User(id: ID!): User
 * //     allUsers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: UserFilter): [User]
 * // }
 * //
 * // type Mutation {
 * //     createPost(data: String): Post
 * //     updatePost(data: String): Post
 * //     removePost(id: ID!): Boolean
 * //     createUser(data: String): User
 * //     updateUser(data: String): User
 * //     removeUser(id: ID!): Boolean
 * // }
 */
function getSchemaFromData(data, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    let types = getTypesFromData_1.default(data, options);
    types = (_d = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.after) === null || _a === void 0 ? void 0 : _a.getTypesFromData) === null || _b === void 0 ? void 0 : _b.call(_a, {
        types
    }, data)) === null || _c === void 0 ? void 0 : _c.types) !== null && _d !== void 0 ? _d : types;
    const typesByName = types.reduce((types, type) => {
        types[type.name] = type;
        return types;
    }, {});
    const runtime = {
        data,
        types,
        typesByName,
    };
    ;
    {
        let runtime2 = (_f = (_e = options === null || options === void 0 ? void 0 : options.before) === null || _e === void 0 ? void 0 : _e.createSchemaQueryType) === null || _f === void 0 ? void 0 : _f.call(_e, runtime, data);
        if (runtime2 != null) {
            runtime.types = (_g = runtime2.types) !== null && _g !== void 0 ? _g : runtime.types;
            runtime.typesByName = (_h = runtime2.typesByName) !== null && _h !== void 0 ? _h : runtime.typesByName;
        }
    }
    ;
    const queryType = createSchemaQueryType_1.default(runtime, options);
    const mutationType = createMutationType_1.default(runtime, options);
    let graphQLSchemaConfig = (_m = (_l = (_k = (_j = options === null || options === void 0 ? void 0 : options.before) === null || _j === void 0 ? void 0 : _j.createGraphQLSchema) === null || _k === void 0 ? void 0 : _k.call(_j, {
        query: queryType,
        mutation: mutationType,
    }, data)) === null || _l === void 0 ? void 0 : _l.graphQLSchemaConfig) !== null && _m !== void 0 ? _m : null;
    graphQLSchemaConfig = {
        ...graphQLSchemaConfig,
        query: (_o = graphQLSchemaConfig === null || graphQLSchemaConfig === void 0 ? void 0 : graphQLSchemaConfig.query) !== null && _o !== void 0 ? _o : queryType,
        mutation: (_p = graphQLSchemaConfig === null || graphQLSchemaConfig === void 0 ? void 0 : graphQLSchemaConfig.mutation) !== null && _p !== void 0 ? _p : mutationType,
    };
    const schema = new graphql_1.GraphQLSchema(graphQLSchemaConfig);
    let schemaExtension = createSchemaExtension_1.default(runtime);
    schemaExtension = (_t = (_s = (_r = (_q = options === null || options === void 0 ? void 0 : options.after) === null || _q === void 0 ? void 0 : _q.createSchemaExtension) === null || _r === void 0 ? void 0 : _r.call(_q, {
        ...runtime,
        schemaExtension,
    }, data)) === null || _s === void 0 ? void 0 : _s.schemaExtension) !== null && _t !== void 0 ? _t : schemaExtension;
    const returnSchema = schemaExtension
        ? graphql_1.extendSchema(schema, graphql_1.parse(schemaExtension))
        : schema;
    return (_x = (_w = (_v = (_u = options === null || options === void 0 ? void 0 : options.after) === null || _u === void 0 ? void 0 : _u.getSchemaFromData) === null || _v === void 0 ? void 0 : _v.call(_u, {
        schema: returnSchema,
    }, data)) === null || _w === void 0 ? void 0 : _w.schema) !== null && _x !== void 0 ? _x : returnSchema;
}
exports.default = getSchemaFromData;
//# sourceMappingURL=getSchemaFromData.js.map