"use strict";
/**
 * Created by user on 2020/3/20.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLiteral = exports.parseValue = exports.createRegExp = exports.serialize = void 0;
const language_1 = require("graphql/language");
const graphql_1 = require("graphql");
const util_1 = require("util");
const getSource_1 = require("regexp-cjk/lib/getSource");
const parse_value_node_1 = __importDefault(require("@graphql-lazy/parse-value-node"));
function serialize(value) {
    return value.toString();
}
exports.serialize = serialize;
function createRegExp(value) {
    if (value instanceof RegExp) {
        return value;
    }
    else if (typeof value === 'string') {
        let m = getSource_1.parseRegularExpressionString(value);
        if (m) {
            return new RegExp(m.source, m.flags);
        }
    }
    else if (typeof (value === null || value === void 0 ? void 0 : value.source) === 'string') {
        return new RegExp(value.source, value.flags);
    }
}
exports.createRegExp = createRegExp;
function parseValue(value, options) {
    var _a;
    let re = ((_a = options === null || options === void 0 ? void 0 : options.createRegExp) !== null && _a !== void 0 ? _a : createRegExp)(value);
    if (re instanceof RegExp) {
        return re;
    }
    const msg = `Can't create new RegExp from: ${util_1.inspect(value)}`;
    throw new graphql_1.GraphQLError(msg);
}
exports.parseValue = parseValue;
function parseLiteral(ast, variables, options) {
    switch (ast.kind) {
        case language_1.Kind.OBJECT:
            let map = parse_value_node_1.default(ast, variables);
            return parseValue(map, options);
        case language_1.Kind.STRING:
            return parseValue(ast.value, options);
        case language_1.Kind.VARIABLE:
            const name = ast.name.value;
            return variables ? parseValue(variables[name], options) : undefined;
        default:
            throw new graphql_1.GraphQLError(`Can't handle type ${util_1.inspect(ast.kind)}, ast: ${util_1.inspect(ast)}`);
    }
}
exports.parseLiteral = parseLiteral;
//# sourceMappingURL=util.js.map