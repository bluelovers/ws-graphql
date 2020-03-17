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
function handleRequestFactory(data) {
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
exports.default = handleRequestFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRsZVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBa0M7QUFDbEMsMEVBQThDO0FBRzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDRztBQUNILFNBQXdCLG9CQUFvQixDQUFDLElBQXFCO0lBRWpFLE1BQU0sTUFBTSxHQUFHLDJCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBRVAsRUFBRSxPQUVDLEVBQUUsRUFBRSxFQUFFO1FBRVQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVyQixJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQ25CO1lBQ0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7U0FDdkI7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9CLE9BQU8saUJBQU8sQ0FDYixNQUFNLEVBQ04sS0FBSyxDQUFDLEtBQUssRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssQ0FBQyxTQUFTLENBQ2YsQ0FBQyxJQUFJLENBQ0wsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQzVCLENBQUMsRUFDRixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxNQUFNLEVBQUUsR0FBRztZQUNYLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUMvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDM0IsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSCxDQUFDO0FBckNELHVDQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBzY2hlbWFCdWlsZGVyIGZyb20gJ2xhenktanNvbi1ncmFwaHFsJztcbmltcG9ydCB7IElTb3VyY2VEYXRhUm9vdCB9IGZyb20gJ2xhenktanNvbi1ncmFwaHFsL2xpYi90eXBlcyc7XG5cbi8qKlxuICogU3RhcnRzIGEgR3JhcGhRTCBTZXJ2ZXIgaW4geW91ciBicm93c2VyOiBpbnRlcmNlcHRzIGV2ZXJ5IGNhbGwgdG8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWxcbiAqIGFuZCByZXR1cm5zIGEgcmVzcG9uc2UgZnJvbSB0aGUgc3VwcGxpZWQgZGF0YS5cbiAqXG4gKiBAZXhwb3J0IEEgc2lub24uanMgRmFrZVNlcnZlciAoaHR0cDovL3Npbm9uanMub3JnL3JlbGVhc2VzL3YyLjMuNi9mYWtlLXhoci1hbmQtc2VydmVyLyNmYWtlLXNlcnZlcilcbiAqIEBwYXJhbSB7YW55fSBkYXRhXG4gKiBAcGFyYW0ge2FueX0gdXJsIFNwZWNpZmllcyB0aGUgZW5kcG9pbnQgdG8gaW50ZXJjZXB0IChEZWZhdWx0IGlzICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JhcGhxbCcpLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBkYXRhID0ge1xuICogICAgXCJwb3N0c1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMb3JlbSBJcHN1bVwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDI1NCxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDEyMyxcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAyLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiU2ljIERvbG9yIGFtZXRcIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiA2NSxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDQ1NixcbiAqICAgICAgICB9LFxuICogICAgXSxcbiAqICAgIFwidXNlcnNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxMjMsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvaG4gRG9lXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiA0NTYsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphbmUgRG9lXCJcbiAqICAgICAgICB9XG4gKiAgICBdLFxuICogfTtcbiAqXG4gKiBHcmFwaFFMQ2xpZW50U2VydmVyKGRhdGEpO1xuICogR3JhcGhRTENsaWVudFNlcnZlcihkYXRhLCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ncmFwaHFsJyk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3RGYWN0b3J5KGRhdGE6IElTb3VyY2VEYXRhUm9vdClcbntcblx0Y29uc3Qgc2NoZW1hID0gc2NoZW1hQnVpbGRlcihkYXRhKTtcblx0cmV0dXJuICh1cmw6IHtcblx0XHRyZXF1ZXN0Qm9keT8sXG5cdH0sIG9wdHM6IHtcblx0XHRib2R5Pyxcblx0fSA9IHt9KSA9PlxuXHR7XG5cdFx0bGV0IGJvZHkgPSBvcHRzLmJvZHk7XG5cblx0XHRpZiAodXJsLnJlcXVlc3RCb2R5KVxuXHRcdHtcblx0XHRcdGJvZHkgPSB1cmwucmVxdWVzdEJvZHk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcXVlcnkgPSBKU09OLnBhcnNlKGJvZHkpO1xuXG5cdFx0cmV0dXJuIGdyYXBocWwoXG5cdFx0XHRzY2hlbWEsXG5cdFx0XHRxdWVyeS5xdWVyeSxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdHF1ZXJ5LnZhcmlhYmxlcyxcblx0XHQpLnRoZW4oXG5cdFx0XHRyZXN1bHQgPT4gKHtcblx0XHRcdFx0c3RhdHVzOiAyMDAsXG5cdFx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShyZXN1bHQpLFxuXHRcdFx0fSksXG5cdFx0XHRlcnJvciA9PiAoe1xuXHRcdFx0XHRzdGF0dXM6IDUwMCxcblx0XHRcdFx0aGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGVycm9yKSxcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH07XG59XG4iXX0=