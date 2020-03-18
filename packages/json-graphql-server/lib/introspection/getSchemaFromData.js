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
    var _a, _b, _c, _d;
    const types = getTypesFromData_1.default(data);
    const typesByName = types.reduce((types, type) => {
        types[type.name] = type;
        return types;
    }, {});
    const runtime = {
        data,
        types,
        typesByName,
    };
    const queryType = createSchemaQueryType_1.default(runtime);
    const mutationType = createMutationType_1.default(runtime);
    const schema = new graphql_1.GraphQLSchema({
        query: queryType,
        mutation: mutationType,
    });
    const schemaExtension = createSchemaExtension_1.default(runtime);
    const returnSchema = schemaExtension
        ? graphql_1.extendSchema(schema, graphql_1.parse(schemaExtension))
        : schema;
    return (_d = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.after) === null || _a === void 0 ? void 0 : _a.getSchemaFromData) === null || _b === void 0 ? void 0 : _b.call(_a, {
        schema: returnSchema,
    }, data)) === null || _c === void 0 ? void 0 : _c.schema) !== null && _d !== void 0 ? _d : returnSchema;
}
exports.default = getSchemaFromData;
//# sourceMappingURL=getSchemaFromData.js.map