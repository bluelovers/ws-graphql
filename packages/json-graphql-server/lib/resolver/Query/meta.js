"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyFilters_1 = __importDefault(require("./applyFilters"));
function default_1(entityData) {
    return function (_, { filter = {} }) {
        let items = applyFilters_1.default(entityData, filter);
        return { count: items.length };
    };
}
exports.default = default_1;
//# sourceMappingURL=meta.js.map