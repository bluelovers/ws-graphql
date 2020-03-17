"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeNamesFromData = void 0;
const graphql_1 = require("graphql");
const inflection_1 = require("inflection");
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
        name: inflection_1.camelize(inflection_1.singularize(typeName)),
        fields: getFieldsFromEntities_1.default(data[typeName]),
    }))
        .map(typeObject => new graphql_1.GraphQLObjectType(typeObject));
}
exports.default = getTypesFromData;
function getTypeNamesFromData(data) {
    return Object.keys(data).map(nameConverter_1.getTypeFromKey);
}
exports.getTypeNamesFromData = getTypeNamesFromData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VHlwZXNGcm9tRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldFR5cGVzRnJvbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUNBQTRDO0FBQzVDLDJDQUFtRDtBQUVuRCxvRkFBNEQ7QUFDNUQsMERBQXdEO0FBR3hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaURHO0FBQ0gsU0FBd0IsZ0JBQWdCLENBQW9ELElBQXdCO0lBRW5ILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLEVBQUUscUJBQVEsQ0FBQyx3QkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sRUFBRSwrQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDN0MsQ0FBQyxDQUFDO1NBQ0YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSwyQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFSRCxtQ0FRQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLElBQXFCO0lBRXpELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsOEJBQWMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFIRCxvREFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBzaW5ndWxhcml6ZSwgY2FtZWxpemUgfSBmcm9tICdpbmZsZWN0aW9uJztcblxuaW1wb3J0IGdldEZpZWxkc0Zyb21FbnRpdGllcyBmcm9tICcuL2dldEZpZWxkc0Zyb21FbnRpdGllcyc7XG5pbXBvcnQgeyBnZXRUeXBlRnJvbUtleSB9IGZyb20gJy4uL3V0aWxzL25hbWVDb252ZXJ0ZXInO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb290LCBJU291cmNlRGF0YVJvd0Jhc2UsIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiBHcmFwaFFMT2JqZWN0VHlwZSBmcm9tIGRhdGFcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgZGF0YSA9IHtcbiAqICAgIFwicG9zdHNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiTG9yZW0gSXBzdW1cIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiAyNTQsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiAxMjMsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMixcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpYyBEb2xvciBhbWV0XCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogNjUsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiA0NTYsXG4gKiAgICAgICAgfSxcbiAqICAgIF0sXG4gKiAgICBcInVzZXJzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMTIzLFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKb2huIERvZVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogNDU2LFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKYW5lIERvZVwiXG4gKiAgICAgICAgfVxuICogICAgXSxcbiAqIH07XG4gKiBjb25zdCB0eXBlcyA9IGdldFR5cGVzRnJvbURhdGEoZGF0YSk7XG4gKiAvLyBbXG4gKiAvLyAgICAgbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAqIC8vICAgICAgICAgbmFtZTogXCJQb3N0c1wiLFxuICogLy8gICAgICAgICBmaWVsZHM6IHtcbiAqIC8vICAgICAgICAgICAgIGlkOiB7IHR5cGU6IGdyYXBocWwuR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogZ3JhcGhxbC5HcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgICAgICB2aWV3czogeyB0eXBlOiBncmFwaHFsLkdyYXBoUUxJbnQgfSxcbiAqIC8vICAgICAgICAgICAgIHVzZXJfaWQ6IHsgdHlwZTogZ3JhcGhxbC5HcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgIH1cbiAqIC8vICAgICB9KSxcbiAqIC8vICAgICBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICogLy8gICAgICAgICBuYW1lOiBcIlVzZXJzXCIsXG4gKiAvLyAgICAgICAgIGZpZWxkczoge1xuICogLy8gICAgICAgICAgICAgaWQ6IHsgdHlwZTogZ3JhcGhxbC5HcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgICAgICBuYW1lOiB7IHR5cGU6IGdyYXBocWwuR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICB9XG4gKiAvLyAgICAgfSksXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFR5cGVzRnJvbURhdGE8VCBleHRlbmRzIElTb3VyY2VEYXRhUm93QmFzZSA9IElTb3VyY2VEYXRhUm93QmFzZT4oZGF0YTogSVNvdXJjZURhdGFSb290PFQ+KVxue1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcblx0XHQubWFwKHR5cGVOYW1lID0+ICh7XG5cdFx0XHRuYW1lOiBjYW1lbGl6ZShzaW5ndWxhcml6ZSh0eXBlTmFtZSkpLFxuXHRcdFx0ZmllbGRzOiBnZXRGaWVsZHNGcm9tRW50aXRpZXMoZGF0YVt0eXBlTmFtZV0pLFxuXHRcdH0pKVxuXHRcdC5tYXAodHlwZU9iamVjdCA9PiBuZXcgR3JhcGhRTE9iamVjdFR5cGUodHlwZU9iamVjdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZU5hbWVzRnJvbURhdGEoZGF0YTogSVNvdXJjZURhdGFSb290KVxue1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGdldFR5cGVGcm9tS2V5KTtcbn1cbiJdfQ==