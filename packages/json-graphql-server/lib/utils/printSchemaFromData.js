"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const getSchemaFromData_1 = __importDefault(require("../introspection/getSchemaFromData"));
function default_1(data) {
    return graphql_1.printSchema(getSchemaFromData_1.default(data));
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRTY2hlbWFGcm9tRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByaW50U2NoZW1hRnJvbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBc0M7QUFDdEMsMkZBQW1FO0FBR25FLG1CQUF5QixJQUFxQjtJQUU3QyxPQUFPLHFCQUFXLENBQUMsMkJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUM1QyxDQUFDO0FBSEQsNEJBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmludFNjaGVtYSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdldFNjaGVtYUZyb21EYXRhIGZyb20gJy4uL2ludHJvc3BlY3Rpb24vZ2V0U2NoZW1hRnJvbURhdGEnO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb290IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YTogSVNvdXJjZURhdGFSb290KVxue1xuXHRyZXR1cm4gcHJpbnRTY2hlbWEoZ2V0U2NoZW1hRnJvbURhdGEoZGF0YSkpXG59XG4iXX0=