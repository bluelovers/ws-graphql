"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findEntityIndex(id, entityData) {
    const stringId = id.toString();
    return entityData.findIndex(e => e.id != null && e.id.toString() === stringId);
}
exports.default = findEntityIndex;
//# sourceMappingURL=findEntityIndex.js.map