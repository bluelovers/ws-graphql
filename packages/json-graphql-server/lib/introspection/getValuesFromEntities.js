"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValuesFromEntities(entities) {
    return entities.reduce((values, entity) => {
        Object.keys(entity).forEach(fieldName => {
            if (!values[fieldName]) {
                values[fieldName] = [];
            }
            if (entity[fieldName] != null) {
                values[fieldName].push(entity[fieldName]);
            }
        });
        return values;
    }, {});
}
exports.default = getValuesFromEntities;
//# sourceMappingURL=getValuesFromEntities.js.map