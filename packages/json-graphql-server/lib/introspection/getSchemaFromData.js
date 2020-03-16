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
    const queryType = createSchemaQueryType_1.default({
        data,
        types,
        typesByName,
    });
    const mutationType = createMutationType_1.default({
        types,
        typesByName,
    });
    const schema = new graphql_1.GraphQLSchema({
        query: queryType,
        mutation: mutationType,
    });
    const schemaExtension = createSchemaExtension_1.default({
        typesByName,
    });
    return schemaExtension
        ? graphql_1.extendSchema(schema, graphql_1.parse(schemaExtension))
        : schema;
}
exports.default = getSchemaFromData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2NoZW1hRnJvbURhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRTY2hlbWFGcm9tRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUE2RDtBQUU3RCwwRUFBa0Q7QUFFbEQsc0dBQThFO0FBQzlFLGdHQUF3RTtBQUN4RSxzR0FBOEU7QUFFOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwREc7QUFDSCxTQUFTLGlCQUFpQixDQUFDLElBQXFCO0lBRS9DLE1BQU0sS0FBSyxHQUFHLDBCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxNQUFNLFNBQVMsR0FBRywrQkFBcUIsQ0FBQztRQUN2QyxJQUFJO1FBQ0osS0FBSztRQUNMLFdBQVc7S0FDWCxDQUFDLENBQUM7SUFFSCxNQUFNLFlBQVksR0FBRyw0QkFBa0IsQ0FBQztRQUN2QyxLQUFLO1FBQ0wsV0FBVztLQUNYLENBQUMsQ0FBQztJQUVILE1BQU0sTUFBTSxHQUFHLElBQUksdUJBQWEsQ0FBQztRQUNoQyxLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQUUsWUFBWTtLQUN0QixDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsR0FBRywrQkFBcUIsQ0FBQztRQUM3QyxXQUFXO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsT0FBTyxlQUFlO1FBQ3JCLENBQUMsQ0FBQyxzQkFBWSxDQUFDLE1BQU0sRUFBRSxlQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNYLENBQUM7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxTY2hlbWEsIHBhcnNlLCBleHRlbmRTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IGdldFR5cGVzRnJvbURhdGEgZnJvbSAnLi9nZXRUeXBlc0Zyb21EYXRhJztcbmltcG9ydCB7IElTb3VyY2VEYXRhUm9vdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBjcmVhdGVTY2hlbWFRdWVyeVR5cGUgZnJvbSAnLi9nZXRTY2hlbWFGcm9tRGF0YS9jcmVhdGVTY2hlbWFRdWVyeVR5cGUnO1xuaW1wb3J0IGNyZWF0ZU11dGF0aW9uVHlwZSBmcm9tICcuL2dldFNjaGVtYUZyb21EYXRhL2NyZWF0ZU11dGF0aW9uVHlwZSc7XG5pbXBvcnQgY3JlYXRlU2NoZW1hRXh0ZW5zaW9uIGZyb20gJy4vZ2V0U2NoZW1hRnJvbURhdGEvY3JlYXRlU2NoZW1hRXh0ZW5zaW9uJztcblxuLyoqXG4gKiBHZXQgYSBHcmFwaFFMIHNjaGVtYSBmcm9tIGRhdGFcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgZGF0YSA9IHtcbiAqICAgIFwicG9zdHNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiTG9yZW0gSXBzdW1cIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiAyNTQsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiAxMjMsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMixcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpYyBEb2xvciBhbWV0XCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogNjUsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiA0NTYsXG4gKiAgICAgICAgfSxcbiAqICAgIF0sXG4gKiAgICBcInVzZXJzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMTIzLFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKb2huIERvZVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogNDU2LFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKYW5lIERvZVwiXG4gKiAgICAgICAgfVxuICogICAgXSxcbiAqIH07XG4gKiBjb25zdCB0eXBlcyA9IGdldFR5cGVzRnJvbURhdGEoZGF0YSk7XG4gKiAvLyB0eXBlIFBvc3Qge1xuICogLy8gICAgIGlkOiBJRFxuICogLy8gICAgIHRpdGxlOiBTdHJpbmdcbiAqIC8vICAgICB2aWV3czogSW50XG4gKiAvLyAgICAgdXNlcl9pZDogSURcbiAqIC8vIH1cbiAqIC8vXG4gKiAvLyB0eXBlIFVzZXIge1xuICogLy8gICAgIGlkOiBJRFxuICogLy8gICAgIG5hbWU6IFN0cmluZ1xuICogLy8gfVxuICogLy9cbiAqIC8vIHR5cGUgUXVlcnkge1xuICogLy8gICAgIFBvc3QoaWQ6IElEISk6IFBvc3RcbiAqIC8vICAgICBhbGxQb3N0cyhwYWdlOiBJbnQsIHBlclBhZ2U6IEludCwgc29ydEZpZWxkOiBTdHJpbmcsIHNvcnRPcmRlcjogU3RyaW5nLCBmaWx0ZXI6IFBvc3RGaWx0ZXIpOiBbUG9zdF1cbiAqIC8vICAgICBVc2VyKGlkOiBJRCEpOiBVc2VyXG4gKiAvLyAgICAgYWxsVXNlcnMocGFnZTogSW50LCBwZXJQYWdlOiBJbnQsIHNvcnRGaWVsZDogU3RyaW5nLCBzb3J0T3JkZXI6IFN0cmluZywgZmlsdGVyOiBVc2VyRmlsdGVyKTogW1VzZXJdXG4gKiAvLyB9XG4gKiAvL1xuICogLy8gdHlwZSBNdXRhdGlvbiB7XG4gKiAvLyAgICAgY3JlYXRlUG9zdChkYXRhOiBTdHJpbmcpOiBQb3N0XG4gKiAvLyAgICAgdXBkYXRlUG9zdChkYXRhOiBTdHJpbmcpOiBQb3N0XG4gKiAvLyAgICAgcmVtb3ZlUG9zdChpZDogSUQhKTogQm9vbGVhblxuICogLy8gICAgIGNyZWF0ZVVzZXIoZGF0YTogU3RyaW5nKTogVXNlclxuICogLy8gICAgIHVwZGF0ZVVzZXIoZGF0YTogU3RyaW5nKTogVXNlclxuICogLy8gICAgIHJlbW92ZVVzZXIoaWQ6IElEISk6IEJvb2xlYW5cbiAqIC8vIH1cbiAqL1xuZnVuY3Rpb24gZ2V0U2NoZW1hRnJvbURhdGEoZGF0YTogSVNvdXJjZURhdGFSb290KVxue1xuXHRjb25zdCB0eXBlcyA9IGdldFR5cGVzRnJvbURhdGEoZGF0YSk7XG5cdGNvbnN0IHR5cGVzQnlOYW1lID0gdHlwZXMucmVkdWNlKCh0eXBlcywgdHlwZSkgPT5cblx0e1xuXHRcdHR5cGVzW3R5cGUubmFtZV0gPSB0eXBlO1xuXHRcdHJldHVybiB0eXBlcztcblx0fSwge30pO1xuXG5cdGNvbnN0IHF1ZXJ5VHlwZSA9IGNyZWF0ZVNjaGVtYVF1ZXJ5VHlwZSh7XG5cdFx0ZGF0YSxcblx0XHR0eXBlcyxcblx0XHR0eXBlc0J5TmFtZSxcblx0fSk7XG5cblx0Y29uc3QgbXV0YXRpb25UeXBlID0gY3JlYXRlTXV0YXRpb25UeXBlKHtcblx0XHR0eXBlcyxcblx0XHR0eXBlc0J5TmFtZSxcblx0fSk7XG5cblx0Y29uc3Qgc2NoZW1hID0gbmV3IEdyYXBoUUxTY2hlbWEoe1xuXHRcdHF1ZXJ5OiBxdWVyeVR5cGUsXG5cdFx0bXV0YXRpb246IG11dGF0aW9uVHlwZSxcblx0fSk7XG5cblx0Y29uc3Qgc2NoZW1hRXh0ZW5zaW9uID0gY3JlYXRlU2NoZW1hRXh0ZW5zaW9uKHtcblx0XHR0eXBlc0J5TmFtZSxcblx0fSk7XG5cblx0cmV0dXJuIHNjaGVtYUV4dGVuc2lvblxuXHRcdD8gZXh0ZW5kU2NoZW1hKHNjaGVtYSwgcGFyc2Uoc2NoZW1hRXh0ZW5zaW9uKSlcblx0XHQ6IHNjaGVtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2NoZW1hRnJvbURhdGE7XG4iXX0=