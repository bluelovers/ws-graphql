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
function default_1(data) {
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
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRsZVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBa0M7QUFDbEMsMEVBQThDO0FBRTlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDRztBQUNILG1CQUF5QixJQUFJO0lBRTVCLE1BQU0sTUFBTSxHQUFHLDJCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFZLEVBQUUsRUFBRSxFQUFFO1FBRTlCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUNuQjtZQUNDLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1NBQ3ZCO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixPQUFPLGlCQUFPLENBQ2IsTUFBTSxFQUNOLEtBQUssQ0FBQyxLQUFLLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLENBQUMsU0FBUyxDQUNmLENBQUMsSUFBSSxDQUNMLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNWLE1BQU0sRUFBRSxHQUFHO1lBQ1gsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUM1QixDQUFDLEVBQ0YsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzNCLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQWpDRCw0QkFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgc2NoZW1hQnVpbGRlciBmcm9tICdsYXp5LWpzb24tZ3JhcGhxbCc7XG5cbi8qKlxuICogU3RhcnRzIGEgR3JhcGhRTCBTZXJ2ZXIgaW4geW91ciBicm93c2VyOiBpbnRlcmNlcHRzIGV2ZXJ5IGNhbGwgdG8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWxcbiAqIGFuZCByZXR1cm5zIGEgcmVzcG9uc2UgZnJvbSB0aGUgc3VwcGxpZWQgZGF0YS5cbiAqXG4gKiBAZXhwb3J0IEEgc2lub24uanMgRmFrZVNlcnZlciAoaHR0cDovL3Npbm9uanMub3JnL3JlbGVhc2VzL3YyLjMuNi9mYWtlLXhoci1hbmQtc2VydmVyLyNmYWtlLXNlcnZlcilcbiAqIEBwYXJhbSB7YW55fSBkYXRhXG4gKiBAcGFyYW0ge2FueX0gdXJsIFNwZWNpZmllcyB0aGUgZW5kcG9pbnQgdG8gaW50ZXJjZXB0IChEZWZhdWx0IGlzICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JhcGhxbCcpLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBkYXRhID0ge1xuICogICAgXCJwb3N0c1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMb3JlbSBJcHN1bVwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDI1NCxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDEyMyxcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAyLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiU2ljIERvbG9yIGFtZXRcIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiA2NSxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDQ1NixcbiAqICAgICAgICB9LFxuICogICAgXSxcbiAqICAgIFwidXNlcnNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxMjMsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvaG4gRG9lXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiA0NTYsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphbmUgRG9lXCJcbiAqICAgICAgICB9XG4gKiAgICBdLFxuICogfTtcbiAqXG4gKiBHcmFwaFFMQ2xpZW50U2VydmVyKGRhdGEpO1xuICogR3JhcGhRTENsaWVudFNlcnZlcihkYXRhLCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ncmFwaHFsJyk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhKVxue1xuXHRjb25zdCBzY2hlbWEgPSBzY2hlbWFCdWlsZGVyKGRhdGEpO1xuXHRyZXR1cm4gKHVybCwgb3B0czogYW55ID0ge30pID0+XG5cdHtcblx0XHRsZXQgYm9keSA9IG9wdHMuYm9keTtcblxuXHRcdGlmICh1cmwucmVxdWVzdEJvZHkpXG5cdFx0e1xuXHRcdFx0Ym9keSA9IHVybC5yZXF1ZXN0Qm9keTtcblx0XHR9XG5cblx0XHRjb25zdCBxdWVyeSA9IEpTT04ucGFyc2UoYm9keSk7XG5cblx0XHRyZXR1cm4gZ3JhcGhxbChcblx0XHRcdHNjaGVtYSxcblx0XHRcdHF1ZXJ5LnF1ZXJ5LFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0cXVlcnkudmFyaWFibGVzLFxuXHRcdCkudGhlbihcblx0XHRcdHJlc3VsdCA9PiAoe1xuXHRcdFx0XHRzdGF0dXM6IDIwMCxcblx0XHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCksXG5cdFx0XHR9KSxcblx0XHRcdGVycm9yID0+ICh7XG5cdFx0XHRcdHN0YXR1czogNTAwLFxuXHRcdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZXJyb3IpLFxuXHRcdFx0fSksXG5cdFx0KTtcblx0fTtcbn1cbiJdfQ==