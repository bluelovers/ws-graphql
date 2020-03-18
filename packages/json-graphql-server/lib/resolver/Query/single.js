"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(entityData = []) {
    return function (_, { id }) {
        if (id == null) {
            return;
        }
        return entityData.find(d => d.id == id);
    };
}
exports.default = default_1;
//# sourceMappingURL=single.js.map