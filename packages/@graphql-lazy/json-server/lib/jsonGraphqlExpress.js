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
function jsonGraphqlExpress(data) {
    return express_graphql_1.default({
        schema: lazy_json_graphql_1.default(data),
        graphiql: true,
    });
}
exports.default = jsonGraphqlExpress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbkdyYXBocWxFeHByZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianNvbkdyYXBocWxFeHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQTBDO0FBQzFDLDBFQUE4QztBQUc5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNHO0FBQ0gsU0FBd0Isa0JBQWtCLENBQUMsSUFBcUI7SUFFL0QsT0FBTyx5QkFBVyxDQUFDO1FBQ2xCLE1BQU0sRUFBRSwyQkFBYSxDQUFDLElBQUksQ0FBQztRQUMzQixRQUFRLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFORCxxQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncmFwaHFsSFRUUCBmcm9tICdleHByZXNzLWdyYXBocWwnO1xuaW1wb3J0IHNjaGVtYUJ1aWxkZXIgZnJvbSAnbGF6eS1qc29uLWdyYXBocWwnO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb290IH0gZnJvbSAnbGF6eS1qc29uLWdyYXBocWwvbGliL3R5cGVzJztcblxuLyoqXG4gKiBBbiBleHByZXNzIG1pZGRsZXdhcmUgZm9yIGEgR3JhcGhRTCBlbmRwb2ludCBzZXJ2aW5nIGRhdGEgZnJvbSB0aGUgc3VwcGxpZWQganNvbi5cbiAqXG4gKiBAcGFyYW0ge0lTb3VyY2VEYXRhUm9vdH0gZGF0YVxuICogQHJldHVybnMge2dyYXBocWxIVFRQLk1pZGRsZXdhcmV9IEFuIGFycmF5IG9mIG1pZGRsZXdhcmVzXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuICogaW1wb3J0IGpzb25HcmFwaHFsRXhwcmVzcyBmcm9tICdAZ3JhcGhxbC1sYXp5L2pzb24tc2VydmVyJztcbiAqIGNvbnN0IGRhdGEgPSB7XG4gKiAgICBcInBvc3RzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDY1LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgICAgIH0sXG4gKiAgICBdLFxuICogICAgXCJ1c2Vyc1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEyMyxcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDQ1NixcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIlxuICogICAgICAgIH1cbiAqICAgIF0sXG4gKiB9O1xuICogY29uc3QgUE9SVCA9IDMwMDA7XG4gKiB2YXIgYXBwID0gZXhwcmVzcygpO1xuICogYXBwLnVzZSgnL2dyYXBocWwnLCBqc29uR3JhcGhxbEV4cHJlc3MoZGF0YSkpO1xuICogYXBwLmxpc3RlbihQT1JUKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ganNvbkdyYXBocWxFeHByZXNzKGRhdGE6IElTb3VyY2VEYXRhUm9vdClcbntcblx0cmV0dXJuIGdyYXBocWxIVFRQKHtcblx0XHRzY2hlbWE6IHNjaGVtYUJ1aWxkZXIoZGF0YSksXG5cdFx0Z3JhcGhpcWw6IHRydWUsXG5cdH0pO1xufVxuIl19