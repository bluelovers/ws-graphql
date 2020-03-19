"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getFieldsFromEntities_1 = __importDefault(require("./getTypesFromData/getFieldsFromEntities"));
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
function getTypesFromData(data, options = {}) {
    return Object.keys(data)
        .map(keyName => {
        var _a, _b, _c, _d;
        let typeObject = ({
            name: nameConverter_1.getTypeFromKey(keyName),
            fields: getFieldsFromEntities_1.default([keyName], data[keyName]),
        });
        typeObject = (_d = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.on) === null || _a === void 0 ? void 0 : _a.getTypesFromData) === null || _b === void 0 ? void 0 : _b.call(_a, {
            keyName,
            typeObject: typeObject,
        }, data)) === null || _c === void 0 ? void 0 : _c.typeObject) !== null && _d !== void 0 ? _d : typeObject;
        return new graphql_1.GraphQLObjectType(typeObject);
    });
}
exports.default = getTypesFromData;
//# sourceMappingURL=getTypesFromData.js.map