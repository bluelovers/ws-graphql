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
    console.dir(fields);
    const queryType = new graphql_1.GraphQLObjectType({
        name: 'Query',
        fields,
    });
    return queryType;
}
exports.default = createSchemaQueryType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NoZW1hUXVlcnlUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlU2NoZW1hUXVlcnlUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUZBQStEO0FBQy9ELHFDQUErRztBQUUvRyxzRkFBOEQ7QUFFOUQsU0FBd0IscUJBQXFCLENBQUMsRUFDN0MsSUFBSSxFQUNKLEtBQUssRUFDTCxXQUFXLEdBQ1g7SUFFQSxNQUFNLGlCQUFpQixHQUFHLGdDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXZELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQztRQUM5QyxJQUFJLEVBQUUsY0FBYztRQUNwQixNQUFNLEVBQUU7WUFDUCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVUsRUFBRTtTQUMzQjtLQUNELENBQUMsQ0FBQztJQUVILElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFFMUMsTUFBTSxJQUFJLEdBQUcsMkJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDbkIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksRUFBRTtnQkFDTCxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSx3QkFBYyxDQUFDLG1CQUFTLENBQUMsRUFBRTthQUMzQztTQUNELENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHO1lBQ3RCLElBQUksRUFBRSxJQUFJLHFCQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO2dCQUM3QixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtnQkFDbEMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFhLEVBQUU7Z0JBQ2xDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDOUM7U0FDRCxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsR0FBRztZQUMzQixJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVUsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFVLEVBQUU7Z0JBQzdCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7YUFDOUM7U0FDRCxDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRW5CLE1BQU0sU0FBUyxHQUFHLElBQUksMkJBQWlCLENBQUM7UUFDdkMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNO0tBQ04sQ0FBQyxDQUFDO0lBRUgsT0FBTyxTQUFTLENBQUE7QUFDakIsQ0FBQztBQXRERCx3Q0FzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YSBmcm9tICcuLi9nZXRGaWx0ZXJUeXBlc0Zyb21EYXRhJztcbmltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMSW50LCBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTElELCBHcmFwaFFMTGlzdCwgR3JhcGhRTFN0cmluZyB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgY2FtZWxpemUsIHBsdXJhbGl6ZSB9IGZyb20gJ2luZmxlY3Rpb24nO1xuaW1wb3J0IGNhbWVsaXplUGx1cmFsaXplIGZyb20gJy4uLy4uL3V0aWxzL2NhbWVsaXplUGx1cmFsaXplJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2NoZW1hUXVlcnlUeXBlKHtcblx0ZGF0YSxcblx0dHlwZXMsXG5cdHR5cGVzQnlOYW1lLFxufSlcbntcblx0Y29uc3QgZmlsdGVyVHlwZXNCeU5hbWUgPSBnZXRGaWx0ZXJUeXBlc0Zyb21EYXRhKGRhdGEpO1xuXG5cdGNvbnN0IGxpc3RNZXRhZGF0YVR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuXHRcdG5hbWU6ICdMaXN0TWV0YWRhdGEnLFxuXHRcdGZpZWxkczoge1xuXHRcdFx0Y291bnQ6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGxldCBmaWVsZHMgPSB0eXBlcy5yZWR1Y2UoKGZpZWxkcywgdHlwZSkgPT5cblx0e1xuXHRcdGNvbnN0IF9rZXkgPSBjYW1lbGl6ZVBsdXJhbGl6ZSh0eXBlLm5hbWUpO1xuXG5cdFx0ZmllbGRzW3R5cGUubmFtZV0gPSB7XG5cdFx0XHR0eXBlOiB0eXBlc0J5TmFtZVt0eXBlLm5hbWVdLFxuXHRcdFx0YXJnczoge1xuXHRcdFx0XHRpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTElEKSB9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdGZpZWxkc1tgYWxsJHtfa2V5fWBdID0ge1xuXHRcdFx0dHlwZTogbmV3IEdyYXBoUUxMaXN0KHR5cGVzQnlOYW1lW3R5cGUubmFtZV0pLFxuXHRcdFx0YXJnczoge1xuXHRcdFx0XHRwYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcblx0XHRcdFx0cGVyUGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG5cdFx0XHRcdHNvcnRGaWVsZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG5cdFx0XHRcdHNvcnRPcmRlcjogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG5cdFx0XHRcdGZpbHRlcjogeyB0eXBlOiBmaWx0ZXJUeXBlc0J5TmFtZVt0eXBlLm5hbWVdIH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0ZmllbGRzW2BfYWxsJHtfa2V5fU1ldGFgXSA9IHtcblx0XHRcdHR5cGU6IGxpc3RNZXRhZGF0YVR5cGUsXG5cdFx0XHRhcmdzOiB7XG5cdFx0XHRcdHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuXHRcdFx0XHRwZXJQYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcblx0XHRcdFx0ZmlsdGVyOiB7IHR5cGU6IGZpbHRlclR5cGVzQnlOYW1lW3R5cGUubmFtZV0gfSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gZmllbGRzO1xuXHR9LCB7fSk7XG5cblx0Y29uc29sZS5kaXIoZmllbGRzKVxuXG5cdGNvbnN0IHF1ZXJ5VHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG5cdFx0bmFtZTogJ1F1ZXJ5Jyxcblx0XHRmaWVsZHMsXG5cdH0pO1xuXG5cdHJldHVybiBxdWVyeVR5cGVcbn1cbiJdfQ==