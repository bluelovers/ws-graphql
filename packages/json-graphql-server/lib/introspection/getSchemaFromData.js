"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getTypesFromData_1 = __importDefault(require("./getTypesFromData"));
const createSchemaQueryType_1 = __importDefault(require("./getSchemaFromData/createSchemaQueryType"));
const createMutationType_1 = __importDefault(require("./getSchemaFromData/createMutationType"));
const createSchemaExtension_1 = __importDefault(require("./getSchemaFromData/createSchemaExtension"));
/**
 * Get a GraphQL schema from data
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
 * const types = getTypesFromData(data);
 * // type Post {
 * //     id: ID
 * //     title: String
 * //     views: Int
 * //     user_id: ID
 * // }
 * //
 * // type User {
 * //     id: ID
 * //     name: String
 * // }
 * //
 * // type Query {
 * //     Post(id: ID!): Post
 * //     allPosts(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PostFilter): [Post]
 * //     User(id: ID!): User
 * //     allUsers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: UserFilter): [User]
 * // }
 * //
 * // type Mutation {
 * //     createPost(data: String): Post
 * //     updatePost(data: String): Post
 * //     removePost(id: ID!): Boolean
 * //     createUser(data: String): User
 * //     updateUser(data: String): User
 * //     removeUser(id: ID!): Boolean
 * // }
 */
