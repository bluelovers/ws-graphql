"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getSchemaFromData_1 = __importDefault(require("../introspection/getSchemaFromData"));
function default_1(data, options = {}) {
    var _a, _b, _c, _d;
    const typeDefs = graphql_1.printSchema(getSchemaFromData_1.default(data, options));
    return (_d = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.after) === null || _a === void 0 ? void 0 : _a.printSchema) === null || _b === void 0 ? void 0 : _b.call(_a, {
        typeDefs,
    }, data)) === null || _c === void 0 ? void 0 : _c.typeDefs) !== null && _d !== void 0 ? _d : typeDefs;
}
exports.default = default_1;
//# sourceMappingURL=printSchemaFromData.js.map