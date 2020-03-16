"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schemaBuilder_1 = __importDefault(require("json-graphql-server/lib/schemaBuilder"));
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
    const schema = schemaBuilder_1.default(data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRsZVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBa0M7QUFDbEMsMEZBQWtFO0FBRWxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDRztBQUNILG1CQUF5QixJQUFJO0lBRTVCLE1BQU0sTUFBTSxHQUFHLHVCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFZLEVBQUUsRUFBRSxFQUFFO1FBRTlCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFckIsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUNuQjtZQUNDLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1NBQ3ZCO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixPQUFPLGlCQUFPLENBQ2IsTUFBTSxFQUNOLEtBQUssQ0FBQyxLQUFLLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLENBQUMsU0FBUyxDQUNmLENBQUMsSUFBSSxDQUNMLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNWLE1BQU0sRUFBRSxHQUFHO1lBQ1gsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUM1QixDQUFDLEVBQ0YsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQzNCLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQWpDRCw0QkFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgc2NoZW1hQnVpbGRlciBmcm9tICdqc29uLWdyYXBocWwtc2VydmVyL2xpYi9zY2hlbWFCdWlsZGVyJztcblxuLyoqXG4gKiBTdGFydHMgYSBHcmFwaFFMIFNlcnZlciBpbiB5b3VyIGJyb3dzZXI6IGludGVyY2VwdHMgZXZlcnkgY2FsbCB0byBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JhcGhxbFxuICogYW5kIHJldHVybnMgYSByZXNwb25zZSBmcm9tIHRoZSBzdXBwbGllZCBkYXRhLlxuICpcbiAqIEBleHBvcnQgQSBzaW5vbi5qcyBGYWtlU2VydmVyIChodHRwOi8vc2lub25qcy5vcmcvcmVsZWFzZXMvdjIuMy42L2Zha2UteGhyLWFuZC1zZXJ2ZXIvI2Zha2Utc2VydmVyKVxuICogQHBhcmFtIHthbnl9IGRhdGFcbiAqIEBwYXJhbSB7YW55fSB1cmwgU3BlY2lmaWVzIHRoZSBlbmRwb2ludCB0byBpbnRlcmNlcHQgKERlZmF1bHQgaXMgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsJykuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGRhdGEgPSB7XG4gKiAgICBcInBvc3RzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDY1LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgICAgIH0sXG4gKiAgICBdLFxuICogICAgXCJ1c2Vyc1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEyMyxcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDQ1NixcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIlxuICogICAgICAgIH1cbiAqICAgIF0sXG4gKiB9O1xuICpcbiAqIEdyYXBoUUxDbGllbnRTZXJ2ZXIoZGF0YSk7XG4gKiBHcmFwaFFMQ2xpZW50U2VydmVyKGRhdGEsICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dyYXBocWwnKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRhdGEpXG57XG5cdGNvbnN0IHNjaGVtYSA9IHNjaGVtYUJ1aWxkZXIoZGF0YSk7XG5cdHJldHVybiAodXJsLCBvcHRzOiBhbnkgPSB7fSkgPT5cblx0e1xuXHRcdGxldCBib2R5ID0gb3B0cy5ib2R5O1xuXG5cdFx0aWYgKHVybC5yZXF1ZXN0Qm9keSlcblx0XHR7XG5cdFx0XHRib2R5ID0gdXJsLnJlcXVlc3RCb2R5O1xuXHRcdH1cblxuXHRcdGNvbnN0IHF1ZXJ5ID0gSlNPTi5wYXJzZShib2R5KTtcblxuXHRcdHJldHVybiBncmFwaHFsKFxuXHRcdFx0c2NoZW1hLFxuXHRcdFx0cXVlcnkucXVlcnksXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRxdWVyeS52YXJpYWJsZXMsXG5cdFx0KS50aGVuKFxuXHRcdFx0cmVzdWx0ID0+ICh7XG5cdFx0XHRcdHN0YXR1czogMjAwLFxuXHRcdFx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocmVzdWx0KSxcblx0XHRcdH0pLFxuXHRcdFx0ZXJyb3IgPT4gKHtcblx0XHRcdFx0c3RhdHVzOiA1MDAsXG5cdFx0XHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShlcnJvciksXG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9O1xufVxuIl19