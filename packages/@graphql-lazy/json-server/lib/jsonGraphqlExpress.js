"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = __importDefault(require("express-graphql"));
const lazy_json_graphql_1 = __importDefault(require("lazy-json-graphql"));
/**
 * An express middleware for a GraphQL endpoint serving data from the supplied json.
 *
 * @param {ISourceDataRoot} data
 * @returns {graphqlHTTP.Middleware} An array of middlewares
 *
 * @example
 * import express from 'express';
 * import jsonGraphqlExpress from '@graphql-lazy/json-server';
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
 * const PORT = 3000;
 * var app = express();
 * app.use('/graphql', jsonGraphqlExpress(data));
 * app.listen(PORT);
 */
function jsonGraphqlExpress(data, options = {}) {
    return express_graphql_1.default({
        schema: lazy_json_graphql_1.default(data, options),
        graphiql: true,
    });
}
exports.default = jsonGraphqlExpress;
//# sourceMappingURL=jsonGraphqlExpress.js.map