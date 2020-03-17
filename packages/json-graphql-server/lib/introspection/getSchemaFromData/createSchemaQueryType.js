"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilterTypesFromData_1 = __importDefault(require("../getFilterTypesFromData"));
const graphql_1 = require("graphql");
const camelizePluralize_1 = __importDefault(require("../../utils/camelizePluralize"));
function createSchemaQueryType({ data, types, typesByName, }) {
    const filterTypesByName = getFilterTypesFromData_1.default(data);
    const listMetadataType = new graphql_1.GraphQLObjectType({
        name: 'ListMetadata',
        fields: {
            count: { type: graphql_1.GraphQLInt },
        },
    });
    let fields = types.reduce((fields, type) => {
        const _key = camelizePluralize_1.default(type.name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NoZW1hUXVlcnlUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlU2NoZW1hUXVlcnlUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUZBQStEO0FBQy9ELHFDQUErRztBQUUvRyxzRkFBOEQ7QUFFOUQsU0FBd0IscUJBQXFCLENBQUMsRUFDN0MsSUFBSSxFQUNKLEtBQUssRUFDTCxXQUFXLEdBQ1g7SUFFQSxNQUFNLGlCQUFpQixHQUFHLGdDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXZELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQztRQUM5QyxJQUFJLEVBQUUsY0FBYztRQUNwQixNQUFNLEVBQUU7WUFDUCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVUsRUFBRTtTQUMzQjtLQUNELENBQUMsQ0FBQztJQUVILElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFFMUMsTUFBTSxJQUFJLEdBQUcsMkJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDbkIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksRUFBRTtnQkFDTCxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSx3QkFBYyxDQUFDLG1CQUFTLENBQUMsRUFBRTthQUMzQztTQUNELENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHO1lBQ3RCLElBQUksRUFBRSxJQUFJLHFCQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO2dCQUM3QixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtnQkFDbEMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFhLEVBQUU7Z0JBQ2xDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDOUM7U0FDRCxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsR0FBRztZQUMzQixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVUsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFVLEVBQUU7Z0JBQzdCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDOUM7U0FDRCxDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBcUI7SUFFckIsTUFBTSxTQUFTLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQztRQUN2QyxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU07S0FDTixDQUFDLENBQUM7SUFFSCxPQUFPLFNBQVMsQ0FBQTtBQUNqQixDQUFDO0FBdERELHdDQXNEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRGaWx0ZXJUeXBlc0Zyb21EYXRhIGZyb20gJy4uL2dldEZpbHRlclR5cGVzRnJvbURhdGEnO1xuaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxJbnQsIEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMSUQsIEdyYXBoUUxMaXN0LCBHcmFwaFFMU3RyaW5nIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBjYW1lbGl6ZSwgcGx1cmFsaXplIH0gZnJvbSAnaW5mbGVjdGlvbic7XG5pbXBvcnQgY2FtZWxpemVQbHVyYWxpemUgZnJvbSAnLi4vLi4vdXRpbHMvY2FtZWxpemVQbHVyYWxpemUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTY2hlbWFRdWVyeVR5cGUoe1xuXHRkYXRhLFxuXHR0eXBlcyxcblx0dHlwZXNCeU5hbWUsXG59KVxue1xuXHRjb25zdCBmaWx0ZXJUeXBlc0J5TmFtZSA9IGdldEZpbHRlclR5cGVzRnJvbURhdGEoZGF0YSk7XG5cblx0Y29uc3QgbGlzdE1ldGFkYXRhVHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG5cdFx0bmFtZTogJ0xpc3RNZXRhZGF0YScsXG5cdFx0ZmllbGRzOiB7XG5cdFx0XHRjb3VudDogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG5cdFx0fSxcblx0fSk7XG5cblx0bGV0IGZpZWxkcyA9IHR5cGVzLnJlZHVjZSgoZmllbGRzLCB0eXBlKSA9PlxuXHR7XG5cdFx0Y29uc3QgX2tleSA9IGNhbWVsaXplUGx1cmFsaXplKHR5cGUubmFtZSk7XG5cblx0XHRmaWVsZHNbdHlwZS5uYW1lXSA9IHtcblx0XHRcdHR5cGU6IHR5cGVzQnlOYW1lW3R5cGUubmFtZV0sXG5cdFx0XHRhcmdzOiB7XG5cdFx0XHRcdGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSUQpIH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0ZmllbGRzW2BhbGwke19rZXl9YF0gPSB7XG5cdFx0XHR0eXBlOiBuZXcgR3JhcGhRTExpc3QodHlwZXNCeU5hbWVbdHlwZS5uYW1lXSksXG5cdFx0XHRhcmdzOiB7XG5cdFx0XHRcdHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuXHRcdFx0XHRwZXJQYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcblx0XHRcdFx0c29ydEZpZWxkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcblx0XHRcdFx0c29ydE9yZGVyOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcblx0XHRcdFx0ZmlsdGVyOiB7IHR5cGU6IGZpbHRlclR5cGVzQnlOYW1lW3R5cGUubmFtZV0gfSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRmaWVsZHNbYF9hbGwke19rZXl9TWV0YWBdID0ge1xuXHRcdFx0dHlwZTogbGlzdE1ldGFkYXRhVHlwZSxcblx0XHRcdGFyZ3M6IHtcblx0XHRcdFx0cGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG5cdFx0XHRcdHBlclBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuXHRcdFx0XHRmaWx0ZXI6IHsgdHlwZTogZmlsdGVyVHlwZXNCeU5hbWVbdHlwZS5uYW1lXSB9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdHJldHVybiBmaWVsZHM7XG5cdH0sIHt9KTtcblxuXHQvL2NvbnNvbGUuZGlyKGZpZWxkcylcblxuXHRjb25zdCBxdWVyeVR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuXHRcdG5hbWU6ICdRdWVyeScsXG5cdFx0ZmllbGRzLFxuXHR9KTtcblxuXHRyZXR1cm4gcXVlcnlUeXBlXG59XG4iXX0=