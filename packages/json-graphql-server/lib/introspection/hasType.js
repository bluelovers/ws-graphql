"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilterTypesFromData_1 = __importDefault(require("./getFilterTypesFromData"));
function hasType(name, data) {
    return Object.values(getFilterTypesFromData_1.default(data))
        .reduce((hasJSON, type) => {
        if (hasJSON)
            return true;
        return Object.values(type.getFields())
            .reduce((hasJSONField, field) => {
            if (hasJSONField)
                return true;
            // @ts-ignore
            return field.type.name == name;
        }, false);
    }, false);
}
exports.default = hasType;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc1R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRkFBOEQ7QUFFOUQsU0FBd0IsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFJO0lBRWpELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQ0FBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRCxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBUyxFQUFFLEVBQUU7UUFFOUIsSUFBSSxPQUFPO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFekIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFFL0IsSUFBSSxZQUFZO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzlCLGFBQWE7WUFDYixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNoQyxDQUFDLEVBQUUsS0FBSyxDQUFRLENBQUM7SUFFbkIsQ0FBQyxFQUFFLEtBQUssQ0FBUSxDQUFBO0FBQ2xCLENBQUM7QUFoQkQsMEJBZ0JDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRGaWx0ZXJUeXBlc0Zyb21EYXRhIGZyb20gJy4vZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc1R5cGUobmFtZTogc3RyaW5nLCBkYXRhKTogYm9vbGVhblxue1xuXHRyZXR1cm4gT2JqZWN0LnZhbHVlcyhnZXRGaWx0ZXJUeXBlc0Zyb21EYXRhKGRhdGEpKVxuXHRcdC5yZWR1Y2UoKGhhc0pTT04sIHR5cGU6IGFueSkgPT5cblx0XHR7XG5cdFx0XHRpZiAoaGFzSlNPTikgcmV0dXJuIHRydWU7XG5cblx0XHRcdHJldHVybiBPYmplY3QudmFsdWVzKHR5cGUuZ2V0RmllbGRzKCkpXG5cdFx0XHRcdC5yZWR1Y2UoKGhhc0pTT05GaWVsZCwgZmllbGQpID0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaGFzSlNPTkZpZWxkKSByZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdFx0cmV0dXJuIGZpZWxkLnR5cGUubmFtZSA9PSBuYW1lO1xuXHRcdFx0XHR9LCBmYWxzZSkgYXMgYW55O1xuXG5cdFx0fSwgZmFsc2UpIGFzIGFueVxufTtcbiJdfQ==