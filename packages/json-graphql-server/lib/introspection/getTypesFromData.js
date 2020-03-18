"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeNamesFromData = void 0;
const graphql_1 = require("graphql");
const getFieldsFromEntities_1 = __importDefault(require("./getFieldsFromEntities"));
const nameConverter_1 = require("../utils/nameConverter");
/**
 * Get a list of GraphQLObjectType from data
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
 * // [
 * //     new GraphQLObjectType({
 * //         name: "Posts",
 * //         fields: {
 * //             id: { type: graphql.GraphQLString },
 * //             title: { type: graphql.GraphQLString },
 * //             views: { type: graphql.GraphQLInt },
 * //             user_id: { type: graphql.GraphQLString },
 * //         }
 * //     }),
 * //     new GraphQLObjectType({
 * //         name: "Users",
 * //         fields: {
 * //             id: { type: graphql.GraphQLString },
 * //             name: { type: graphql.GraphQLString },
 * //         }
 * //     }),
 * // ]
 */
function getTypesFromData(data) {
    return Object.keys(data)
        .map(typeName => ({
        name: nameConverter_1.getTypeFromKey(typeName),
        fields: getFieldsFromEntities_1.default(data[typeName]),
    }))
        .map(typeObject => new graphql_1.GraphQLObjectType(typeObject));
}
exports.default = getTypesFromData;
function getTypeNamesFromData(data) {
    return Object.keys(data).map(nameConverter_1.getTypeFromKey);
}
exports.getTypeNamesFromData = getTypeNamesFromData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VHlwZXNGcm9tRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldFR5cGVzRnJvbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUNBQTRDO0FBRTVDLG9GQUE0RDtBQUM1RCwwREFBd0Q7QUFHeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpREc7QUFDSCxTQUF3QixnQkFBZ0IsQ0FBb0QsSUFBd0I7SUFFbkgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksRUFBRSw4QkFBYyxDQUFDLFFBQVEsQ0FBQztRQUM5QixNQUFNLEVBQUUsK0JBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzdDLENBQUMsQ0FBQztTQUNGLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksMkJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBUkQsbUNBUUM7QUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxJQUFxQjtJQUV6RCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLDhCQUFjLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsb0RBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5pbXBvcnQgZ2V0RmllbGRzRnJvbUVudGl0aWVzIGZyb20gJy4vZ2V0RmllbGRzRnJvbUVudGl0aWVzJztcbmltcG9ydCB7IGdldFR5cGVGcm9tS2V5IH0gZnJvbSAnLi4vdXRpbHMvbmFtZUNvbnZlcnRlcic7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvb3QsIElTb3VyY2VEYXRhUm93QmFzZSwgSVNvdXJjZURhdGFSb3dCYXNlQ29yZSB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIEdyYXBoUUxPYmplY3RUeXBlIGZyb20gZGF0YVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBkYXRhID0ge1xuICogICAgXCJwb3N0c1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJMb3JlbSBJcHN1bVwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDI1NCxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDEyMyxcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAyLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiU2ljIERvbG9yIGFtZXRcIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiA2NSxcbiAqICAgICAgICAgICAgXCJ1c2VyX2lkXCI6IDQ1NixcbiAqICAgICAgICB9LFxuICogICAgXSxcbiAqICAgIFwidXNlcnNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxMjMsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvaG4gRG9lXCJcbiAqICAgICAgICB9LFxuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiA0NTYsXG4gKiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphbmUgRG9lXCJcbiAqICAgICAgICB9XG4gKiAgICBdLFxuICogfTtcbiAqIGNvbnN0IHR5cGVzID0gZ2V0VHlwZXNGcm9tRGF0YShkYXRhKTtcbiAqIC8vIFtcbiAqIC8vICAgICBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICogLy8gICAgICAgICBuYW1lOiBcIlBvc3RzXCIsXG4gKiAvLyAgICAgICAgIGZpZWxkczoge1xuICogLy8gICAgICAgICAgICAgaWQ6IHsgdHlwZTogZ3JhcGhxbC5HcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgICAgICB0aXRsZTogeyB0eXBlOiBncmFwaHFsLkdyYXBoUUxTdHJpbmcgfSxcbiAqIC8vICAgICAgICAgICAgIHZpZXdzOiB7IHR5cGU6IGdyYXBocWwuR3JhcGhRTEludCB9LFxuICogLy8gICAgICAgICAgICAgdXNlcl9pZDogeyB0eXBlOiBncmFwaHFsLkdyYXBoUUxTdHJpbmcgfSxcbiAqIC8vICAgICAgICAgfVxuICogLy8gICAgIH0pLFxuICogLy8gICAgIG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gKiAvLyAgICAgICAgIG5hbWU6IFwiVXNlcnNcIixcbiAqIC8vICAgICAgICAgZmllbGRzOiB7XG4gKiAvLyAgICAgICAgICAgICBpZDogeyB0eXBlOiBncmFwaHFsLkdyYXBoUUxTdHJpbmcgfSxcbiAqIC8vICAgICAgICAgICAgIG5hbWU6IHsgdHlwZTogZ3JhcGhxbC5HcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgIH1cbiAqIC8vICAgICB9KSxcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VHlwZXNGcm9tRGF0YTxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlID0gSVNvdXJjZURhdGFSb3dCYXNlPihkYXRhOiBJU291cmNlRGF0YVJvb3Q8VD4pXG57XG5cdHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuXHRcdC5tYXAodHlwZU5hbWUgPT4gKHtcblx0XHRcdG5hbWU6IGdldFR5cGVGcm9tS2V5KHR5cGVOYW1lKSxcblx0XHRcdGZpZWxkczogZ2V0RmllbGRzRnJvbUVudGl0aWVzKGRhdGFbdHlwZU5hbWVdKSxcblx0XHR9KSlcblx0XHQubWFwKHR5cGVPYmplY3QgPT4gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHR5cGVPYmplY3QpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVOYW1lc0Zyb21EYXRhKGRhdGE6IElTb3VyY2VEYXRhUm9vdClcbntcblx0cmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChnZXRUeXBlRnJvbUtleSk7XG59XG4iXX0=