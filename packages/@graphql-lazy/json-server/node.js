"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemaBuilder = void 0;
const jsonGraphqlExpress_1 = __importDefault(require("./lib/jsonGraphqlExpress"));
const lazy_json_graphql_1 = __importDefault(require("lazy-json-graphql"));
exports.jsonSchemaBuilder = lazy_json_graphql_1.default;
exports.default = jsonGraphqlExpress_1.default;
//# sourceMappingURL=node.js.map