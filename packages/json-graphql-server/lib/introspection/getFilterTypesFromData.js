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
//# sourceMappingURL=getFilterTypesFromData.js.map