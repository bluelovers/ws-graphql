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
function graphQLClientServer({ data, url, }) {
    const handleRequest = handleRequest_1.default(data);
    return {
        start() {
            // Intercept all XmlHttpRequest
            xhr_mock_1.default.setup();
            // Only handle POST request to the specified url
            xhr_mock_1.default.post(url, (req, res) => new Promise((resolve, reject) => {
                handleRequest(url, {
                    body: req.body(),
                })
                    .then(response => {
                    res.status(response.status);
                    res.headers(response.headers);
                    res.body(response.body);
                    resolve(res);
                })
                    .catch(reject);
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
exports.default = graphQLClientServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhRTENsaWVudFNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyYXBoUUxDbGllbnRTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXVDO0FBQ3ZDLG9FQUFtRDtBQUduRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ0c7QUFDSCxTQUF3QixtQkFBbUIsQ0FBQyxFQUMzQyxJQUFJLEVBQ0osR0FBRyxHQUlIO0lBRUEsTUFBTSxhQUFhLEdBQUcsdUJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakQsT0FBTztRQUNOLEtBQUs7WUFFSiwrQkFBK0I7WUFDL0Isa0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUViLGdEQUFnRDtZQUNoRCxrQkFBSSxDQUFDLElBQUksQ0FDUixHQUFHLEVBQ0gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FDWixJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFFL0IsYUFBYSxDQUFDLEdBQUcsRUFBRTtvQkFDbEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7aUJBQ2hCLENBQUM7cUJBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUVoQixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDNUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDZDtZQUNGLENBQUMsQ0FBQyxDQUNILENBQUM7WUFFRixzRUFBc0U7WUFDdEUsa0JBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxJQUFJO1lBRUgsa0JBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQ0QsVUFBVTtZQUVULE9BQU8sYUFBYSxDQUFDO1FBQ3RCLENBQUM7S0FDRCxDQUFDO0FBQ0gsQ0FBQztBQWxERCxzQ0FrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9jaywgeyBwcm94eSB9IGZyb20gJ3hoci1tb2NrJztcbmltcG9ydCBoYW5kbGVSZXF1ZXN0RmFjdG9yeSBmcm9tICcuL2hhbmRsZVJlcXVlc3QnO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb290IH0gZnJvbSAnbGF6eS1qc29uLWdyYXBocWwvbGliL3R5cGVzJztcblxuLyoqXG4gKiBTdGFydHMgYSBHcmFwaFFMIFNlcnZlciBpbiB5b3VyIGJyb3dzZXI6IGludGVyY2VwdHMgZXZlcnkgY2FsbCB0byBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JhcGhxbFxuICogYW5kIHJldHVybnMgYSByZXNwb25zZSBmcm9tIHRoZSBzdXBwbGllZCBkYXRhLlxuICpcbiAqIEBleHBvcnQgQSBzaW5vbi5qcyBGYWtlU2VydmVyIChodHRwOi8vc2lub25qcy5vcmcvcmVsZWFzZXMvdjIuMy42L2Zha2UteGhyLWFuZC1zZXJ2ZXIvI2Zha2Utc2VydmVyKVxuICogQHBhcmFtIHthbnl9IGRhdGFcbiAqIEBwYXJhbSB7YW55fSB1cmwgU3BlY2lmaWVzIHRoZSBlbmRwb2ludCB0byBpbnRlcmNlcHQgKERlZmF1bHQgaXMgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsJykuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGRhdGEgPSB7XG4gKiAgICBcInBvc3RzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDY1LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgICAgIH0sXG4gKiAgICBdLFxuICogICAgXCJ1c2Vyc1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEyMyxcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDQ1NixcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIlxuICogICAgICAgIH1cbiAqICAgIF0sXG4gKiB9O1xuICpcbiAqIEdyYXBoUUxDbGllbnRTZXJ2ZXIoZGF0YSk7XG4gKiBHcmFwaFFMQ2xpZW50U2VydmVyKGRhdGEsICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dyYXBocWwnKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3JhcGhRTENsaWVudFNlcnZlcih7XG5cdGRhdGEsXG5cdHVybCxcbn06IHtcblx0ZGF0YTogSVNvdXJjZURhdGFSb290LFxuXHR1cmwsXG59KVxue1xuXHRjb25zdCBoYW5kbGVSZXF1ZXN0ID0gaGFuZGxlUmVxdWVzdEZhY3RvcnkoZGF0YSk7XG5cblx0cmV0dXJuIHtcblx0XHRzdGFydCgpXG5cdFx0e1xuXHRcdFx0Ly8gSW50ZXJjZXB0IGFsbCBYbWxIdHRwUmVxdWVzdFxuXHRcdFx0bW9jay5zZXR1cCgpO1xuXG5cdFx0XHQvLyBPbmx5IGhhbmRsZSBQT1NUIHJlcXVlc3QgdG8gdGhlIHNwZWNpZmllZCB1cmxcblx0XHRcdG1vY2sucG9zdChcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHQocmVxLCByZXMpID0+XG5cdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRoYW5kbGVSZXF1ZXN0KHVybCwge1xuXHRcdFx0XHRcdFx0XHRib2R5OiByZXEuYm9keSgpLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKTtcblx0XHRcdFx0XHRcdFx0XHRyZXMuaGVhZGVycyhyZXNwb25zZS5oZWFkZXJzKTtcblx0XHRcdFx0XHRcdFx0XHRyZXMuYm9keShyZXNwb25zZS5ib2R5KTtcblxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUocmVzKTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmNhdGNoKHJlamVjdClcblx0XHRcdFx0XHRcdDtcblx0XHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cblx0XHRcdC8vIEVuc3VyZSBhbGwgb3RoZXIgcmVxdWVzdHMgYXJlIGhhbmRsZWQgYnkgdGhlIGRlZmF1bHQgWG1sSHR0cFJlcXVlc3Rcblx0XHRcdG1vY2sudXNlKHByb3h5KTtcblx0XHR9LFxuXHRcdHN0b3AoKVxuXHRcdHtcblx0XHRcdG1vY2sudGVhcmRvd24oKTtcblx0XHR9LFxuXHRcdGdldEhhbmRsZXIoKVxuXHRcdHtcblx0XHRcdHJldHVybiBoYW5kbGVSZXF1ZXN0O1xuXHRcdH0sXG5cdH07XG59XG4iXX0=