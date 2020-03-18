"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateISOStringType = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.DateISOStringType = new graphql_1.GraphQLScalarType({
    name: 'DateISOString',
    description: 'Date type',
    parseValue(value) {
        // value comes from the client
        return new Date(value); // sent to resolvers
    },
    serialize(value) {
        // value comes from resolvers
        return value.toISOString(); // sent to the client
    },
    parseLiteral(ast) {
        // ast comes from parsing the query
        // this is where you can validate and transform
        if (ast.kind !== language_1.Kind.STRING) {
            throw new graphql_1.GraphQLError(`Query error: Can only parse dates strings, got a: ${ast.kind}`, [ast]);
        }
        if (isNaN(Date.parse(ast.value))) {
            throw new graphql_1.GraphQLError(`Query error: not a valid date`, [ast]);
        }
        return new Date(ast.value);
    },
});
exports.default = exports.DateISOStringType;
//# sourceMappingURL=DateISOStringType.js.map