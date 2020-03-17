"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyFilters_1 = __importDefault(require("./applyFilters"));
function default_1(entityData) {
    return function (_, { filter = {} }) {
        let items = applyFilters_1.default(entityData, filter);
        return { count: items.length };
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ldGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrRUFBMEM7QUFHMUMsbUJBQTRFLFVBQWU7SUFFMUYsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE1BQU0sR0FBRyxFQUFhLEVBQUU7UUFFN0MsSUFBSSxLQUFLLEdBQUcsc0JBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFN0MsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQyxDQUFBO0FBQ0YsQ0FBQztBQVJELDRCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcGx5RmlsdGVycyBmcm9tICcuL2FwcGx5RmlsdGVycyc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvd0Jhc2UsIElGaWx0ZXIgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIDxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlID0gSVNvdXJjZURhdGFSb3dCYXNlPihlbnRpdHlEYXRhOiBUW10pXG57XG5cdHJldHVybiBmdW5jdGlvbiAoXywgeyBmaWx0ZXIgPSB7fSBhcyBJRmlsdGVyIH0pXG5cdHtcblx0XHRsZXQgaXRlbXMgPSBhcHBseUZpbHRlcnMoZW50aXR5RGF0YSwgZmlsdGVyKTtcblxuXHRcdHJldHVybiB7IGNvdW50OiBpdGVtcy5sZW5ndGggfTtcblx0fVxufVxuIl19