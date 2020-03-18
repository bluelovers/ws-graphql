"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRangeFiltersFromEntities = void 0;
const graphql_1 = require("graphql");
const getFieldsFromEntities_1 = __importDefault(require("./getFieldsFromEntities"));
const getValuesFromEntities_1 = __importDefault(require("./getValuesFromEntities"));
const getTypeFromValues_1 = __importDefault(require("./getTypeFromValues"));
const nameConverter_1 = require("../utils/nameConverter");
const DateType_1 = __importDefault(require("./type/DateType"));
function getRangeFiltersFromEntities(entities) {
    const fieldValues = getValuesFromEntities_1.default(entities);
    return Object.keys(fieldValues).reduce((fields, fieldName) => {
        const fieldType = getTypeFromValues_1.default(fieldName, fieldValues[fieldName], false);
        if (fieldType == graphql_1.GraphQLInt ||
            fieldType == graphql_1.GraphQLFloat ||
            fieldType == DateType_1.default ||
            // @ts-ignore
            fieldType.name == 'Date') {
            fields[`${fieldName}_lt`] = { type: fieldType };
            fields[`${fieldName}_lte`] = { type: fieldType };
            fields[`${fieldName}_gt`] = { type: fieldType };
            fields[`${fieldName}_gte`] = { type: fieldType };
        }
        return fields;
    }, {});
}
exports.getRangeFiltersFromEntities = getRangeFiltersFromEntities;
/**
 * Get a list of GraphQLObjectType for filtering data
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
 * const types = getFilterTypesFromData(data);
 * // {
 * //     posts: new GraphQLInputObjectType({
 * //         name: "PostFilter",
 * //         fields: {
 * //             q: { type: GraphQLString },
 * //             id: { type: GraphQLString },
 * //             title: { type: GraphQLString },
 * //             views: { type: GraphQLInt },
 * //             views_lt: { type: GraphQLInt },
 * //             views_lte: { type: GraphQLInt },
 * //             views_gt: { type: GraphQLInt },
 * //             views_gte: { type: GraphQLInt },
 * //             user_id: { type: GraphQLString },
 * //         }
 * //     }),
 * //     users: new GraphQLObjectType({
 * //         name: "UserFilter",
 * //         fields: {
 * //             q: { type: GraphQLString },
 * //             id: { type: GraphQLString },
 * //             name: { type: GraphQLString },
 * //         }
 * //     }),
 * // }
 */
