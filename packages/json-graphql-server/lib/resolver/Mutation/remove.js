"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findEntityIndex_1 = __importDefault(require("../../utils/findEntityIndex"));
function default_1(entityData = []) {
    return function (_, { id }) {
        let removedEntity = undefined;
        if (id != null) {
            const indexOfEntity = findEntityIndex_1.default(id, entityData);
            if (indexOfEntity !== -1) {
                removedEntity = entityData.splice(indexOfEntity, 1)[0];
            }
        }
        return removedEntity;
    };
}
exports.default = default_1;
//# sourceMappingURL=remove.js.map