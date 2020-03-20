"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFieldNameIsID = exports.isRelationshipField = void 0;
function isRelationshipField(fieldName) {
    return fieldName !== '_id' && fieldName.endsWith('_id');
}
exports.isRelationshipField = isRelationshipField;
function checkFieldNameIsID(fieldName) {
    return (fieldName === 'id' || isRelationshipField(fieldName));
}
exports.checkFieldNameIsID = checkFieldNameIsID;
//# sourceMappingURL=relationships.js.map