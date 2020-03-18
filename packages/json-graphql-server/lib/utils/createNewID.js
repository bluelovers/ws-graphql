"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createNewID(_, entity, entityData) {
    const newId = entityData.length > 0 ? entityData[entityData.length - 1].id + 1 : 0;
    return newId;
}
exports.default = createNewID;
//# sourceMappingURL=createNewID.js.map