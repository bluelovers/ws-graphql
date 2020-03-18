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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydE9yZGVyRGlyZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29ydE9yZGVyRGlyZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLElBQWtCLGtCQUlqQjtBQUpELFdBQWtCLGtCQUFrQjtJQUVuQyx5REFBTyxDQUFBO0lBQ1AsNERBQVMsQ0FBQTtBQUNWLENBQUMsRUFKaUIsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFJbkM7QUFFRCxTQUF3QixrQkFBa0IsQ0FBQyxTQUFzRTtJQUVoSCxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLFNBQVMsS0FBSyxRQUFRLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQWdCLElBQUksS0FBSyxFQUNwSTtRQUNDLG1CQUE2QjtLQUM3QjtJQUVELHFCQUE4QjtBQUMvQixDQUFDO0FBUkQscUNBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU29ydE9yZGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtT3JkZXJEaXJlY3Rpb25cbntcblx0QVNDID0gMSxcblx0REVTQyA9IC0xLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0T3JkZXJEaXJlY3Rpb24oc29ydE9yZGVyOiBJU29ydE9yZGVyIHwgc3RyaW5nIHwgYm9vbGVhbiB8IEVudW1PcmRlckRpcmVjdGlvbiB8IDEgfCAtMSk6IEVudW1PcmRlckRpcmVjdGlvbi5BU0MgfCBFbnVtT3JkZXJEaXJlY3Rpb24uREVTQ1xue1xuXHRpZiAoc29ydE9yZGVyID09PSB0cnVlIHx8ICh0eXBlb2Ygc29ydE9yZGVyID09PSAnbnVtYmVyJyAmJiBzb3J0T3JkZXIgPiAwKSB8fCBTdHJpbmcoc29ydE9yZGVyKS50b0xvd2VyQ2FzZSgpIGFzIElTb3J0T3JkZXIgPT0gJ2FzYycpXG5cdHtcblx0XHRyZXR1cm4gRW51bU9yZGVyRGlyZWN0aW9uLkFTQ1xuXHR9XG5cblx0cmV0dXJuIEVudW1PcmRlckRpcmVjdGlvbi5ERVNDXG59XG4iXX0=