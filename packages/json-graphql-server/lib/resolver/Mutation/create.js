"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createNewID_1 = __importDefault(require("../../utils/createNewID"));
function default_1(entityData = []) {
    return function (_, entity) {
        const id = createNewID_1.default(_, entity, entityData);
        const newEntity = Object.assign({}, entity, { id });
        entityData.push(newEntity);
        return newEntity;
    };
}
exports.default = default_1;
//# sourceMappingURL=create.js.map