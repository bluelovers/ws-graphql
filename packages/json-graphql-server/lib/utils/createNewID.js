"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 新的 newID 值
 */
function createNewID(_, entity, entityData, runtime) {
    const newID = entityData.length > 0 ? entityData[entityData.length - 1].id + 1 : 0;
    return {
        newID,
    };
}
exports.default = createNewID;
//# sourceMappingURL=createNewID.js.map