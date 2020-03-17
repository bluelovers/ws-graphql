"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyFilters_1 = __importDefault(require("./applyFilters"));
function default_1(entityData = []) {
    return function (_, { sortField, sortOrder = 'asc', page, perPage = 25, filter = {} }) {
        let items = [...entityData];
        if (sortField) {
            const direction = sortOrder.toLowerCase() == 'asc' ? 1 : -1;
            items = items.sort((a, b) => {
                if (a[sortField] > b[sortField]) {
                    return direction;
                }
                if (a[sortField] < b[sortField]) {
                    return -1 * direction;
                }
                return 0;
            });
        }
        items = applyFilters_1.default(items, filter);
        if (page !== undefined && perPage) {
            items = items.slice(page * perPage, page * perPage + perPage);
        }
        return items;
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBRzFDLG1CQUE0RSxhQUFrQixFQUFFO0lBRS9GLE9BQU8sVUFDTixDQUFDLEVBQ0QsRUFDQyxTQUFTLEVBQ1QsU0FBUyxHQUFHLEtBQUssRUFDakIsSUFBSSxFQUNKLE9BQU8sR0FBRyxFQUFFLEVBQ1osTUFBTSxHQUFHLEVBQUUsRUFDQztRQUdiLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUU1QixJQUFJLFNBQVMsRUFDYjtZQUNDLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQWdCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUUzQixJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQy9CO29CQUNDLE9BQU8sU0FBUyxDQUFDO2lCQUNqQjtnQkFDRCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQy9CO29CQUNDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2lCQUN0QjtnQkFDRCxPQUFPLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDO1NBQ0g7UUFFRCxLQUFLLEdBQUcsc0JBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFcEMsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLE9BQU8sRUFDakM7WUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNILENBQUM7QUF6Q0QsNEJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcGx5RmlsdGVycyBmcm9tICcuL2FwcGx5RmlsdGVycyc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvd0Jhc2UsIElRdWVyeUJhc2UsIElTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIDxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlID0gSVNvdXJjZURhdGFSb3dCYXNlPihlbnRpdHlEYXRhOiBUW10gPSBbXSlcbntcblx0cmV0dXJuIGZ1bmN0aW9uIChcblx0XHRfLFxuXHRcdHtcblx0XHRcdHNvcnRGaWVsZCxcblx0XHRcdHNvcnRPcmRlciA9ICdhc2MnLFxuXHRcdFx0cGFnZSxcblx0XHRcdHBlclBhZ2UgPSAyNSxcblx0XHRcdGZpbHRlciA9IHt9XG5cdFx0fTogSVF1ZXJ5QmFzZSxcblx0KVxuXHR7XG5cdFx0bGV0IGl0ZW1zID0gWy4uLmVudGl0eURhdGFdO1xuXG5cdFx0aWYgKHNvcnRGaWVsZClcblx0XHR7XG5cdFx0XHRjb25zdCBkaXJlY3Rpb24gPSBzb3J0T3JkZXIudG9Mb3dlckNhc2UoKSBhcyBJU29ydE9yZGVyID09ICdhc2MnID8gMSA6IC0xO1xuXHRcdFx0aXRlbXMgPSBpdGVtcy5zb3J0KChhLCBiKSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cmV0dXJuIGRpcmVjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYVtzb3J0RmllbGRdIDwgYltzb3J0RmllbGRdKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cmV0dXJuIC0xICogZGlyZWN0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aXRlbXMgPSBhcHBseUZpbHRlcnMoaXRlbXMsIGZpbHRlcik7XG5cblx0XHRpZiAocGFnZSAhPT0gdW5kZWZpbmVkICYmIHBlclBhZ2UpXG5cdFx0e1xuXHRcdFx0aXRlbXMgPSBpdGVtcy5zbGljZShwYWdlICogcGVyUGFnZSwgcGFnZSAqIHBlclBhZ2UgKyBwZXJQYWdlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXRlbXM7XG5cdH07XG59XG4iXX0=