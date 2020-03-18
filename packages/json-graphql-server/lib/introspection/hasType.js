"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilterTypesFromData_1 = __importDefault(require("./getFilterTypesFromData"));
function hasType(scalarType, data) {
    return Object
        .values(getFilterTypesFromData_1.default(data))
        .some((type) => {
        return Object.values(type.getFields())
            .some((field) => {
            return (field.type == scalarType);
        });
    });
}
exports.default = hasType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc1R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRkFBOEQ7QUFJOUQsU0FBd0IsT0FBTyxDQUFDLFVBQTZCLEVBQUUsSUFBcUI7SUFFbkYsT0FBTyxNQUFNO1NBQ1gsTUFBTSxDQUFDLGdDQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBRWQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUVmLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDO0FBWkQsMEJBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RmlsdGVyVHlwZXNGcm9tRGF0YSBmcm9tICcuL2dldEZpbHRlclR5cGVzRnJvbURhdGEnO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb290IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFzVHlwZShzY2FsYXJUeXBlOiBHcmFwaFFMU2NhbGFyVHlwZSwgZGF0YTogSVNvdXJjZURhdGFSb290KTogYm9vbGVhblxue1xuXHRyZXR1cm4gT2JqZWN0XG5cdFx0LnZhbHVlcyhnZXRGaWx0ZXJUeXBlc0Zyb21EYXRhKGRhdGEpKVxuXHRcdC5zb21lKCh0eXBlKSA9PlxuXHRcdHtcblx0XHRcdHJldHVybiBPYmplY3QudmFsdWVzKHR5cGUuZ2V0RmllbGRzKCkpXG5cdFx0XHRcdC5zb21lKChmaWVsZCkgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiAoZmllbGQudHlwZSA9PSBzY2FsYXJUeXBlKTtcblx0XHRcdFx0fSk7XG5cdFx0fSlcbn1cbiJdfQ==