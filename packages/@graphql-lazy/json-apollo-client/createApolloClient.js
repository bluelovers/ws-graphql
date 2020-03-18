"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApolloClient = void 0;
const apollo_client_1 = require("apollo-client");
const apollo_test_utils_1 = require("apollo-test-utils");
const getSchemaFromData_1 = __importDefault(require("lazy-json-graphql/lib/introspection/getSchemaFromData"));
function createApolloClient(data) {
    const schema = getSchemaFromData_1.default(data);
    const mockNetworkInterface = apollo_test_utils_1.mockNetworkInterfaceWithSchema({ schema });
    const client = new apollo_client_1.ApolloClient({
        // @ts-ignore
        networkInterface: mockNetworkInterface,
    });
    return client;
}
exports.createApolloClient = createApolloClient;
exports.default = createApolloClient;
//# sourceMappingURL=createApolloClient.js.map