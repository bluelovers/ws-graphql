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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydE9yZGVyRGlyZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29ydE9yZGVyRGlyZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLElBQWtCLGtCQUlqQjtBQUpELFdBQWtCLGtCQUFrQjtJQUVuQyx5REFBTyxDQUFBO0lBQ1AsNERBQVMsQ0FBQTtBQUNWLENBQUMsRUFKaUIsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFJbkM7QUFJRCxTQUF3QixrQkFBa0IsQ0FBQyxTQUE4RDtJQUV4RyxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLFNBQVMsS0FBSyxRQUFRLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQWdCLElBQUksS0FBSyxFQUNwSTtRQUNDLG1CQUE2QjtLQUM3QjtJQUVELHFCQUE4QjtBQUMvQixDQUFDO0FBUkQscUNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU29ydE9yZGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtT3JkZXJEaXJlY3Rpb25cbntcblx0QVNDID0gMSxcblx0REVTQyA9IC0xLFxufVxuXG5leHBvcnQgdHlwZSBJU29ydE9yZGVyRGlyZWN0aW9uID0gRW51bU9yZGVyRGlyZWN0aW9uLkFTQyB8IEVudW1PcmRlckRpcmVjdGlvbi5ERVNDIHwgMSB8IC0xO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0T3JkZXJEaXJlY3Rpb24oc29ydE9yZGVyOiBJU29ydE9yZGVyIHwgc3RyaW5nIHwgYm9vbGVhbiB8IElTb3J0T3JkZXJEaXJlY3Rpb24pOiBJU29ydE9yZGVyRGlyZWN0aW9uXG57XG5cdGlmIChzb3J0T3JkZXIgPT09IHRydWUgfHwgKHR5cGVvZiBzb3J0T3JkZXIgPT09ICdudW1iZXInICYmIHNvcnRPcmRlciA+IDApIHx8IFN0cmluZyhzb3J0T3JkZXIpLnRvTG93ZXJDYXNlKCkgYXMgSVNvcnRPcmRlciA9PSAnYXNjJylcblx0e1xuXHRcdHJldHVybiBFbnVtT3JkZXJEaXJlY3Rpb24uQVNDXG5cdH1cblxuXHRyZXR1cm4gRW51bU9yZGVyRGlyZWN0aW9uLkRFU0Ncbn1cbiJdfQ==