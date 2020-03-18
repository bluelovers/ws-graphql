"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTypeFromValues_1 = __importDefault(require("./getTypeFromValues"));
const getValuesFromEntities_1 = __importDefault(require("./getValuesFromEntities"));
/**
 * Get a list of GraphQL fields from a list of entities
 *
 * @example
 * const entities = [
 *     {
 *         "id": 1,
 *         "title": "Lorem Ipsum",
 *         "views": 254,
 *         "user_id": 123,
 *     },
 *     {
 *         "id": 2,
 *         "title": "Sic Dolor amet",
 *         "user_id": 456,
 *     },
 * ];
 * const types = getFieldsFromEntities(entities);
 * // {
 * //    id: { type: new GraphQLNonNull(GraphQLString) },
 * //    title: { type: new GraphQLNonNull(GraphQLString) },
 * //    views: { type: GraphQLInt },
 * //    user_id: { type: new GraphQLNonNull(GraphQLString) },
 * // };
 */
function getFieldsFromEntities(keyNames, entities, checkRequired = true) {
    const fieldValues = getValuesFromEntities_1.default(entities);
    const nbValues = entities.length;
    return Object.keys(fieldValues)
        .reduce((fields, fieldName) => {
        fields[fieldName] = {
            type: getTypeFromValues_1.default(fieldName, fieldValues[fieldName], checkRequired
                ? fieldValues[fieldName].length === nbValues
                : false),
        };
        return fields;
    }, {});
}
exports.default = getFieldsFromEntities;
;
//# sourceMappingURL=getFieldsFromEntities.js.map