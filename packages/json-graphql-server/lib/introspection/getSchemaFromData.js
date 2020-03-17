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
function getSchemaFromData(data, options = {}) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2NoZW1hRnJvbURhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRTY2hlbWFGcm9tRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFnRjtBQUVoRiwwRUFBa0Q7QUFFbEQsc0dBQThFO0FBQzlFLGdHQUF3RTtBQUN4RSxzR0FBOEU7QUFTOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwREc7QUFDSCxTQUFTLGlCQUFpQixDQUFDLElBQXFCLEVBQUUsVUFBb0IsRUFBRTtJQUV2RSxNQUFNLEtBQUssR0FBRywwQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQyxFQUFFLEVBQTZCLENBQUMsQ0FBQztJQUVsQyxNQUFNLE9BQU8sR0FBYTtRQUN6QixJQUFJO1FBQ0osS0FBSztRQUNMLFdBQVc7S0FDWCxDQUFDO0lBRUYsTUFBTSxTQUFTLEdBQUcsK0JBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFakQsTUFBTSxZQUFZLEdBQUcsNEJBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFakQsTUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBYSxDQUFDO1FBQ2hDLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFFBQVEsRUFBRSxZQUFZO0tBQ3RCLENBQUMsQ0FBQztJQUVILE1BQU0sZUFBZSxHQUFHLCtCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXZELE9BQU8sZUFBZTtRQUNyQixDQUFDLENBQUMsc0JBQVksQ0FBQyxNQUFNLEVBQUUsZUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDWCxDQUFDO0FBRUQsa0JBQWUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMU2NoZW1hLCBwYXJzZSwgZXh0ZW5kU2NoZW1hLCBHcmFwaFFMT2JqZWN0VHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgZ2V0VHlwZXNGcm9tRGF0YSBmcm9tICcuL2dldFR5cGVzRnJvbURhdGEnO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb290LCBJU291cmNlRGF0YVJvd0Jhc2UsIElPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZVNjaGVtYVF1ZXJ5VHlwZSBmcm9tICcuL2dldFNjaGVtYUZyb21EYXRhL2NyZWF0ZVNjaGVtYVF1ZXJ5VHlwZSc7XG5pbXBvcnQgY3JlYXRlTXV0YXRpb25UeXBlIGZyb20gJy4vZ2V0U2NoZW1hRnJvbURhdGEvY3JlYXRlTXV0YXRpb25UeXBlJztcbmltcG9ydCBjcmVhdGVTY2hlbWFFeHRlbnNpb24gZnJvbSAnLi9nZXRTY2hlbWFGcm9tRGF0YS9jcmVhdGVTY2hlbWFFeHRlbnNpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSdW50aW1lPFQgZXh0ZW5kcyBJU291cmNlRGF0YVJvd0Jhc2UgPSBJU291cmNlRGF0YVJvd0Jhc2U+XG57XG5cdGRhdGE6IElTb3VyY2VEYXRhUm9vdDxUPixcblx0dHlwZXM6IEdyYXBoUUxPYmplY3RUeXBlW10sXG5cdHR5cGVzQnlOYW1lOiBSZWNvcmQ8c3RyaW5nLCBHcmFwaFFMT2JqZWN0VHlwZT4sXG59XG5cbi8qKlxuICogR2V0IGEgR3JhcGhRTCBzY2hlbWEgZnJvbSBkYXRhXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGRhdGEgPSB7XG4gKiAgICBcInBvc3RzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDY1LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgICAgIH0sXG4gKiAgICBdLFxuICogICAgXCJ1c2Vyc1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEyMyxcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDQ1NixcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIlxuICogICAgICAgIH1cbiAqICAgIF0sXG4gKiB9O1xuICogY29uc3QgdHlwZXMgPSBnZXRUeXBlc0Zyb21EYXRhKGRhdGEpO1xuICogLy8gdHlwZSBQb3N0IHtcbiAqIC8vICAgICBpZDogSURcbiAqIC8vICAgICB0aXRsZTogU3RyaW5nXG4gKiAvLyAgICAgdmlld3M6IEludFxuICogLy8gICAgIHVzZXJfaWQ6IElEXG4gKiAvLyB9XG4gKiAvL1xuICogLy8gdHlwZSBVc2VyIHtcbiAqIC8vICAgICBpZDogSURcbiAqIC8vICAgICBuYW1lOiBTdHJpbmdcbiAqIC8vIH1cbiAqIC8vXG4gKiAvLyB0eXBlIFF1ZXJ5IHtcbiAqIC8vICAgICBQb3N0KGlkOiBJRCEpOiBQb3N0XG4gKiAvLyAgICAgYWxsUG9zdHMocGFnZTogSW50LCBwZXJQYWdlOiBJbnQsIHNvcnRGaWVsZDogU3RyaW5nLCBzb3J0T3JkZXI6IFN0cmluZywgZmlsdGVyOiBQb3N0RmlsdGVyKTogW1Bvc3RdXG4gKiAvLyAgICAgVXNlcihpZDogSUQhKTogVXNlclxuICogLy8gICAgIGFsbFVzZXJzKHBhZ2U6IEludCwgcGVyUGFnZTogSW50LCBzb3J0RmllbGQ6IFN0cmluZywgc29ydE9yZGVyOiBTdHJpbmcsIGZpbHRlcjogVXNlckZpbHRlcik6IFtVc2VyXVxuICogLy8gfVxuICogLy9cbiAqIC8vIHR5cGUgTXV0YXRpb24ge1xuICogLy8gICAgIGNyZWF0ZVBvc3QoZGF0YTogU3RyaW5nKTogUG9zdFxuICogLy8gICAgIHVwZGF0ZVBvc3QoZGF0YTogU3RyaW5nKTogUG9zdFxuICogLy8gICAgIHJlbW92ZVBvc3QoaWQ6IElEISk6IEJvb2xlYW5cbiAqIC8vICAgICBjcmVhdGVVc2VyKGRhdGE6IFN0cmluZyk6IFVzZXJcbiAqIC8vICAgICB1cGRhdGVVc2VyKGRhdGE6IFN0cmluZyk6IFVzZXJcbiAqIC8vICAgICByZW1vdmVVc2VyKGlkOiBJRCEpOiBCb29sZWFuXG4gKiAvLyB9XG4gKi9cbmZ1bmN0aW9uIGdldFNjaGVtYUZyb21EYXRhKGRhdGE6IElTb3VyY2VEYXRhUm9vdCwgb3B0aW9uczogSU9wdGlvbnMgPSB7fSlcbntcblx0Y29uc3QgdHlwZXMgPSBnZXRUeXBlc0Zyb21EYXRhKGRhdGEpO1xuXHRjb25zdCB0eXBlc0J5TmFtZSA9IHR5cGVzLnJlZHVjZSgodHlwZXMsIHR5cGUpID0+XG5cdHtcblx0XHR0eXBlc1t0eXBlLm5hbWVdID0gdHlwZTtcblx0XHRyZXR1cm4gdHlwZXM7XG5cdH0sIHt9IGFzIElSdW50aW1lW1widHlwZXNCeU5hbWVcIl0pO1xuXG5cdGNvbnN0IHJ1bnRpbWU6IElSdW50aW1lID0ge1xuXHRcdGRhdGEsXG5cdFx0dHlwZXMsXG5cdFx0dHlwZXNCeU5hbWUsXG5cdH07XG5cblx0Y29uc3QgcXVlcnlUeXBlID0gY3JlYXRlU2NoZW1hUXVlcnlUeXBlKHJ1bnRpbWUpO1xuXG5cdGNvbnN0IG11dGF0aW9uVHlwZSA9IGNyZWF0ZU11dGF0aW9uVHlwZShydW50aW1lKTtcblxuXHRjb25zdCBzY2hlbWEgPSBuZXcgR3JhcGhRTFNjaGVtYSh7XG5cdFx0cXVlcnk6IHF1ZXJ5VHlwZSxcblx0XHRtdXRhdGlvbjogbXV0YXRpb25UeXBlLFxuXHR9KTtcblxuXHRjb25zdCBzY2hlbWFFeHRlbnNpb24gPSBjcmVhdGVTY2hlbWFFeHRlbnNpb24ocnVudGltZSk7XG5cblx0cmV0dXJuIHNjaGVtYUV4dGVuc2lvblxuXHRcdD8gZXh0ZW5kU2NoZW1hKHNjaGVtYSwgcGFyc2Uoc2NoZW1hRXh0ZW5zaW9uKSlcblx0XHQ6IHNjaGVtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2NoZW1hRnJvbURhdGE7XG4iXX0=