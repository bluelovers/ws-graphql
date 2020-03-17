"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getSchemaFromData_1 = __importDefault(require("../introspection/getSchemaFromData"));
function default_1(data, options = {}) {
    return graphql_1.printSchema(getSchemaFromData_1.default(data, options));
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRTY2hlbWFGcm9tRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaW50U2NoZW1hRnJvbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBc0M7QUFDdEMsMkZBQW1FO0FBR25FLG1CQUF5QixJQUFxQixFQUFFLFVBQW9CLEVBQUU7SUFFckUsT0FBTyxxQkFBVyxDQUFDLDJCQUFpQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQ3JELENBQUM7QUFIRCw0QkFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaW50U2NoZW1hIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ2V0U2NoZW1hRnJvbURhdGEgZnJvbSAnLi4vaW50cm9zcGVjdGlvbi9nZXRTY2hlbWFGcm9tRGF0YSc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvb3QsIElPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YTogSVNvdXJjZURhdGFSb290LCBvcHRpb25zOiBJT3B0aW9ucyA9IHt9KVxue1xuXHRyZXR1cm4gcHJpbnRTY2hlbWEoZ2V0U2NoZW1hRnJvbURhdGEoZGF0YSwgb3B0aW9ucykpXG59XG4iXX0=