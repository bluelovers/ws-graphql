"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createNewID_1 = __importDefault(require("../../utils/createNewID"));
function default_1(entityData = [], options = {}) {
    var _a, _b;
    const createNewIDFn = (_b = (_a = options === null || options === void 0 ? void 0 : options.util) === null || _a === void 0 ? void 0 : _a.createNewID) !== null && _b !== void 0 ? _b : createNewID_1.default;
    return function (_, entity, context, info) {
        var _a;
        const id = (_a = createNewIDFn(_, entity, entityData, {
            context,
            info,
        })) === null || _a === void 0 ? void 0 : _a.newID;
        if (id == null) {
            throw new TypeError(`createNewID().newId should not null`);
        }
        const newEntity = Object.assign({}, entity, { id });
        entityData.push(newEntity);
        return newEntity;
    };
}
exports.default = default_1;
//# sourceMappingURL=create.js.map