"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function single(entityData = [], options = {}) {
    return function (_, { id }) {
        if (id == null) {
            return;
        }
        return entityData.find(d => d.id == id);
    };
}
exports.default = single;
//# sourceMappingURL=single.js.map