"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const index_1 = __importDefault(require("./resolver/index"));
const printSchemaFromData_1 = __importDefault(require("./utils/printSchemaFromData"));
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
    let typeDefs = printSchemaFromData_1.default(data);
    return graphql_tools_1.makeExecutableSchema({
        typeDefs,
        resolvers: index_1.default(data),
        logger: { log: e => console.log(e) },
    });
}
exports.default = schemaBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjaGVtYUJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBcUQ7QUFHckQsNkRBQXdDO0FBRXhDLHNGQUE4RDtBQUU5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJDRztBQUNILFNBQXdCLGFBQWEsQ0FBQyxJQUFxQjtJQUUxRCxJQUFJLFFBQVEsR0FBRyw2QkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QyxPQUFPLG9DQUFvQixDQUFDO1FBQzNCLFFBQVE7UUFDUixTQUFTLEVBQUUsZUFBUSxDQUFDLElBQUksQ0FBQztRQUN6QixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO0tBQ3BDLENBQUMsQ0FBQTtBQUNILENBQUM7QUFURCxnQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5pbXBvcnQgeyBwcmludFNjaGVtYSwgR3JhcGhRTFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdldFNjaGVtYUZyb21EYXRhIGZyb20gJy4vaW50cm9zcGVjdGlvbi9nZXRTY2hlbWFGcm9tRGF0YSc7XG5pbXBvcnQgcmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlci9pbmRleCc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvb3QsIElTb3VyY2VEYXRhUm93QmFzZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHByaW50U2NoZW1hRnJvbURhdGEgZnJvbSAnLi91dGlscy9wcmludFNjaGVtYUZyb21EYXRhJztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBHcmFwaFFMIFNjaGVtYSBvYmplY3QgZm9yIHlvdXIgZGF0YVxuICpcbiAqIEBwYXJhbSB7YW55fSBkYXRhXG4gKiBAcmV0dXJucyBBIEdyYXBoUUwgU2NoZW1hXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7Z3JhcGhxbH0gZnJvbSAnZ3JhcGhxbCc7XG4gKiBpbXBvcnQge2pzb25TY2hlbWFCdWlsZGVyfSBmcm9tICdqc29uLWdyYXBocWwtc2VydmVyJztcbiAqXG4gKiBjb25zdCBkYXRhID0ge1xuICogICAgXCJwb3N0c1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMb3JlbSBJcHN1bVwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDI1NCxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDEyMyxcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAyLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiU2ljIERvbG9yIGFtZXRcIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiA2NSxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDQ1NixcbiAqICAgICAgICB9LFxuICogICAgXSxcbiAqICAgIFwidXNlcnNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxMjMsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvaG4gRG9lXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiA0NTYsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphbmUgRG9lXCJcbiAqICAgICAgICB9XG4gKiAgICBdLFxuICogfTtcbiAqXG4gKiBjb25zdCBzY2hlbWEgPSBqc29uU2NoZW1hQnVpbGRlcihkYXRhKTtcbiAqIGNvbnN0IHF1ZXJ5ID0gYFsuLi5dYFxuICogZ3JhcGhxbChzY2hlbWEsIHF1ZXJ5KS50aGVuKHJlc3VsdCA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gKiB9KTtcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjaGVtYUJ1aWxkZXIoZGF0YTogSVNvdXJjZURhdGFSb290KVxue1xuXHRsZXQgdHlwZURlZnMgPSBwcmludFNjaGVtYUZyb21EYXRhKGRhdGEpO1xuXG5cdHJldHVybiBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XG5cdFx0dHlwZURlZnMsXG5cdFx0cmVzb2x2ZXJzOiByZXNvbHZlcihkYXRhKSxcblx0XHRsb2dnZXI6IHsgbG9nOiBlID0+IGNvbnNvbGUubG9nKGUpIH0sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXHR9KVxufVxuIl19