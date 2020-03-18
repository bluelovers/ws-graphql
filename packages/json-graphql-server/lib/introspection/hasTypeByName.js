"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilterTypesFromData_1 = __importDefault(require("./getFilterTypesFromData"));
function hasTypeByName(name, data, options = {}) {
    return Object
        .values(getFilterTypesFromData_1.default(data, options))
        .some((type) => {
        return Object.values(type.getFields())
            .some((field) => {
            // @ts-ignore
            return (field.type.name === name);
        });
    });
}
exports.default = hasTypeByName;
//# sourceMappingURL=hasTypeByName.js.map