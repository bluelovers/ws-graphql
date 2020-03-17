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
const DateType_1 = __importDefault(require("./DateType"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldEZpbHRlclR5cGVzRnJvbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUNBU2lCO0FBQ2pCLG9GQUE0RDtBQUM1RCxvRkFBNEQ7QUFDNUQsNEVBQW9EO0FBQ3BELDBEQUF3RDtBQUV4RCwwREFBa0M7QUFFbEMsU0FBZ0IsMkJBQTJCLENBQXdELFFBQWE7SUFFL0csTUFBTSxXQUFXLEdBQUcsK0JBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRTtRQUU1RCxNQUFNLFNBQVMsR0FBRywyQkFBaUIsQ0FDbEMsU0FBUyxFQUNULFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFDdEIsS0FBSyxDQUNnQixDQUFDO1FBQ3ZCLElBQ0MsU0FBUyxJQUFJLG9CQUFVO1lBQ3ZCLFNBQVMsSUFBSSxzQkFBWTtZQUN6QixTQUFTLElBQUksa0JBQVE7WUFDckIsYUFBYTtZQUNiLFNBQVMsQ0FBQyxJQUFJLElBQUksTUFBTSxFQUV6QjtZQUNDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDaEQsTUFBTSxDQUFDLEdBQUcsU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUNqRCxNQUFNLENBQUMsR0FBRyxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxHQUFHLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7U0FDakQ7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUMsRUFBRSxFQUFvRSxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQXpCRCxrRUF5QkM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVERztBQUNILFNBQXdCLHNCQUFzQixDQUFDLElBQUk7SUFFbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FDOUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFFZCxNQUFNLE9BQU8sR0FBRyw4QkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLGdDQUFzQixDQUFDO1lBQzNDLElBQUksRUFBRSxHQUFHLE9BQU8sUUFBUTtZQUN4QixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FDcEI7Z0JBQ0MsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFhLEVBQUU7YUFDMUIsRUFDRDtnQkFDQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxxQkFBVyxDQUFDLG1CQUFTLENBQUMsRUFBRTthQUN6QyxFQUNELCtCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsRUFDdkMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3RDO1NBQ0QsQ0FBQyxDQUFBO1FBRUYsT0FBTyxLQUFLLENBQUE7SUFDYixDQUFDLEVBQ0QsRUFBNEMsQ0FDNUMsQ0FBQztBQUNILENBQUM7QUF6QkQseUNBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0R3JhcGhRTElucHV0T2JqZWN0VHlwZSxcblx0R3JhcGhRTFN0cmluZyxcblx0R3JhcGhRTEludCxcblx0R3JhcGhRTEZsb2F0LFxuXHRHcmFwaFFMTGlzdCxcblx0R3JhcGhRTElELFxuXHRHcmFwaFFMVHlwZSxcblx0R3JhcGhRTFNjYWxhclR5cGUsXG59IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdldEZpZWxkc0Zyb21FbnRpdGllcyBmcm9tICcuL2dldEZpZWxkc0Zyb21FbnRpdGllcyc7XG5pbXBvcnQgZ2V0VmFsdWVzRnJvbUVudGl0aWVzIGZyb20gJy4vZ2V0VmFsdWVzRnJvbUVudGl0aWVzJztcbmltcG9ydCBnZXRUeXBlRnJvbVZhbHVlcyBmcm9tICcuL2dldFR5cGVGcm9tVmFsdWVzJztcbmltcG9ydCB7IGdldFR5cGVGcm9tS2V5IH0gZnJvbSAnLi4vdXRpbHMvbmFtZUNvbnZlcnRlcic7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvd0Jhc2UsIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgRGF0ZVR5cGUgZnJvbSAnLi9EYXRlVHlwZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5nZUZpbHRlcnNGcm9tRW50aXRpZXM8VCBleHRlbmRzIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgPSBJU291cmNlRGF0YVJvd0Jhc2U+KGVudGl0aWVzOiBUW10pXG57XG5cdGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0VmFsdWVzRnJvbUVudGl0aWVzKGVudGl0aWVzKTtcblx0cmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkVmFsdWVzKS5yZWR1Y2UoKGZpZWxkcywgZmllbGROYW1lKSA9PlxuXHR7XG5cdFx0Y29uc3QgZmllbGRUeXBlID0gZ2V0VHlwZUZyb21WYWx1ZXMoXG5cdFx0XHRmaWVsZE5hbWUsXG5cdFx0XHRmaWVsZFZhbHVlc1tmaWVsZE5hbWVdLFxuXHRcdFx0ZmFsc2UsXG5cdFx0KSBhcyBHcmFwaFFMU2NhbGFyVHlwZTtcblx0XHRpZiAoXG5cdFx0XHRmaWVsZFR5cGUgPT0gR3JhcGhRTEludCB8fFxuXHRcdFx0ZmllbGRUeXBlID09IEdyYXBoUUxGbG9hdCB8fFxuXHRcdFx0ZmllbGRUeXBlID09IERhdGVUeXBlIHx8XG5cdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRmaWVsZFR5cGUubmFtZSA9PSAnRGF0ZSdcblx0XHQpXG5cdFx0e1xuXHRcdFx0ZmllbGRzW2Ake2ZpZWxkTmFtZX1fbHRgXSA9IHsgdHlwZTogZmllbGRUeXBlIH07XG5cdFx0XHRmaWVsZHNbYCR7ZmllbGROYW1lfV9sdGVgXSA9IHsgdHlwZTogZmllbGRUeXBlIH07XG5cdFx0XHRmaWVsZHNbYCR7ZmllbGROYW1lfV9ndGBdID0geyB0eXBlOiBmaWVsZFR5cGUgfTtcblx0XHRcdGZpZWxkc1tgJHtmaWVsZE5hbWV9X2d0ZWBdID0geyB0eXBlOiBmaWVsZFR5cGUgfTtcblx0XHR9XG5cdFx0cmV0dXJuIGZpZWxkcztcblx0fSwge30gYXMgUmVjb3JkPHN0cmluZywgeyB0eXBlOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRUeXBlRnJvbVZhbHVlcz4gfT4pO1xufVxuXG4vKipcbiAqIEdldCBhIGxpc3Qgb2YgR3JhcGhRTE9iamVjdFR5cGUgZm9yIGZpbHRlcmluZyBkYXRhXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGRhdGEgPSB7XG4gKiAgICBcInBvc3RzXCI6IFtcbiAqICAgICAgICB7XG4gKiAgICAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICAgICBcInZpZXdzXCI6IDY1LFxuICogICAgICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgICAgIH0sXG4gKiAgICBdLFxuICogICAgXCJ1c2Vyc1wiOiBbXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDEyMyxcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIlxuICogICAgICAgIH0sXG4gKiAgICAgICAge1xuICogICAgICAgICAgICBcImlkXCI6IDQ1NixcbiAqICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBEb2VcIlxuICogICAgICAgIH1cbiAqICAgIF0sXG4gKiB9O1xuICogY29uc3QgdHlwZXMgPSBnZXRGaWx0ZXJUeXBlc0Zyb21EYXRhKGRhdGEpO1xuICogLy8ge1xuICogLy8gICAgIHBvc3RzOiBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gKiAvLyAgICAgICAgIG5hbWU6IFwiUG9zdEZpbHRlclwiLFxuICogLy8gICAgICAgICBmaWVsZHM6IHtcbiAqIC8vICAgICAgICAgICAgIHE6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICAgICAgaWQ6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICAgICAgdmlld3M6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICogLy8gICAgICAgICAgICAgdmlld3NfbHQ6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICogLy8gICAgICAgICAgICAgdmlld3NfbHRlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAqIC8vICAgICAgICAgICAgIHZpZXdzX2d0OiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAqIC8vICAgICAgICAgICAgIHZpZXdzX2d0ZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gKiAvLyAgICAgICAgICAgICB1c2VyX2lkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAqIC8vICAgICAgICAgfVxuICogLy8gICAgIH0pLFxuICogLy8gICAgIHVzZXJzOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICogLy8gICAgICAgICBuYW1lOiBcIlVzZXJGaWx0ZXJcIixcbiAqIC8vICAgICAgICAgZmllbGRzOiB7XG4gKiAvLyAgICAgICAgICAgICBxOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAqIC8vICAgICAgICAgICAgIGlkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAqIC8vICAgICAgICAgICAgIG5hbWU6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICogLy8gICAgICAgICB9XG4gKiAvLyAgICAgfSksXG4gKiAvLyB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZpbHRlclR5cGVzRnJvbURhdGEoZGF0YSlcbntcblx0cmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZShcblx0XHQodHlwZXMsIGtleSkgPT5cblx0XHR7XG5cdFx0XHRjb25zdCB0eXBlS2V5ID0gZ2V0VHlwZUZyb21LZXkoa2V5KTtcblxuXHRcdFx0dHlwZXNbdHlwZUtleV0gPSBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG5cdFx0XHRcdG5hbWU6IGAke3R5cGVLZXl9RmlsdGVyYCxcblx0XHRcdFx0ZmllbGRzOiBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHE6IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWRzOiB7IHR5cGU6IG5ldyBHcmFwaFFMTGlzdChHcmFwaFFMSUQpIH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRnZXRGaWVsZHNGcm9tRW50aXRpZXMoZGF0YVtrZXldLCBmYWxzZSksXG5cdFx0XHRcdFx0Z2V0UmFuZ2VGaWx0ZXJzRnJvbUVudGl0aWVzKGRhdGFba2V5XSksXG5cdFx0XHRcdCksXG5cdFx0XHR9KVxuXG5cdFx0XHRyZXR1cm4gdHlwZXNcblx0XHR9LFxuXHRcdHt9IGFzIFJlY29yZDxzdHJpbmcsIEdyYXBoUUxJbnB1dE9iamVjdFR5cGU+LFxuXHQpO1xufVxuIl19