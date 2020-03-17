"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilterTypesFromData_1 = __importDefault(require("../getFilterTypesFromData"));
const graphql_1 = require("graphql");
const nameConverter_1 = require("../../utils/nameConverter");
function createSchemaQueryType({ data, types, typesByName, }) {
    const filterTypesByName = getFilterTypesFromData_1.default(data);
    const listMetadataType = new graphql_1.GraphQLObjectType({
        name: 'ListMetadata',
        fields: {
            count: { type: graphql_1.GraphQLInt },
        },
    });
    let fields = types.reduce((fields, type) => {
        const _key = nameConverter_1.camelizePluralize(type.name);
        fields[type.name] = {
            type: typesByName[type.name],
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
            },
        };
        fields[`all${_key}`] = {
            type: new graphql_1.GraphQLList(typesByName[type.name]),
            args: {
                page: { type: graphql_1.GraphQLInt },
                perPage: { type: graphql_1.GraphQLInt },
                sortField: { type: graphql_1.GraphQLString },
                sortOrder: { type: graphql_1.GraphQLString },
                filter: { type: filterTypesByName[type.name] },
            },
        };
        fields[`_all${_key}Meta`] = {
            type: listMetadataType,
            args: {
                page: { type: graphql_1.GraphQLInt },
                perPage: { type: graphql_1.GraphQLInt },
                filter: { type: filterTypesByName[type.name] },
            },
        };
        return fields;
    }, {});
    //console.dir(fields)
    const queryType = new graphql_1.GraphQLObjectType({
        name: 'Query',
        fields,
    });
    return queryType;
}
exports.default = createSchemaQueryType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NoZW1hUXVlcnlUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlU2NoZW1hUXVlcnlUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUZBQStEO0FBQy9ELHFDQUErRztBQUcvRyw2REFBOEU7QUFFOUUsU0FBd0IscUJBQXFCLENBQXdELEVBQ3BHLElBQUksRUFDSixLQUFLLEVBQ0wsV0FBVyxHQUNFO0lBRWIsTUFBTSxpQkFBaUIsR0FBRyxnQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV2RCxNQUFNLGdCQUFnQixHQUFHLElBQUksMkJBQWlCLENBQUM7UUFDOUMsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFO1lBQ1AsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFVLEVBQUU7U0FDM0I7S0FDRCxDQUFDLENBQUM7SUFFSCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO1FBRTFDLE1BQU0sSUFBSSxHQUFHLGlDQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ25CLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksd0JBQWMsQ0FBQyxtQkFBUyxDQUFDLEVBQUU7YUFDM0M7U0FDRCxDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRztZQUN0QixJQUFJLEVBQUUsSUFBSSxxQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO2dCQUMxQixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVUsRUFBRTtnQkFDN0IsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFhLEVBQUU7Z0JBQ2xDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBYSxFQUFFO2dCQUNsQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQzlDO1NBQ0QsQ0FBQztRQUNGLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUc7WUFDM0IsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO2dCQUM3QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQzlDO1NBQ0QsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQXFCO0lBRXJCLE1BQU0sU0FBUyxHQUFHLElBQUksMkJBQWlCLENBQUM7UUFDdkMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNO0tBQ04sQ0FBQyxDQUFDO0lBRUgsT0FBTyxTQUFTLENBQUE7QUFDakIsQ0FBQztBQXRERCx3Q0FzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YSBmcm9tICcuLi9nZXRGaWx0ZXJUeXBlc0Zyb21EYXRhJztcbmltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMSW50LCBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTElELCBHcmFwaFFMTGlzdCwgR3JhcGhRTFN0cmluZyB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb3dCYXNlLCBJU291cmNlRGF0YVJvd0Jhc2VDb3JlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgSVJ1bnRpbWUgfSBmcm9tICcuLi9nZXRTY2hlbWFGcm9tRGF0YSc7XG5pbXBvcnQgeyBnZXRUeXBlRnJvbUtleSwgY2FtZWxpemVQbHVyYWxpemUgfSBmcm9tICcuLi8uLi91dGlscy9uYW1lQ29udmVydGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2NoZW1hUXVlcnlUeXBlPFQgZXh0ZW5kcyBJU291cmNlRGF0YVJvd0Jhc2VDb3JlID0gSVNvdXJjZURhdGFSb3dCYXNlPih7XG5cdGRhdGEsXG5cdHR5cGVzLFxuXHR0eXBlc0J5TmFtZSxcbn06IElSdW50aW1lPFQ+KVxue1xuXHRjb25zdCBmaWx0ZXJUeXBlc0J5TmFtZSA9IGdldEZpbHRlclR5cGVzRnJvbURhdGEoZGF0YSk7XG5cblx0Y29uc3QgbGlzdE1ldGFkYXRhVHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG5cdFx0bmFtZTogJ0xpc3RNZXRhZGF0YScsXG5cdFx0ZmllbGRzOiB7XG5cdFx0XHRjb3VudDogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG5cdFx0fSxcblx0fSk7XG5cblx0bGV0IGZpZWxkcyA9IHR5cGVzLnJlZHVjZSgoZmllbGRzLCB0eXBlKSA9PlxuXHR7XG5cdFx0Y29uc3QgX2tleSA9IGNhbWVsaXplUGx1cmFsaXplKHR5cGUubmFtZSk7XG5cblx0XHRmaWVsZHNbdHlwZS5uYW1lXSA9IHtcblx0XHRcdHR5cGU6IHR5cGVzQnlOYW1lW3R5cGUubmFtZV0sXG5cdFx0XHRhcmdzOiB7XG5cdFx0XHRcdGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSUQpIH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0ZmllbGRzW2BhbGwke19rZXl9YF0gPSB7XG5cdFx0XHR0eXBlOiBuZXcgR3JhcGhRTExpc3QodHlwZXNCeU5hbWVbdHlwZS5uYW1lXSksXG5cdFx0XHRhcmdzOiB7XG5cdFx0XHRcdHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuXHRcdFx0XHRwZXJQYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcblx0XHRcdFx0c29ydEZpZWxkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcblx0XHRcdFx0c29ydE9yZGVyOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcblx0XHRcdFx0ZmlsdGVyOiB7IHR5cGU6IGZpbHRlclR5cGVzQnlOYW1lW3R5cGUubmFtZV0gfSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRmaWVsZHNbYF9hbGwke19rZXl9TWV0YWBdID0ge1xuXHRcdFx0dHlwZTogbGlzdE1ldGFkYXRhVHlwZSxcblx0XHRcdGFyZ3M6IHtcblx0XHRcdFx0cGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG5cdFx0XHRcdHBlclBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuXHRcdFx0XHRmaWx0ZXI6IHsgdHlwZTogZmlsdGVyVHlwZXNCeU5hbWVbdHlwZS5uYW1lXSB9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiBmaWVsZHM7XG5cdH0sIHt9KTtcblxuXHQvL2NvbnNvbGUuZGlyKGZpZWxkcylcblxuXHRjb25zdCBxdWVyeVR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuXHRcdG5hbWU6ICdRdWVyeScsXG5cdFx0ZmllbGRzLFxuXHR9KTtcblxuXHRyZXR1cm4gcXVlcnlUeXBlXG59XG4iXX0=