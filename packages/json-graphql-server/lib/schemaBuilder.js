"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const graphql_1 = require("graphql");
const getSchemaFromData_1 = __importDefault(require("./introspection/getSchemaFromData"));
const index_1 = __importDefault(require("./resolver/index"));
/**
 * Generates a GraphQL Schema object for your data
 *
 * @param {any} data
 * @returns A GraphQL Schema
 *
 * @example
 * import {graphql} from 'graphql';
 * import {jsonSchemaBuilder} from 'json-graphql-server';
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
 * const schema = jsonSchemaBuilder(data);
 * const query = `[...]`
 * graphql(schema, query).then(result => {
 *   console.log(result);
 * });
 *
 */
function schemaBuilder(data) {
    return graphql_tools_1.makeExecutableSchema({
        typeDefs: graphql_1.printSchema(getSchemaFromData_1.default(data)),
        resolvers: index_1.default(data),
        logger: { log: e => console.log(e) },
    });
}
exports.default = schemaBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjaGVtYUJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBcUQ7QUFDckQscUNBQXFEO0FBQ3JELDBGQUFrRTtBQUNsRSw2REFBd0M7QUFHeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ0c7QUFDSCxTQUF3QixhQUFhLENBQUMsSUFBcUI7SUFFMUQsT0FBTyxvQ0FBb0IsQ0FBQztRQUMzQixRQUFRLEVBQUUscUJBQVcsQ0FBQywyQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxTQUFTLEVBQUUsZUFBUSxDQUFDLElBQUksQ0FBQztRQUN6QixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO0tBQ3BDLENBQUMsQ0FBQTtBQUNILENBQUM7QUFQRCxnQ0FPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5pbXBvcnQgeyBwcmludFNjaGVtYSwgR3JhcGhRTFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdldFNjaGVtYUZyb21EYXRhIGZyb20gJy4vaW50cm9zcGVjdGlvbi9nZXRTY2hlbWFGcm9tRGF0YSc7XG5pbXBvcnQgcmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlci9pbmRleCc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvb3QsIElTb3VyY2VEYXRhUm93QmFzZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIEdyYXBoUUwgU2NoZW1hIG9iamVjdCBmb3IgeW91ciBkYXRhXG4gKlxuICogQHBhcmFtIHthbnl9IGRhdGFcbiAqIEByZXR1cm5zIEEgR3JhcGhRTCBTY2hlbWFcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHtncmFwaHFsfSBmcm9tICdncmFwaHFsJztcbiAqIGltcG9ydCB7anNvblNjaGVtYUJ1aWxkZXJ9IGZyb20gJ2pzb24tZ3JhcGhxbC1zZXJ2ZXInO1xuICpcbiAqIGNvbnN0IGRhdGEgPSB7XG4gKiAgICBcInBvc3RzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDY1LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgICAgIH0sXG4gKiAgICBdLFxuICogICAgXCJ1c2Vyc1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEyMyxcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDQ1NixcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIlxuICogICAgICAgIH1cbiAqICAgIF0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IHNjaGVtYSA9IGpzb25TY2hlbWFCdWlsZGVyKGRhdGEpO1xuICogY29uc3QgcXVlcnkgPSBgWy4uLl1gXG4gKiBncmFwaHFsKHNjaGVtYSwgcXVlcnkpLnRoZW4ocmVzdWx0ID0+IHtcbiAqICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAqIH0pO1xuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2NoZW1hQnVpbGRlcihkYXRhOiBJU291cmNlRGF0YVJvb3QpXG57XG5cdHJldHVybiBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XG5cdFx0dHlwZURlZnM6IHByaW50U2NoZW1hKGdldFNjaGVtYUZyb21EYXRhKGRhdGEpKSxcblx0XHRyZXNvbHZlcnM6IHJlc29sdmVyKGRhdGEpLFxuXHRcdGxvZ2dlcjogeyBsb2c6IGUgPT4gY29uc29sZS5sb2coZSkgfSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cdH0pXG59XG4iXX0=