"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemaBuilder = void 0;
const graphQLClientServer_1 = __importDefault(require("./lib/graphQLClientServer"));
const lazy_json_graphql_1 = __importDefault(require("lazy-json-graphql"));
exports.jsonSchemaBuilder = lazy_json_graphql_1.default;
if (typeof window !== 'undefined') {
    window.JsonGraphqlServer = graphQLClientServer_1.default;
    window.jsonSchemaBuilder = lazy_json_graphql_1.default;
}
exports.default = graphQLClientServer_1.default;
//# sourceMappingURL=client.js.map