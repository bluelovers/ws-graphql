"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = __importDefault(require("express-graphql"));
const schemaBuilder_1 = __importDefault(require("json-graphql-server/lib/schemaBuilder"));
/**
 * An express middleware for a GraphQL endpoint serving data from the supplied json.
 *
 * @param {any} data
 * @returns An array of middlewares
 *
 * @example
 * import express from 'express';
 * import jsonGraphqlExpress from 'json-graphql-server';
 *
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
 * const PORT = 3000;
 * var app = express();
 *
 * app.use('/graphql', jsonGraphqlExpress(data));
 *
 * app.listen(PORT);
 */
exports.default = data => express_graphql_1.default({
    schema: schemaBuilder_1.default(data),
    graphiql: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbkdyYXBocWxFeHByZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianNvbkdyYXBocWxFeHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQTBDO0FBQzFDLDBGQUFrRTtBQUVsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJDRztBQUNILGtCQUFlLElBQUksQ0FBQyxFQUFFLENBQ3JCLHlCQUFXLENBQUM7SUFDWCxNQUFNLEVBQUUsdUJBQWEsQ0FBQyxJQUFJLENBQUM7SUFDM0IsUUFBUSxFQUFFLElBQUk7Q0FDZCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JhcGhxbEhUVFAgZnJvbSAnZXhwcmVzcy1ncmFwaHFsJztcbmltcG9ydCBzY2hlbWFCdWlsZGVyIGZyb20gJ2pzb24tZ3JhcGhxbC1zZXJ2ZXIvbGliL3NjaGVtYUJ1aWxkZXInO1xuXG4vKipcbiAqIEFuIGV4cHJlc3MgbWlkZGxld2FyZSBmb3IgYSBHcmFwaFFMIGVuZHBvaW50IHNlcnZpbmcgZGF0YSBmcm9tIHRoZSBzdXBwbGllZCBqc29uLlxuICpcbiAqIEBwYXJhbSB7YW55fSBkYXRhXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBtaWRkbGV3YXJlc1xuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbiAqIGltcG9ydCBqc29uR3JhcGhxbEV4cHJlc3MgZnJvbSAnanNvbi1ncmFwaHFsLXNlcnZlcic7XG4gKlxuICogY29uc3QgZGF0YSA9IHtcbiAqICAgIFwicG9zdHNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiTG9yZW0gSXBzdW1cIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiAyNTQsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiAxMjMsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMixcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpYyBEb2xvciBhbWV0XCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogNjUsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiA0NTYsXG4gKiAgICAgICAgfSxcbiAqICAgIF0sXG4gKiAgICBcInVzZXJzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMTIzLFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKb2huIERvZVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogNDU2LFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKYW5lIERvZVwiXG4gKiAgICAgICAgfVxuICogICAgXSxcbiAqIH07XG4gKlxuICogY29uc3QgUE9SVCA9IDMwMDA7XG4gKiB2YXIgYXBwID0gZXhwcmVzcygpO1xuICpcbiAqIGFwcC51c2UoJy9ncmFwaHFsJywganNvbkdyYXBocWxFeHByZXNzKGRhdGEpKTtcbiAqXG4gKiBhcHAubGlzdGVuKFBPUlQpO1xuICovXG5leHBvcnQgZGVmYXVsdCBkYXRhID0+XG5cdGdyYXBocWxIVFRQKHtcblx0XHRzY2hlbWE6IHNjaGVtYUJ1aWxkZXIoZGF0YSksXG5cdFx0Z3JhcGhpcWw6IHRydWUsXG5cdH0pO1xuIl19