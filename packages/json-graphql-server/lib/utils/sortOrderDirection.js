"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumOrderDirection = void 0;
var EnumOrderDirection;
(function (EnumOrderDirection) {
    EnumOrderDirection[EnumOrderDirection["ASC"] = 1] = "ASC";
    EnumOrderDirection[EnumOrderDirection["DESC"] = -1] = "DESC";
})(EnumOrderDirection = exports.EnumOrderDirection || (exports.EnumOrderDirection = {}));
function sortOrderDirection(sortOrder) {
    if (sortOrder === true || (typeof sortOrder === 'number' && sortOrder > 0) || String(sortOrder).toLowerCase() == 'asc') {
        return 1 /* ASC */;
    }
    return -1 /* DESC */;
}
exports.default = sortOrderDirection;
//# sourceMappingURL=sortOrderDirection.js.map