"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sortFieldCore(a, b, sortField, direction) {
    if (a[sortField] > b[sortField]) {
        return direction;
    }
    if (a[sortField] < b[sortField]) {
        return -1 * direction;
    }
    return 0;
}
exports.default = sortFieldCore;
//# sourceMappingURL=sortFieldCore.js.map