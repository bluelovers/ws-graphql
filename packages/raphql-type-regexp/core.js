"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewGraphQLRegExpType = void 0;
const graphql_1 = require("graphql");
const util_1 = require("./util");
function createNewGraphQLRegExpType(config) {
    return new graphql_1.GraphQLScalarType({
        name: 'RegExp',
        description: 'JS RegExp represented as string',
        serialize: util_1.serialize,
        parseValue: util_1.parseValue,
        parseLiteral: util_1.parseLiteral,
        ...config,
    });
}
exports.createNewGraphQLRegExpType = createNewGraphQLRegExpType;
exports.default = createNewGraphQLRegExpType;
//# sourceMappingURL=core.js.map