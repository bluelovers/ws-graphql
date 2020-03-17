"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilterTypesFromData_1 = __importDefault(require("./getFilterTypesFromData"));
function hasType(name, data) {
    return Object
        .values(getFilterTypesFromData_1.default(data))
        .some((type) => {
        return Object.values(type.getFields())
            .some((field) => {
            // @ts-ignore
            return (field.type.name == name);
        });
    });
}
exports.default = hasType;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc1R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRkFBOEQ7QUFHOUQsU0FBd0IsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFxQjtJQUVsRSxPQUFPLE1BQU07U0FDWCxNQUFNLENBQUMsZ0NBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFFZCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBRWYsYUFBYTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQWRELDBCQWNDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRGaWx0ZXJUeXBlc0Zyb21EYXRhIGZyb20gJy4vZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YSc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvb3QgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc1R5cGUobmFtZTogc3RyaW5nLCBkYXRhOiBJU291cmNlRGF0YVJvb3QpOiBib29sZWFuXG57XG5cdHJldHVybiBPYmplY3Rcblx0XHQudmFsdWVzKGdldEZpbHRlclR5cGVzRnJvbURhdGEoZGF0YSkpXG5cdFx0LnNvbWUoKHR5cGUpID0+XG5cdFx0e1xuXHRcdFx0cmV0dXJuIE9iamVjdC52YWx1ZXModHlwZS5nZXRGaWVsZHMoKSlcblx0XHRcdFx0LnNvbWUoKGZpZWxkKSA9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHRcdHJldHVybiAoZmllbGQudHlwZS5uYW1lID09IG5hbWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdH0pXG59O1xuIl19