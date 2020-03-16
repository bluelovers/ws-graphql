"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_client_1 = require("apollo-client");
const apollo_test_utils_1 = require("apollo-test-utils");
const getSchemaFromData_1 = __importDefault(require("json-graphql-server/lib/introspection/getSchemaFromData"));
exports.default = data => {
    const schema = getSchemaFromData_1.default(data);
    const mockNetworkInterface = apollo_test_utils_1.mockNetworkInterfaceWithSchema({ schema });
    const client = new apollo_client_1.ApolloClient({
        // @ts-ignore
        networkInterface: mockNetworkInterface,
    });
    return client;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQXBvbGxvQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlQXBvbGxvQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaURBQTZDO0FBQzdDLHlEQUFtRTtBQUNuRSxnSEFBd0Y7QUFFeEYsa0JBQWUsSUFBSSxDQUFDLEVBQUU7SUFFckIsTUFBTSxNQUFNLEdBQUcsMkJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsTUFBTSxvQkFBb0IsR0FBRyxrREFBOEIsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFeEUsTUFBTSxNQUFNLEdBQUcsSUFBSSw0QkFBWSxDQUFDO1FBQy9CLGFBQWE7UUFDYixnQkFBZ0IsRUFBRSxvQkFBb0I7S0FDdEMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IG1vY2tOZXR3b3JrSW50ZXJmYWNlV2l0aFNjaGVtYSB9IGZyb20gJ2Fwb2xsby10ZXN0LXV0aWxzJztcbmltcG9ydCBnZXRTY2hlbWFGcm9tRGF0YSBmcm9tICdqc29uLWdyYXBocWwtc2VydmVyL2xpYi9pbnRyb3NwZWN0aW9uL2dldFNjaGVtYUZyb21EYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZGF0YSA9Plxue1xuXHRjb25zdCBzY2hlbWEgPSBnZXRTY2hlbWFGcm9tRGF0YShkYXRhKTtcblx0Y29uc3QgbW9ja05ldHdvcmtJbnRlcmZhY2UgPSBtb2NrTmV0d29ya0ludGVyZmFjZVdpdGhTY2hlbWEoeyBzY2hlbWEgfSk7XG5cblx0Y29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG5cdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdG5ldHdvcmtJbnRlcmZhY2U6IG1vY2tOZXR3b3JrSW50ZXJmYWNlLFxuXHR9KTtcblxuXHRyZXR1cm4gY2xpZW50O1xufTtcbiJdfQ==