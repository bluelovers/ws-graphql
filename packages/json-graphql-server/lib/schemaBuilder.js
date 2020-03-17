"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaBuilder = void 0;
const graphql_tools_1 = require("graphql-tools");
const index_1 = __importDefault(require("./resolver/index"));
const printSchemaFromData_1 = __importDefault(require("./utils/printSchemaFromData"));
/**
 * Generates a GraphQL Schema object for your data
 *
 * @param {ISourceDataRoot} data
 * @param {IOptions} options
 * @returns {GraphQLSchema}
 *
 * @example
 * import {graphql} from 'graphql';
 * import jsonSchemaBuilder from 'lazy-json-graphql';
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
 * const schema = jsonSchemaBuilder(data);
 * const query = `[...]`
 * graphql(schema, query).then(result => {
 *   console.log(result);
 * });
 *
 */
function schemaBuilder(data, options = {}) {
    const typeDefs = printSchemaFromData_1.default(data, options);
    const resolvers = index_1.default(data, options);
    return graphql_tools_1.makeExecutableSchema({
        typeDefs,
        resolvers,
        // eslint-disable-line no-console
        logger: { log: e => console.log(e) },
    });
}
exports.schemaBuilder = schemaBuilder;
exports.default = schemaBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjaGVtYUJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaURBQXFEO0FBR3JELDZEQUF3QztBQUV4QyxzRkFBOEQ7QUFFOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBDRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxJQUFxQixFQUFFLFVBQW9CLEVBQUU7SUFFMUUsTUFBTSxRQUFRLEdBQUcsNkJBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELE1BQU0sU0FBUyxHQUFHLGVBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUMsT0FBTyxvQ0FBb0IsQ0FBQztRQUMzQixRQUFRO1FBQ1IsU0FBUztRQUNULGlDQUFpQztRQUNqQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO0tBQ3BDLENBQUMsQ0FBQTtBQUNILENBQUM7QUFYRCxzQ0FXQztBQUVELGtCQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VFeGVjdXRhYmxlU2NoZW1hIH0gZnJvbSAnZ3JhcGhxbC10b29scyc7XG5pbXBvcnQgeyBwcmludFNjaGVtYSwgR3JhcGhRTFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdldFNjaGVtYUZyb21EYXRhIGZyb20gJy4vaW50cm9zcGVjdGlvbi9nZXRTY2hlbWFGcm9tRGF0YSc7XG5pbXBvcnQgcmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlci9pbmRleCc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvb3QsIElTb3VyY2VEYXRhUm93QmFzZSwgSU9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBwcmludFNjaGVtYUZyb21EYXRhIGZyb20gJy4vdXRpbHMvcHJpbnRTY2hlbWFGcm9tRGF0YSc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgR3JhcGhRTCBTY2hlbWEgb2JqZWN0IGZvciB5b3VyIGRhdGFcbiAqXG4gKiBAcGFyYW0ge0lTb3VyY2VEYXRhUm9vdH0gZGF0YVxuICogQHBhcmFtIHtJT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge0dyYXBoUUxTY2hlbWF9XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7Z3JhcGhxbH0gZnJvbSAnZ3JhcGhxbCc7XG4gKiBpbXBvcnQganNvblNjaGVtYUJ1aWxkZXIgZnJvbSAnbGF6eS1qc29uLWdyYXBocWwnO1xuICogY29uc3QgZGF0YSA9IHtcbiAqICAgIFwicG9zdHNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiTG9yZW0gSXBzdW1cIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiAyNTQsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiAxMjMsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMixcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpYyBEb2xvciBhbWV0XCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogNjUsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiA0NTYsXG4gKiAgICAgICAgfSxcbiAqICAgIF0sXG4gKiAgICBcInVzZXJzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMTIzLFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKb2huIERvZVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogNDU2LFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKYW5lIERvZVwiXG4gKiAgICAgICAgfVxuICogICAgXSxcbiAqIH07XG4gKiBjb25zdCBzY2hlbWEgPSBqc29uU2NoZW1hQnVpbGRlcihkYXRhKTtcbiAqIGNvbnN0IHF1ZXJ5ID0gYFsuLi5dYFxuICogZ3JhcGhxbChzY2hlbWEsIHF1ZXJ5KS50aGVuKHJlc3VsdCA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gKiB9KTtcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWFCdWlsZGVyKGRhdGE6IElTb3VyY2VEYXRhUm9vdCwgb3B0aW9uczogSU9wdGlvbnMgPSB7fSlcbntcblx0Y29uc3QgdHlwZURlZnMgPSBwcmludFNjaGVtYUZyb21EYXRhKGRhdGEsIG9wdGlvbnMpO1xuXHRjb25zdCByZXNvbHZlcnMgPSByZXNvbHZlcihkYXRhLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gbWFrZUV4ZWN1dGFibGVTY2hlbWEoe1xuXHRcdHR5cGVEZWZzLFxuXHRcdHJlc29sdmVycyxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0XHRsb2dnZXI6IHsgbG9nOiBlID0+IGNvbnNvbGUubG9nKGUpIH0sXG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVtYUJ1aWxkZXJcbiJdfQ==