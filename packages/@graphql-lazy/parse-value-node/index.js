"use strict";
/**
 * Created by user on 2020/3/20.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueOfValueNode = exports.valueOfAstNode = exports.valueOfVariableNode = exports.valueOfObjectValueNode = void 0;
const language_1 = require("graphql/language");
const graphql_1 = require("graphql");
const util_1 = require("util");
function valueOfObjectValueNode(ast, variables) {
    return Object.values(ast.fields)
        .reduce((a, b) => {
        a[b.name.value] = valueOfValueNode(b.value, variables);
        return a;
    }, {});
}
exports.valueOfObjectValueNode = valueOfObjectValueNode;
function valueOfVariableNode(ast, variables) {
    const name = ast.name.value;
    return variables === null || variables === void 0 ? void 0 : variables[name];
}
exports.valueOfVariableNode = valueOfVariableNode;
function valueOfAstNode(ast, variables) {
    return valueOfValueNode(ast, variables);
}
exports.valueOfAstNode = valueOfAstNode;
function valueOfValueNode(ast, variables) {
    switch (ast.kind) {
        case language_1.Kind.STRING:
        case language_1.Kind.INT:
        case language_1.Kind.FLOAT:
        case language_1.Kind.ENUM:
            return ast.value;
        case language_1.Kind.BOOLEAN:
            return ast.value;
        case language_1.Kind.NULL:
            break;
        case language_1.Kind.VARIABLE:
            return valueOfVariableNode(ast, variables);
        case language_1.Kind.OBJECT:
            return valueOfObjectValueNode(ast, variables);
        default:
            throw new graphql_1.GraphQLError(`not support parse ${util_1.inspect(ast.kind)}, got ${util_1.inspect(ast)}`);
    }
    return void 0;
}
exports.valueOfValueNode = valueOfValueNode;
exports.default = valueOfValueNode;
//# sourceMappingURL=index.js.map