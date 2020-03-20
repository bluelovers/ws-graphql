"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xhr_mock_1 = __importStar(require("xhr-mock"));
const handleRequest_1 = __importDefault(require("./handleRequest"));
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
function graphQLClientServer({ data, url, }, options = {}) {
    const handleRequest = handleRequest_1.default(data, options);
    return {
        start() {
            // Intercept all XmlHttpRequest
            xhr_mock_1.default.setup();
            // Only handle POST request to the specified url
            xhr_mock_1.default.post(url, (req, res) => new Promise((resolve, reject) => {
                handleRequest(url, {
                    body: req.body(),
                })
                    .then(response => {
                    res.status(response.status);
                    res.headers(response.headers);
                    res.body(response.body);
                    resolve(res);
                })
                    .catch(reject);
            }));
            // Ensure all other requests are handled by the default XmlHttpRequest
            xhr_mock_1.default.use(xhr_mock_1.proxy);
        },
        stop() {
            xhr_mock_1.default.teardown();
        },
        getHandler() {
            return handleRequest;
        },
    };
}
exports.default = graphQLClientServer;
//# sourceMappingURL=graphQLClientServer.js.map