"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findEntityIndex_1 = __importDefault(require("../../utils/findEntityIndex"));
function default_1(entityData = [], options = {}) {
    return function (_, params) {
        let updatedEntity = undefined;
        if (params.id != null) {
            const indexOfEntity = findEntityIndex_1.default(params.id, entityData);
            if (indexOfEntity !== -1) {
                entityData[indexOfEntity] = Object.assign({}, entityData[indexOfEntity], params);
                // @ts-ignore
                updatedEntity = entityData[indexOfEntity];
            }
        }
        return updatedEntity;
    };
}
exports.default = default_1;
//# sourceMappingURL=update.js.map