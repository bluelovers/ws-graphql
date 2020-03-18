"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRelationshipField = void 0;
function isRelationshipField(fieldName) {
    return fieldName !== '_id' && fieldName.endsWith('_id');
}
exports.isRelationshipField = isRelationshipField;
//# sourceMappingURL=relationships.js.map