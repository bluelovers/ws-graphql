"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const lazy_json_graphql_1 = __importDefault(require("lazy-json-graphql"));
/**
 * Starts a GraphQL Server in your browser: intercepts every call to http://localhost:3000/graphql
 * and returns a response from the supplied data.
 *
 * @export A sinon.js FakeServer (http://sinonjs.org/releases/v2.3.6/fake-xhr-and-server/#fake-server)
 * @param {any} data
 * @param {any} url Specifies the endpoint to intercept (Default is 'http://localhost:3000/graphql').
 *
 * @example
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
 *
 * GraphQLClientServer(data);
 * GraphQLClientServer(data, 'http://localhost:8080/api/graphql');
 */
function handleRequestFactory(data) {
    const schema = lazy_json_graphql_1.default(data);
    return (url, opts = {}) => {
        let body = opts.body;
        if (url.requestBody) {
            body = url.requestBody;
        }
        const query = JSON.parse(body);
        return graphql_1.graphql(schema, query.query, undefined, undefined, query.variables).then(result => ({
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result),
        }), error => ({
            status: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(error),
        }));
    };
}
exports.default = handleRequestFactory;
//# sourceMappingURL=handleRequest.js.map