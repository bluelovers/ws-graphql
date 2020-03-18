"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getFieldsFromEntities_1 = __importDefault(require("./getTypesFromData/getFieldsFromEntities"));
const nameConverter_1 = require("../utils/nameConverter");
const getRangeFiltersFromEntities_1 = __importDefault(require("./getFilterTypesFromData/getRangeFiltersFromEntities"));
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
function getFilterTypesFromData(data, options = {}) {
    return Object.keys(data).reduce((types, keyName) => {
        var _a, _b, _c, _d;
        const typeKey = nameConverter_1.getTypeFromKey(keyName);
        let graphQLInputObjectTypeConfig = {
            name: `${typeKey}Filter`,
            fields: {
                q: {
                    type: graphql_1.GraphQLString,
                },
                ids: {
                    type: new graphql_1.GraphQLList(graphql_1.GraphQLID),
                },
                ...getFieldsFromEntities_1.default([keyName], data[keyName], false),
                ...getRangeFiltersFromEntities_1.default([keyName], data[keyName]),
            },
        };
        graphQLInputObjectTypeConfig = (_d = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.on) === null || _a === void 0 ? void 0 : _a.getFilterTypesFromData) === null || _b === void 0 ? void 0 : _b.call(_a, {
            keyName,
            typeKey,
            graphQLInputObjectTypeConfig,
        }, data)) === null || _c === void 0 ? void 0 : _c.graphQLInputObjectTypeConfig) !== null && _d !== void 0 ? _d : graphQLInputObjectTypeConfig;
        types[typeKey] = new graphql_1.GraphQLInputObjectType(graphQLInputObjectTypeConfig);
        return types;
    }, {});
}
exports.default = getFilterTypesFromData;
//# sourceMappingURL=getFilterTypesFromData.js.map