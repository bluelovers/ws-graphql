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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NoZW1hUXVlcnlUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlU2NoZW1hUXVlcnlUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUZBQStEO0FBQy9ELHFDQUErRztBQUUvRyxzRkFBOEQ7QUFJOUQsU0FBd0IscUJBQXFCLENBQXlCLEVBQ3JFLElBQUksRUFDSixLQUFLLEVBQ0wsV0FBVyxHQUNFO0lBRWIsTUFBTSxpQkFBaUIsR0FBRyxnQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV2RCxNQUFNLGdCQUFnQixHQUFHLElBQUksMkJBQWlCLENBQUM7UUFDOUMsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFO1lBQ1AsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFVLEVBQUU7U0FDM0I7S0FDRCxDQUFDLENBQUM7SUFFSCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO1FBRTFDLE1BQU0sSUFBSSxHQUFHLDJCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ25CLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLEVBQUU7Z0JBQ0wsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksd0JBQWMsQ0FBQyxtQkFBUyxDQUFDLEVBQUU7YUFDM0M7U0FDRCxDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRztZQUN0QixJQUFJLEVBQUUsSUFBSSxxQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO2dCQUMxQixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVUsRUFBRTtnQkFDN0IsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFhLEVBQUU7Z0JBQ2xDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBYSxFQUFFO2dCQUNsQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQzlDO1NBQ0QsQ0FBQztRQUNGLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUc7WUFDM0IsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixJQUFJLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO2dCQUM3QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2FBQzlDO1NBQ0QsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQXFCO0lBRXJCLE1BQU0sU0FBUyxHQUFHLElBQUksMkJBQWlCLENBQUM7UUFDdkMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNO0tBQ04sQ0FBQyxDQUFDO0lBRUgsT0FBTyxTQUFTLENBQUE7QUFDakIsQ0FBQztBQXRERCx3Q0FzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YSBmcm9tICcuLi9nZXRGaWx0ZXJUeXBlc0Zyb21EYXRhJztcbmltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMSW50LCBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTElELCBHcmFwaFFMTGlzdCwgR3JhcGhRTFN0cmluZyB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgY2FtZWxpemUsIHBsdXJhbGl6ZSB9IGZyb20gJ2luZmxlY3Rpb24nO1xuaW1wb3J0IGNhbWVsaXplUGx1cmFsaXplIGZyb20gJy4uLy4uL3V0aWxzL2NhbWVsaXplUGx1cmFsaXplJztcbmltcG9ydCB7IElTb3VyY2VEYXRhUm93QmFzZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IElSdW50aW1lIH0gZnJvbSAnLi4vZ2V0U2NoZW1hRnJvbURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTY2hlbWFRdWVyeVR5cGU8VCA9IElTb3VyY2VEYXRhUm93QmFzZT4oe1xuXHRkYXRhLFxuXHR0eXBlcyxcblx0dHlwZXNCeU5hbWUsXG59OiBJUnVudGltZTxUPilcbntcblx0Y29uc3QgZmlsdGVyVHlwZXNCeU5hbWUgPSBnZXRGaWx0ZXJUeXBlc0Zyb21EYXRhKGRhdGEpO1xuXG5cdGNvbnN0IGxpc3RNZXRhZGF0YVR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuXHRcdG5hbWU6ICdMaXN0TWV0YWRhdGEnLFxuXHRcdGZpZWxkczoge1xuXHRcdFx0Y291bnQ6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGxldCBmaWVsZHMgPSB0eXBlcy5yZWR1Y2UoKGZpZWxkcywgdHlwZSkgPT5cblx0e1xuXHRcdGNvbnN0IF9rZXkgPSBjYW1lbGl6ZVBsdXJhbGl6ZSh0eXBlLm5hbWUpO1xuXG5cdFx0ZmllbGRzW3R5cGUubmFtZV0gPSB7XG5cdFx0XHR0eXBlOiB0eXBlc0J5TmFtZVt0eXBlLm5hbWVdLFxuXHRcdFx0YXJnczoge1xuXHRcdFx0XHRpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTElEKSB9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdGZpZWxkc1tgYWxsJHtfa2V5fWBdID0ge1xuXHRcdFx0dHlwZTogbmV3IEdyYXBoUUxMaXN0KHR5cGVzQnlOYW1lW3R5cGUubmFtZV0pLFxuXHRcdFx0YXJnczoge1xuXHRcdFx0XHRwYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcblx0XHRcdFx0cGVyUGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG5cdFx0XHRcdHNvcnRGaWVsZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG5cdFx0XHRcdHNvcnRPcmRlcjogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG5cdFx0XHRcdGZpbHRlcjogeyB0eXBlOiBmaWx0ZXJUeXBlc0J5TmFtZVt0eXBlLm5hbWVdIH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0ZmllbGRzW2BfYWxsJHtfa2V5fU1ldGFgXSA9IHtcblx0XHRcdHR5cGU6IGxpc3RNZXRhZGF0YVR5cGUsXG5cdFx0XHRhcmdzOiB7XG5cdFx0XHRcdHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuXHRcdFx0XHRwZXJQYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcblx0XHRcdFx0ZmlsdGVyOiB7IHR5cGU6IGZpbHRlclR5cGVzQnlOYW1lW3R5cGUubmFtZV0gfSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRyZXR1cm4gZmllbGRzO1xuXHR9LCB7fSk7XG5cblx0Ly9jb25zb2xlLmRpcihmaWVsZHMpXG5cblx0Y29uc3QgcXVlcnlUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcblx0XHRuYW1lOiAnUXVlcnknLFxuXHRcdGZpZWxkcyxcblx0fSk7XG5cblx0cmV0dXJuIHF1ZXJ5VHlwZVxufVxuIl19