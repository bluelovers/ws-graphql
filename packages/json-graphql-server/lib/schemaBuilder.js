"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const graphql_1 = require("graphql");
const getSchemaFromData_1 = __importDefault(require("./introspection/getSchemaFromData"));
const resolver_1 = __importDefault(require("./resolver"));
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
        resolvers: resolver_1.default(data),
        logger: { log: e => console.log(e) },
    });
}
exports.default = schemaBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjaGVtYUJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBcUQ7QUFDckQscUNBQXFEO0FBQ3JELDBGQUFrRTtBQUNsRSwwREFBa0M7QUFHbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQ0c7QUFDSCxTQUF3QixhQUFhLENBQUMsSUFBcUI7SUFFMUQsT0FBTyxvQ0FBb0IsQ0FBQztRQUMzQixRQUFRLEVBQUUscUJBQVcsQ0FBQywyQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxTQUFTLEVBQUUsa0JBQVEsQ0FBQyxJQUFJLENBQUM7UUFDekIsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtLQUNwQyxDQUFDLENBQUE7QUFDSCxDQUFDO0FBUEQsZ0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlRXhlY3V0YWJsZVNjaGVtYSB9IGZyb20gJ2dyYXBocWwtdG9vbHMnO1xuaW1wb3J0IHsgcHJpbnRTY2hlbWEsIEdyYXBoUUxTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBnZXRTY2hlbWFGcm9tRGF0YSBmcm9tICcuL2ludHJvc3BlY3Rpb24vZ2V0U2NoZW1hRnJvbURhdGEnO1xuaW1wb3J0IHJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXInO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb290IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgR3JhcGhRTCBTY2hlbWEgb2JqZWN0IGZvciB5b3VyIGRhdGFcbiAqXG4gKiBAcGFyYW0ge2FueX0gZGF0YVxuICogQHJldHVybnMgQSBHcmFwaFFMIFNjaGVtYVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge2dyYXBocWx9IGZyb20gJ2dyYXBocWwnO1xuICogaW1wb3J0IHtqc29uU2NoZW1hQnVpbGRlcn0gZnJvbSAnanNvbi1ncmFwaHFsLXNlcnZlcic7XG4gKlxuICogY29uc3QgZGF0YSA9IHtcbiAqICAgIFwicG9zdHNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiTG9yZW0gSXBzdW1cIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiAyNTQsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiAxMjMsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMixcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpYyBEb2xvciBhbWV0XCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogNjUsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiA0NTYsXG4gKiAgICAgICAgfSxcbiAqICAgIF0sXG4gKiAgICBcInVzZXJzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMTIzLFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKb2huIERvZVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogNDU2LFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKYW5lIERvZVwiXG4gKiAgICAgICAgfVxuICogICAgXSxcbiAqIH07XG4gKlxuICogY29uc3Qgc2NoZW1hID0ganNvblNjaGVtYUJ1aWxkZXIoZGF0YSk7XG4gKiBjb25zdCBxdWVyeSA9IGBbLi4uXWBcbiAqIGdyYXBocWwoc2NoZW1hLCBxdWVyeSkudGhlbihyZXN1bHQgPT4ge1xuICogICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICogfSk7XG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY2hlbWFCdWlsZGVyKGRhdGE6IElTb3VyY2VEYXRhUm9vdClcbntcblx0cmV0dXJuIG1ha2VFeGVjdXRhYmxlU2NoZW1hKHtcblx0XHR0eXBlRGVmczogcHJpbnRTY2hlbWEoZ2V0U2NoZW1hRnJvbURhdGEoZGF0YSkpLFxuXHRcdHJlc29sdmVyczogcmVzb2x2ZXIoZGF0YSksXG5cdFx0bG9nZ2VyOiB7IGxvZzogZSA9PiBjb25zb2xlLmxvZyhlKSB9LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0fSlcbn1cbiJdfQ==