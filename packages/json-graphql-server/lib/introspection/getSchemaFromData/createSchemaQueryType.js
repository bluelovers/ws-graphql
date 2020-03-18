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
//# sourceMappingURL=createSchemaQueryType.js.map