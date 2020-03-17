"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyFilters_1 = __importDefault(require("./applyFilters"));
const sortOrderDirection_1 = __importDefault(require("../../utils/sortOrderDirection"));
function default_1(entityData = []) {
    return function (_, { sortField, sortOrder = 'asc', page, perPage = 25, filter = {} }) {
        let items = [...entityData];
        if (sortField) {
            const direction = sortOrderDirection_1.default(sortOrder);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQTBDO0FBRTFDLHdGQUFnRTtBQUVoRSxtQkFBNEUsYUFBa0IsRUFBRTtJQUUvRixPQUFPLFVBQ04sQ0FBQyxFQUNELEVBQ0MsU0FBUyxFQUNULFNBQVMsR0FBRyxLQUFLLEVBQ2pCLElBQUksRUFDSixPQUFPLEdBQUcsRUFBRSxFQUNaLE1BQU0sR0FBRyxFQUFFLEVBQ0M7UUFHYixJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFNUIsSUFBSSxTQUFTLEVBQ2I7WUFDQyxNQUFNLFNBQVMsR0FBRyw0QkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoRCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFM0IsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUMvQjtvQkFDQyxPQUFPLFNBQVMsQ0FBQztpQkFDakI7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUMvQjtvQkFDQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQztTQUNIO1FBRUQsS0FBSyxHQUFHLHNCQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxPQUFPLEVBQ2pDO1lBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRSxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1NBQzlEO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSCxDQUFDO0FBMUNELDRCQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBseUZpbHRlcnMgZnJvbSAnLi9hcHBseUZpbHRlcnMnO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb3dCYXNlLCBJUXVlcnlCYXNlLCBJU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHNvcnRPcmRlckRpcmVjdGlvbiBmcm9tICcuLi8uLi91dGlscy9zb3J0T3JkZXJEaXJlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiA8VCBleHRlbmRzIElTb3VyY2VEYXRhUm93QmFzZSA9IElTb3VyY2VEYXRhUm93QmFzZT4oZW50aXR5RGF0YTogVFtdID0gW10pXG57XG5cdHJldHVybiBmdW5jdGlvbiAoXG5cdFx0Xyxcblx0XHR7XG5cdFx0XHRzb3J0RmllbGQsXG5cdFx0XHRzb3J0T3JkZXIgPSAnYXNjJyxcblx0XHRcdHBhZ2UsXG5cdFx0XHRwZXJQYWdlID0gMjUsXG5cdFx0XHRmaWx0ZXIgPSB7fVxuXHRcdH06IElRdWVyeUJhc2UsXG5cdClcblx0e1xuXHRcdGxldCBpdGVtcyA9IFsuLi5lbnRpdHlEYXRhXTtcblxuXHRcdGlmIChzb3J0RmllbGQpXG5cdFx0e1xuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gc29ydE9yZGVyRGlyZWN0aW9uKHNvcnRPcmRlcik7XG5cblx0XHRcdGl0ZW1zID0gaXRlbXMuc29ydCgoYSwgYikgPT5cblx0XHRcdHtcblx0XHRcdFx0aWYgKGFbc29ydEZpZWxkXSA+IGJbc29ydEZpZWxkXSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiBkaXJlY3Rpb247XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFbc29ydEZpZWxkXSA8IGJbc29ydEZpZWxkXSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiAtMSAqIGRpcmVjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGl0ZW1zID0gYXBwbHlGaWx0ZXJzKGl0ZW1zLCBmaWx0ZXIpO1xuXG5cdFx0aWYgKHBhZ2UgIT09IHVuZGVmaW5lZCAmJiBwZXJQYWdlKVxuXHRcdHtcblx0XHRcdGl0ZW1zID0gaXRlbXMuc2xpY2UocGFnZSAqIHBlclBhZ2UsIHBhZ2UgKiBwZXJQYWdlICsgcGVyUGFnZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGl0ZW1zO1xuXHR9O1xufVxuIl19