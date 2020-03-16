"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyFilters_1 = __importDefault(require("./applyFilters"));
exports.default = (entityData = []) => (_, { sortField, sortOrder = 'asc', page, perPage = 25, filter = {} }) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBRTFDLGtCQUFlLENBQUMsVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDbkMsQ0FBQyxFQUNELEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBd0QsRUFDdEgsRUFBRTtJQUVILElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUU1QixJQUFJLFNBQVMsRUFDYjtRQUNDLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFM0IsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUMvQjtnQkFDQyxPQUFPLFNBQVMsQ0FBQzthQUNqQjtZQUNELElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFDL0I7Z0JBQ0MsT0FBTyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDdEI7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxLQUFLLEdBQUcsc0JBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFcEMsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLE9BQU8sRUFDakM7UUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7S0FDOUQ7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBseUZpbHRlcnMgZnJvbSAnLi9hcHBseUZpbHRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoZW50aXR5RGF0YSA9IFtdKSA9PiAoXG5cdF8sXG5cdHsgc29ydEZpZWxkLCBzb3J0T3JkZXIgPSAnYXNjJywgcGFnZSwgcGVyUGFnZSA9IDI1LCBmaWx0ZXIgPSB7fSB9OiB7IHNvcnRGaWVsZD8sIHNvcnRPcmRlcj8sIHBhZ2U/LCBwZXJQYWdlPywgZmlsdGVyPyB9LFxuKSA9Plxue1xuXHRsZXQgaXRlbXMgPSBbLi4uZW50aXR5RGF0YV07XG5cblx0aWYgKHNvcnRGaWVsZClcblx0e1xuXHRcdGNvbnN0IGRpcmVjdGlvbiA9IHNvcnRPcmRlci50b0xvd2VyQ2FzZSgpID09ICdhc2MnID8gMSA6IC0xO1xuXHRcdGl0ZW1zID0gaXRlbXMuc29ydCgoYSwgYikgPT5cblx0XHR7XG5cdFx0XHRpZiAoYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gZGlyZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIC0xICogZGlyZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSk7XG5cdH1cblxuXHRpdGVtcyA9IGFwcGx5RmlsdGVycyhpdGVtcywgZmlsdGVyKTtcblxuXHRpZiAocGFnZSAhPT0gdW5kZWZpbmVkICYmIHBlclBhZ2UpXG5cdHtcblx0XHRpdGVtcyA9IGl0ZW1zLnNsaWNlKHBhZ2UgKiBwZXJQYWdlLCBwYWdlICogcGVyUGFnZSArIHBlclBhZ2UpO1xuXHR9XG5cblx0cmV0dXJuIGl0ZW1zO1xufTtcbiJdfQ==