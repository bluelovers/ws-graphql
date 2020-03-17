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
    schema: lazy_json_graphql_1.default(data),
    graphiql: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbkdyYXBocWxFeHByZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsianNvbkdyYXBocWxFeHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQTBDO0FBQzFDLDBFQUE4QztBQUU5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJDRztBQUNILGtCQUFlLElBQUksQ0FBQyxFQUFFLENBQ3JCLHlCQUFXLENBQUM7SUFDWCxNQUFNLEVBQUUsMkJBQWEsQ0FBQyxJQUFJLENBQUM7SUFDM0IsUUFBUSxFQUFFLElBQUk7Q0FDZCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JhcGhxbEhUVFAgZnJvbSAnZXhwcmVzcy1ncmFwaHFsJztcbmltcG9ydCBzY2hlbWFCdWlsZGVyIGZyb20gJ2xhenktanNvbi1ncmFwaHFsJztcblxuLyoqXG4gKiBBbiBleHByZXNzIG1pZGRsZXdhcmUgZm9yIGEgR3JhcGhRTCBlbmRwb2ludCBzZXJ2aW5nIGRhdGEgZnJvbSB0aGUgc3VwcGxpZWQganNvbi5cbiAqXG4gKiBAcGFyYW0ge2FueX0gZGF0YVxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgbWlkZGxld2FyZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG4gKiBpbXBvcnQganNvbkdyYXBocWxFeHByZXNzIGZyb20gJ2pzb24tZ3JhcGhxbC1zZXJ2ZXInO1xuICpcbiAqIGNvbnN0IGRhdGEgPSB7XG4gKiAgICBcInBvc3RzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDY1LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgICAgIH0sXG4gKiAgICBdLFxuICogICAgXCJ1c2Vyc1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEyMyxcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDQ1NixcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIlxuICogICAgICAgIH1cbiAqICAgIF0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IFBPUlQgPSAzMDAwO1xuICogdmFyIGFwcCA9IGV4cHJlc3MoKTtcbiAqXG4gKiBhcHAudXNlKCcvZ3JhcGhxbCcsIGpzb25HcmFwaHFsRXhwcmVzcyhkYXRhKSk7XG4gKlxuICogYXBwLmxpc3RlbihQT1JUKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGF0YSA9PlxuXHRncmFwaHFsSFRUUCh7XG5cdFx0c2NoZW1hOiBzY2hlbWFCdWlsZGVyKGRhdGEpLFxuXHRcdGdyYXBoaXFsOiB0cnVlLFxuXHR9KTtcbiJdfQ==