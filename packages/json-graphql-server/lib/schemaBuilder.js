"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaBuilder = void 0;
const graphql_tools_1 = require("graphql-tools");
const index_1 = __importDefault(require("./resolver/index"));
const printSchemaFromData_1 = __importDefault(require("./utils/printSchemaFromData"));
/**
 * Generates a GraphQL Schema object for your data
 *
 * @param {ISourceDataRoot} data
 * @param {IOptions} options
 * @returns {GraphQLSchema}
 *
 * @example
 * import {graphql} from 'graphql';
 * import jsonSchemaBuilder from 'lazy-json-graphql';
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
 * const schema = jsonSchemaBuilder(data);
 * const query = `[...]`
 * graphql(schema, query).then(result => {
 *   console.log(result);
 * });
 *
 */
function schemaBuilder(data, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const typeDefs = printSchemaFromData_1.default(data, options);
    const resolvers = index_1.default(data, options);
    let executableSchemaDefinition = (_b = (_a = options === null || options === void 0 ? void 0 : options.before) === null || _a === void 0 ? void 0 : _a.makeExecutableSchema) === null || _b === void 0 ? void 0 : _b.call(_a, {
        typeDefs,
        resolvers,
    }, data);
    executableSchemaDefinition = {
        // eslint-disable-line no-console
        logger: { log: e => console.log(e) },
        ...executableSchemaDefinition,
        resolvers: (_c = executableSchemaDefinition === null || executableSchemaDefinition === void 0 ? void 0 : executableSchemaDefinition.resolvers) !== null && _c !== void 0 ? _c : resolvers,
        typeDefs: (_d = executableSchemaDefinition === null || executableSchemaDefinition === void 0 ? void 0 : executableSchemaDefinition.typeDefs) !== null && _d !== void 0 ? _d : typeDefs,
    };
    const schema = graphql_tools_1.makeExecutableSchema(executableSchemaDefinition);
    return (_h = (_g = (_f = (_e = options === null || options === void 0 ? void 0 : options.after) === null || _e === void 0 ? void 0 : _e.makeExecutableSchema) === null || _f === void 0 ? void 0 : _f.call(_e, {
        executableSchemaDefinition,
        schema
    }, data)) === null || _g === void 0 ? void 0 : _g.schema) !== null && _h !== void 0 ? _h : schema;
}
exports.schemaBuilder = schemaBuilder;
exports.default = schemaBuilder;
//# sourceMappingURL=schemaBuilder.js.map