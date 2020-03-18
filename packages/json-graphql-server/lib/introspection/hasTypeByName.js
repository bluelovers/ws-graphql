"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilterTypesFromData_1 = __importDefault(require("./getFilterTypesFromData"));
function hasTypeByName(name, data) {
    return Object
        .values(getFilterTypesFromData_1.default(data))
        .some((type) => {
        return Object.values(type.getFields())
            .some((field) => {
            // @ts-ignore
            return (field.type.name === name);
        });
    });
}
exports.default = hasTypeByName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzVHlwZUJ5TmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc1R5cGVCeU5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRkFBOEQ7QUFHOUQsU0FBd0IsYUFBYSxDQUFDLElBQVksRUFBRSxJQUFxQjtJQUV4RSxPQUFPLE1BQU07U0FDWCxNQUFNLENBQUMsZ0NBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFFZCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBRWYsYUFBYTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQWJELGdDQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEZpbHRlclR5cGVzRnJvbURhdGEgZnJvbSAnLi9nZXRGaWx0ZXJUeXBlc0Zyb21EYXRhJztcbmltcG9ydCB7IElTb3VyY2VEYXRhUm9vdCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzVHlwZUJ5TmFtZShuYW1lOiBzdHJpbmcsIGRhdGE6IElTb3VyY2VEYXRhUm9vdCk6IGJvb2xlYW5cbntcblx0cmV0dXJuIE9iamVjdFxuXHRcdC52YWx1ZXMoZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YShkYXRhKSlcblx0XHQuc29tZSgodHlwZSkgPT5cblx0XHR7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyh0eXBlLmdldEZpZWxkcygpKVxuXHRcdFx0XHQuc29tZSgoZmllbGQpID0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0cmV0dXJuIChmaWVsZC50eXBlLm5hbWUgPT09IG5hbWUpO1xuXHRcdFx0XHR9KTtcblx0XHR9KVxufVxuIl19