function getSchemaFromData(data) {
    const types = getTypesFromData_1.default(data);
    const typesByName = types.reduce((types, type) => {
        types[type.name] = type;
        return types;
    }, {});
    const runtime = {
        data,
        types,
        typesByName,
    };
    const queryType = createSchemaQueryType_1.default(runtime);
    const mutationType = createMutationType_1.default(runtime);
    const schema = new graphql_1.GraphQLSchema({
        query: queryType,
        mutation: mutationType,
    });
    const schemaExtension = createSchemaExtension_1.default(runtime);
    return schemaExtension
        ? graphql_1.extendSchema(schema, graphql_1.parse(schemaExtension))
        : schema;
}
exports.default = getSchemaFromData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2NoZW1hRnJvbURhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRTY2hlbWFGcm9tRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFnRjtBQUVoRiwwRUFBa0Q7QUFFbEQsc0dBQThFO0FBQzlFLGdHQUF3RTtBQUN4RSxzR0FBOEU7QUFTOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwREc7QUFDSCxTQUFTLGlCQUFpQixDQUFDLElBQXFCO0lBRS9DLE1BQU0sS0FBSyxHQUFHLDBCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDLEVBQUUsRUFBNkIsQ0FBQyxDQUFDO0lBRWxDLE1BQU0sT0FBTyxHQUFhO1FBQ3pCLElBQUk7UUFDSixLQUFLO1FBQ0wsV0FBVztLQUNYLENBQUM7SUFFRixNQUFNLFNBQVMsR0FBRywrQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqRCxNQUFNLFlBQVksR0FBRyw0QkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLHVCQUFhLENBQUM7UUFDaEMsS0FBSyxFQUFFLFNBQVM7UUFDaEIsUUFBUSxFQUFFLFlBQVk7S0FDdEIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxlQUFlLEdBQUcsK0JBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdkQsT0FBTyxlQUFlO1FBQ3JCLENBQUMsQ0FBQyxzQkFBWSxDQUFDLE1BQU0sRUFBRSxlQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNYLENBQUM7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxTY2hlbWEsIHBhcnNlLCBleHRlbmRTY2hlbWEsIEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmltcG9ydCBnZXRUeXBlc0Zyb21EYXRhIGZyb20gJy4vZ2V0VHlwZXNGcm9tRGF0YSc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvb3QsIElTb3VyY2VEYXRhUm93QmFzZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBjcmVhdGVTY2hlbWFRdWVyeVR5cGUgZnJvbSAnLi9nZXRTY2hlbWFGcm9tRGF0YS9jcmVhdGVTY2hlbWFRdWVyeVR5cGUnO1xuaW1wb3J0IGNyZWF0ZU11dGF0aW9uVHlwZSBmcm9tICcuL2dldFNjaGVtYUZyb21EYXRhL2NyZWF0ZU11dGF0aW9uVHlwZSc7XG5pbXBvcnQgY3JlYXRlU2NoZW1hRXh0ZW5zaW9uIGZyb20gJy4vZ2V0U2NoZW1hRnJvbURhdGEvY3JlYXRlU2NoZW1hRXh0ZW5zaW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJUnVudGltZTxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlID0gSVNvdXJjZURhdGFSb3dCYXNlPlxue1xuXHRkYXRhOiBJU291cmNlRGF0YVJvb3Q8VD4sXG5cdHR5cGVzOiBHcmFwaFFMT2JqZWN0VHlwZVtdLFxuXHR0eXBlc0J5TmFtZTogUmVjb3JkPHN0cmluZywgR3JhcGhRTE9iamVjdFR5cGU+LFxufVxuXG4vKipcbiAqIEdldCBhIEdyYXBoUUwgc2NoZW1hIGZyb20gZGF0YVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBkYXRhID0ge1xuICogICAgXCJwb3N0c1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMb3JlbSBJcHN1bVwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDI1NCxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDEyMyxcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAyLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiU2ljIERvbG9yIGFtZXRcIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiA2NSxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDQ1NixcbiAqICAgICAgICB9LFxuICogICAgXSxcbiAqICAgIFwidXNlcnNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxMjMsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvaG4gRG9lXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiA0NTYsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphbmUgRG9lXCJcbiAqICAgICAgICB9XG4gKiAgICBdLFxuICogfTtcbiAqIGNvbnN0IHR5cGVzID0gZ2V0VHlwZXNGcm9tRGF0YShkYXRhKTtcbiAqIC8vIHR5cGUgUG9zdCB7XG4gKiAvLyAgICAgaWQ6IElEXG4gKiAvLyAgICAgdGl0bGU6IFN0cmluZ1xuICogLy8gICAgIHZpZXdzOiBJbnRcbiAqIC8vICAgICB1c2VyX2lkOiBJRFxuICogLy8gfVxuICogLy9cbiAqIC8vIHR5cGUgVXNlciB7XG4gKiAvLyAgICAgaWQ6IElEXG4gKiAvLyAgICAgbmFtZTogU3RyaW5nXG4gKiAvLyB9XG4gKiAvL1xuICogLy8gdHlwZSBRdWVyeSB7XG4gKiAvLyAgICAgUG9zdChpZDogSUQhKTogUG9zdFxuICogLy8gICAgIGFsbFBvc3RzKHBhZ2U6IEludCwgcGVyUGFnZTogSW50LCBzb3J0RmllbGQ6IFN0cmluZywgc29ydE9yZGVyOiBTdHJpbmcsIGZpbHRlcjogUG9zdEZpbHRlcik6IFtQb3N0XVxuICogLy8gICAgIFVzZXIoaWQ6IElEISk6IFVzZXJcbiAqIC8vICAgICBhbGxVc2VycyhwYWdlOiBJbnQsIHBlclBhZ2U6IEludCwgc29ydEZpZWxkOiBTdHJpbmcsIHNvcnRPcmRlcjogU3RyaW5nLCBmaWx0ZXI6IFVzZXJGaWx0ZXIpOiBbVXNlcl1cbiAqIC8vIH1cbiAqIC8vXG4gKiAvLyB0eXBlIE11dGF0aW9uIHtcbiAqIC8vICAgICBjcmVhdGVQb3N0KGRhdGE6IFN0cmluZyk6IFBvc3RcbiAqIC8vICAgICB1cGRhdGVQb3N0KGRhdGE6IFN0cmluZyk6IFBvc3RcbiAqIC8vICAgICByZW1vdmVQb3N0KGlkOiBJRCEpOiBCb29sZWFuXG4gKiAvLyAgICAgY3JlYXRlVXNlcihkYXRhOiBTdHJpbmcpOiBVc2VyXG4gKiAvLyAgICAgdXBkYXRlVXNlcihkYXRhOiBTdHJpbmcpOiBVc2VyXG4gKiAvLyAgICAgcmVtb3ZlVXNlcihpZDogSUQhKTogQm9vbGVhblxuICogLy8gfVxuICovXG5mdW5jdGlvbiBnZXRTY2hlbWFGcm9tRGF0YShkYXRhOiBJU291cmNlRGF0YVJvb3QpXG57XG5cdGNvbnN0IHR5cGVzID0gZ2V0VHlwZXNGcm9tRGF0YShkYXRhKTtcblx0Y29uc3QgdHlwZXNCeU5hbWUgPSB0eXBlcy5yZWR1Y2UoKHR5cGVzLCB0eXBlKSA9PlxuXHR7XG5cdFx0dHlwZXNbdHlwZS5uYW1lXSA9IHR5cGU7XG5cdFx0cmV0dXJuIHR5cGVzO1xuXHR9LCB7fSBhcyBJUnVudGltZVtcInR5cGVzQnlOYW1lXCJdKTtcblxuXHRjb25zdCBydW50aW1lOiBJUnVudGltZSA9IHtcblx0XHRkYXRhLFxuXHRcdHR5cGVzLFxuXHRcdHR5cGVzQnlOYW1lLFxuXHR9O1xuXG5cdGNvbnN0IHF1ZXJ5VHlwZSA9IGNyZWF0ZVNjaGVtYVF1ZXJ5VHlwZShydW50aW1lKTtcblxuXHRjb25zdCBtdXRhdGlvblR5cGUgPSBjcmVhdGVNdXRhdGlvblR5cGUocnVudGltZSk7XG5cblx0Y29uc3Qgc2NoZW1hID0gbmV3IEdyYXBoUUxTY2hlbWEoe1xuXHRcdHF1ZXJ5OiBxdWVyeVR5cGUsXG5cdFx0bXV0YXRpb246IG11dGF0aW9uVHlwZSxcblx0fSk7XG5cblx0Y29uc3Qgc2NoZW1hRXh0ZW5zaW9uID0gY3JlYXRlU2NoZW1hRXh0ZW5zaW9uKHJ1bnRpbWUpO1xuXG5cdHJldHVybiBzY2hlbWFFeHRlbnNpb25cblx0XHQ/IGV4dGVuZFNjaGVtYShzY2hlbWEsIHBhcnNlKHNjaGVtYUV4dGVuc2lvbikpXG5cdFx0OiBzY2hlbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFNjaGVtYUZyb21EYXRhO1xuIl19