function getFilterTypesFromData(data) {
    return Object.keys(data).reduce((types, key) => {
        const typeKey = nameConverter_1.getTypeFromKey(key);
        types[typeKey] = new graphql_1.GraphQLInputObjectType({
            name: `${typeKey}Filter`,
            fields: Object.assign({
                q: { type: graphql_1.GraphQLString },
            }, {
                ids: { type: new graphql_1.GraphQLList(graphql_1.GraphQLID) },
            }, getFieldsFromEntities_1.default(data[key], false), getRangeFiltersFromEntities(data[key])),
        });
        return types;
    }, {});
}
exports.default = getFilterTypesFromData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldEZpbHRlclR5cGVzRnJvbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUNBU2lCO0FBQ2pCLG9GQUE0RDtBQUM1RCxvRkFBNEQ7QUFDNUQsNEVBQW9EO0FBQ3BELDBEQUF3RDtBQUV4RCwrREFBdUM7QUFFdkMsU0FBZ0IsMkJBQTJCLENBQXdELFFBQWE7SUFFL0csTUFBTSxXQUFXLEdBQUcsK0JBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRTtRQUU1RCxNQUFNLFNBQVMsR0FBRywyQkFBaUIsQ0FDbEMsU0FBUyxFQUNULFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFDdEIsS0FBSyxDQUNnQixDQUFDO1FBQ3ZCLElBQ0MsU0FBUyxJQUFJLG9CQUFVO1lBQ3ZCLFNBQVMsSUFBSSxzQkFBWTtZQUN6QixTQUFTLElBQUksa0JBQVE7WUFDckIsYUFBYTtZQUNiLFNBQVMsQ0FBQyxJQUFJLElBQUksTUFBTSxFQUV6QjtZQUNDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDaEQsTUFBTSxDQUFDLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUNqRCxNQUFNLENBQUMsR0FBRyxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxHQUFHLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7U0FDakQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUMsRUFBRSxFQUFvRSxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQXpCRCxrRUF5QkM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVERztBQUNILFNBQXdCLHNCQUFzQixDQUFDLElBQUk7SUFFbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FDOUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFFZCxNQUFNLE9BQU8sR0FBRyw4QkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLGdDQUFzQixDQUFDO1lBQzNDLElBQUksRUFBRSxHQUFHLE9BQU8sUUFBUTtZQUN4QixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FDcEI7Z0JBQ0MsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFhLEVBQUU7YUFDMUIsRUFDRDtnQkFDQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxxQkFBVyxDQUFDLG1CQUFTLENBQUMsRUFBRTthQUN6QyxFQUNELCtCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsRUFDdkMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3RDO1NBQ0QsQ0FBQyxDQUFBO1FBRUYsT0FBTyxLQUFLLENBQUE7SUFDYixDQUFDLEVBQ0QsRUFBNEMsQ0FDNUMsQ0FBQztBQUNILENBQUM7QUF6QkQseUNBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0R3JhcGhRTElucHV0T2JqZWN0VHlwZSxcblx0R3JhcGhRTFN0cmluZyxcblx0R3JhcGhRTEludCxcblx0R3JhcGhRTEZsb2F0LFxuXHRHcmFwaFFMTGlzdCxcblx0R3JhcGhRTElELFxuXHRHcmFwaFFMVHlwZSxcblx0R3JhcGhRTFNjYWxhclR5cGUsXG59IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdldEZpZWxkc0Zyb21FbnRpdGllcyBmcm9tICcuL2dldEZpZWxkc0Zyb21FbnRpdGllcyc7XG5pbXBvcnQgZ2V0VmFsdWVzRnJvbUVudGl0aWVzIGZyb20gJy4vZ2V0VmFsdWVzRnJvbUVudGl0aWVzJztcbmltcG9ydCBnZXRUeXBlRnJvbVZhbHVlcyBmcm9tICcuL2dldFR5cGVGcm9tVmFsdWVzJztcbmltcG9ydCB7IGdldFR5cGVGcm9tS2V5IH0gZnJvbSAnLi4vdXRpbHMvbmFtZUNvbnZlcnRlcic7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvd0Jhc2UsIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgRGF0ZVR5cGUgZnJvbSAnLi90eXBlL0RhdGVUeXBlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmdlRmlsdGVyc0Zyb21FbnRpdGllczxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlQ29yZSA9IElTb3VyY2VEYXRhUm93QmFzZT4oZW50aXRpZXM6IFRbXSlcbntcblx0Y29uc3QgZmllbGRWYWx1ZXMgPSBnZXRWYWx1ZXNGcm9tRW50aXRpZXMoZW50aXRpZXMpO1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoZmllbGRWYWx1ZXMpLnJlZHVjZSgoZmllbGRzLCBmaWVsZE5hbWUpID0+XG5cdHtcblx0XHRjb25zdCBmaWVsZFR5cGUgPSBnZXRUeXBlRnJvbVZhbHVlcyhcblx0XHRcdGZpZWxkTmFtZSxcblx0XHRcdGZpZWxkVmFsdWVzW2ZpZWxkTmFtZV0sXG5cdFx0XHRmYWxzZSxcblx0XHQpIGFzIEdyYXBoUUxTY2FsYXJUeXBlO1xuXHRcdGlmIChcblx0XHRcdGZpZWxkVHlwZSA9PSBHcmFwaFFMSW50IHx8XG5cdFx0XHRmaWVsZFR5cGUgPT0gR3JhcGhRTEZsb2F0IHx8XG5cdFx0XHRmaWVsZFR5cGUgPT0gRGF0ZVR5cGUgfHxcblx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdGZpZWxkVHlwZS5uYW1lID09ICdEYXRlJ1xuXHRcdClcblx0XHR7XG5cdFx0XHRmaWVsZHNbYCR7ZmllbGROYW1lfV9sdGBdID0geyB0eXBlOiBmaWVsZFR5cGUgfTtcblx0XHRcdGZpZWxkc1tgJHtmaWVsZE5hbWV9X2x0ZWBdID0geyB0eXBlOiBmaWVsZFR5cGUgfTtcblx0XHRcdGZpZWxkc1tgJHtmaWVsZE5hbWV9X2d0YF0gPSB7IHR5cGU6IGZpZWxkVHlwZSB9O1xuXHRcdFx0ZmllbGRzW2Ake2ZpZWxkTmFtZX1fZ3RlYF0gPSB7IHR5cGU6IGZpZWxkVHlwZSB9O1xuXHRcdH1cblx0XHRyZXR1cm4gZmllbGRzO1xuXHR9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCB7IHR5cGU6IFJldHVyblR5cGU8dHlwZW9mIGdldFR5cGVGcm9tVmFsdWVzPiB9Pik7XG59XG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiBHcmFwaFFMT2JqZWN0VHlwZSBmb3IgZmlsdGVyaW5nIGRhdGFcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgZGF0YSA9IHtcbiAqICAgIFwicG9zdHNcIjogW1xuICogICAgICAgIHtcbiAqICAgICAgICAgICAgXCJpZFwiOiAxLFxuICogICAgICAgICAgICBcInRpdGxlXCI6IFwiTG9yZW0gSXBzdW1cIixcbiAqICAgICAgICAgICAgXCJ2aWV3c1wiOiAyNTQsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiAxMjMsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMixcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNpYyBEb2xvciBhbWV0XCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogNjUsXG4gKiAgICAgICAgICAgIFwidXNlcl9pZFwiOiA0NTYsXG4gKiAgICAgICAgfSxcbiAqICAgIF0sXG4gKiAgICBcInVzZXJzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMTIzLFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKb2huIERvZVwiXG4gKiAgICAgICAgfSxcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogNDU2LFxuICogICAgICAgICAgICBcIm5hbWVcIjogXCJKYW5lIERvZVwiXG4gKiAgICAgICAgfVxuICogICAgXSxcbiAqIH07XG4gKiBjb25zdCB0eXBlcyA9IGdldEZpbHRlclR5cGVzRnJvbURhdGEoZGF0YSk7XG4gKiAvLyB7XG4gKiAvLyAgICAgcG9zdHM6IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAqIC8vICAgICAgICAgbmFtZTogXCJQb3N0RmlsdGVyXCIsXG4gKiAvLyAgICAgICAgIGZpZWxkczoge1xuICogLy8gICAgICAgICAgICAgcTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgICAgICBpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgICAgICB0aXRsZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgICAgICB2aWV3czogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gKiAvLyAgICAgICAgICAgICB2aWV3c19sdDogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gKiAvLyAgICAgICAgICAgICB2aWV3c19sdGU6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICogLy8gICAgICAgICAgICAgdmlld3NfZ3Q6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICogLy8gICAgICAgICAgICAgdmlld3NfZ3RlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAqIC8vICAgICAgICAgICAgIHVzZXJfaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICB9XG4gKiAvLyAgICAgfSksXG4gKiAvLyAgICAgdXNlcnM6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gKiAvLyAgICAgICAgIG5hbWU6IFwiVXNlckZpbHRlclwiLFxuICogLy8gICAgICAgICBmaWVsZHM6IHtcbiAqIC8vICAgICAgICAgICAgIHE6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICAgICAgaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICAgICAgbmFtZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gKiAvLyAgICAgICAgIH1cbiAqIC8vICAgICB9KSxcbiAqIC8vIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YShkYXRhKVxue1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkucmVkdWNlKFxuXHRcdCh0eXBlcywga2V5KSA9PlxuXHRcdHtcblx0XHRcdGNvbnN0IHR5cGVLZXkgPSBnZXRUeXBlRnJvbUtleShrZXkpO1xuXG5cdFx0XHR0eXBlc1t0eXBlS2V5XSA9IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcblx0XHRcdFx0bmFtZTogYCR7dHlwZUtleX1GaWx0ZXJgLFxuXHRcdFx0XHRmaWVsZHM6IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZHM6IHsgdHlwZTogbmV3IEdyYXBoUUxMaXN0KEdyYXBoUUxJRCkgfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGdldEZpZWxkc0Zyb21FbnRpdGllcyhkYXRhW2tleV0sIGZhbHNlKSxcblx0XHRcdFx0XHRnZXRSYW5nZUZpbHRlcnNGcm9tRW50aXRpZXMoZGF0YVtrZXldKSxcblx0XHRcdFx0KSxcblx0XHRcdH0pXG5cblx0XHRcdHJldHVybiB0eXBlc1xuXHRcdH0sXG5cdFx0e30gYXMgUmVjb3JkPHN0cmluZywgR3JhcGhRTElucHV0T2JqZWN0VHlwZT4sXG5cdCk7XG59XG4iXX0=