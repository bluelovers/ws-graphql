"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRangeFiltersFromEntities = void 0;
const getValuesFromEntities_1 = __importDefault(require("../getTypesFromData/getValuesFromEntities"));
const getTypeFromValues_1 = __importDefault(require("../getTypesFromData/getTypeFromValues"));
const graphql_1 = require("graphql");
const DateType_1 = __importDefault(require("../type/DateType"));
/**
 * 對數字類型的屬性增加 _lt _lte _gt _gte
 */
function getRangeFiltersFromEntities(keyNames, entities) {
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
exports.default = getRangeFiltersFromEntities;
//# sourceMappingURL=getRangeFiltersFromEntities.js.map