"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLRegExpType = exports.parseLiteral = exports.parseValue = exports.serialize = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
const util_1 = require("util");
const getSource_1 = require("regexp-cjk/lib/getSource");
const index_1 = require("../@graphql-lazy/parse-value-node/index");
function serialize(value) {
    return value.toString();
}
exports.serialize = serialize;
function parseValue(value) {
    try {
        if (value instanceof RegExp) {
            return value;
        }
        if (typeof value === 'string') {
            let m = getSource_1.parseRegularExpressionString(value);
            if (m) {
                return new RegExp(m.source, m.flags);
            }
        }
        else if (typeof (value === null || value === void 0 ? void 0 : value.source) === 'string') {
            return new RegExp(value.source, value.flags);
        }
        const msg = `Expected RegExp/string but got: ${util_1.inspect(value)}`;
        throw new graphql_1.GraphQLError(msg);
    }
    catch (e) {
        if (!(e instanceof graphql_1.GraphQLError)) {
            e = new graphql_1.GraphQLError(e);
        }
        throw e;
    }
}
exports.parseValue = parseValue;
function parseLiteral(ast, variables) {
    switch (ast.kind) {
        case language_1.Kind.OBJECT:
            let map = index_1.valueOfValueNode(ast, variables);
            return parseValue(map);
        case language_1.Kind.STRING:
            return parseValue(ast.value);
        case language_1.Kind.VARIABLE:
            const name = ast.name.value;
            return variables ? parseValue(variables[name]) : undefined;
        default:
            throw new graphql_1.GraphQLError(`not support type ${util_1.inspect(ast.kind)}, got ${util_1.inspect(ast)}`);
    }
}
exports.parseLiteral = parseLiteral;
exports.GraphQLRegExpType = new graphql_1.GraphQLScalarType({
    name: 'RegExp',
    description: 'JS RegExp represented as string',
    serialize,
    parseValue,
    parseLiteral,
});
exports.default = exports.GraphQLRegExpType;
//# sourceMappingURL=index.js.map