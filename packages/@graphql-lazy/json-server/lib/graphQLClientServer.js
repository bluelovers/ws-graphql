"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xhr_mock_1 = __importStar(require("xhr-mock"));
const handleRequest_1 = __importDefault(require("./handleRequest"));
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
function default_1({ data, url }) {
    const handleRequest = handleRequest_1.default(data);
    return {
        start() {
            // Intercept all XmlHttpRequest
            xhr_mock_1.default.setup();
            // Only handle POST request to the specified url
            xhr_mock_1.default.post(url, (req, res) => new Promise(resolve => {
                handleRequest(url, {
                    body: req.body(),
                }).then(response => {
                    res.status(response.status);
                    res.headers(response.headers);
                    res.body(response.body);
                    resolve(res);
                });
            }));
            // Ensure all other requests are handled by the default XmlHttpRequest
            xhr_mock_1.default.use(xhr_mock_1.proxy);
        },
        stop() {
            xhr_mock_1.default.teardown();
        },
        getHandler() {
            return handleRequest;
        },
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhRTENsaWVudFNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyYXBoUUxDbGllbnRTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXVDO0FBQ3ZDLG9FQUFtRDtBQUVuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ0c7QUFDSCxtQkFBeUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBRXJDLE1BQU0sYUFBYSxHQUFHLHVCQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpELE9BQU87UUFDTixLQUFLO1lBRUosK0JBQStCO1lBQy9CLGtCQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFYixnREFBZ0Q7WUFDaEQsa0JBQUksQ0FBQyxJQUFJLENBQ1IsR0FBRyxFQUNILENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQ1osSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBRXJCLGFBQWEsQ0FBQyxHQUFHLEVBQUU7b0JBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFO2lCQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUVsQixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDNUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1lBRUYsc0VBQXNFO1lBQ3RFLGtCQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSTtZQUVILGtCQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUNELFVBQVU7WUFFVCxPQUFPLGFBQWEsQ0FBQztRQUN0QixDQUFDO0tBQ0QsQ0FBQztBQUNILENBQUM7QUF6Q0QsNEJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vY2ssIHsgcHJveHkgfSBmcm9tICd4aHItbW9jayc7XG5pbXBvcnQgaGFuZGxlUmVxdWVzdEZhY3RvcnkgZnJvbSAnLi9oYW5kbGVSZXF1ZXN0JztcblxuLyoqXG4gKiBTdGFydHMgYSBHcmFwaFFMIFNlcnZlciBpbiB5b3VyIGJyb3dzZXI6IGludGVyY2VwdHMgZXZlcnkgY2FsbCB0byBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JhcGhxbFxuICogYW5kIHJldHVybnMgYSByZXNwb25zZSBmcm9tIHRoZSBzdXBwbGllZCBkYXRhLlxuICpcbiAqIEBleHBvcnQgQSBzaW5vbi5qcyBGYWtlU2VydmVyIChodHRwOi8vc2lub25qcy5vcmcvcmVsZWFzZXMvdjIuMy42L2Zha2UteGhyLWFuZC1zZXJ2ZXIvI2Zha2Utc2VydmVyKVxuICogQHBhcmFtIHthbnl9IGRhdGFcbiAqIEBwYXJhbSB7YW55fSB1cmwgU3BlY2lmaWVzIHRoZSBlbmRwb2ludCB0byBpbnRlcmNlcHQgKERlZmF1bHQgaXMgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsJykuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGRhdGEgPSB7XG4gKiAgICBcInBvc3RzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDY1LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgICAgIH0sXG4gKiAgICBdLFxuICogICAgXCJ1c2Vyc1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEyMyxcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDQ1NixcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIlxuICogICAgICAgIH1cbiAqICAgIF0sXG4gKiB9O1xuICpcbiAqIEdyYXBoUUxDbGllbnRTZXJ2ZXIoZGF0YSk7XG4gKiBHcmFwaFFMQ2xpZW50U2VydmVyKGRhdGEsICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dyYXBocWwnKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgZGF0YSwgdXJsIH0pXG57XG5cdGNvbnN0IGhhbmRsZVJlcXVlc3QgPSBoYW5kbGVSZXF1ZXN0RmFjdG9yeShkYXRhKTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXJ0KClcblx0XHR7XG5cdFx0XHQvLyBJbnRlcmNlcHQgYWxsIFhtbEh0dHBSZXF1ZXN0XG5cdFx0XHRtb2NrLnNldHVwKCk7XG5cblx0XHRcdC8vIE9ubHkgaGFuZGxlIFBPU1QgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIHVybFxuXHRcdFx0bW9jay5wb3N0KFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdChyZXEsIHJlcykgPT5cblx0XHRcdFx0XHRuZXcgUHJvbWlzZShyZXNvbHZlID0+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aGFuZGxlUmVxdWVzdCh1cmwsIHtcblx0XHRcdFx0XHRcdFx0Ym9keTogcmVxLmJvZHkoKSxcblx0XHRcdFx0XHRcdH0pLnRoZW4ocmVzcG9uc2UgPT5cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cmVzLnN0YXR1cyhyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0XHRcdFx0XHRyZXMuaGVhZGVycyhyZXNwb25zZS5oZWFkZXJzKTtcblx0XHRcdFx0XHRcdFx0cmVzLmJvZHkocmVzcG9uc2UuYm9keSk7XG5cblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBFbnN1cmUgYWxsIG90aGVyIHJlcXVlc3RzIGFyZSBoYW5kbGVkIGJ5IHRoZSBkZWZhdWx0IFhtbEh0dHBSZXF1ZXN0XG5cdFx0XHRtb2NrLnVzZShwcm94eSk7XG5cdFx0fSxcblx0XHRzdG9wKClcblx0XHR7XG5cdFx0XHRtb2NrLnRlYXJkb3duKCk7XG5cdFx0fSxcblx0XHRnZXRIYW5kbGVyKClcblx0XHR7XG5cdFx0XHRyZXR1cm4gaGFuZGxlUmVxdWVzdDtcblx0XHR9LFxuXHR9O1xufVxuIl19