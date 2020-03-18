"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeNamesFromData = void 0;
const graphql_1 = require("graphql");
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
        name: nameConverter_1.getTypeFromKey(typeName),
        fields: getFieldsFromEntities_1.default(data[typeName]),
    }))
        .map(typeObject => new graphql_1.GraphQLObjectType(typeObject));
}
exports.default = getTypesFromData;
function getTypeNamesFromData(data) {
    return Object.keys(data).map(nameConverter_1.getTypeFromKey);
}
exports.getTypeNamesFromData = getTypeNamesFromData;
//# sourceMappingURL=getTypesFromData.js.map