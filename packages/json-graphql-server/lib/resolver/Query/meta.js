"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyFilters_1 = __importDefault(require("./applyFilters"));
exports.default = entityData => (_, { filter = {} }) => {
    let items = applyFilters_1.default(entityData, filter);
    return { count: items.length };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ldGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrRUFBMEM7QUFFMUMsa0JBQWUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBRW5ELElBQUksS0FBSyxHQUFHLHNCQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHBseUZpbHRlcnMgZnJvbSAnLi9hcHBseUZpbHRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBlbnRpdHlEYXRhID0+IChfLCB7IGZpbHRlciA9IHt9IH0pID0+XG57XG5cdGxldCBpdGVtcyA9IGFwcGx5RmlsdGVycyhlbnRpdHlEYXRhLCBmaWx0ZXIpO1xuXG5cdHJldHVybiB7IGNvdW50OiBpdGVtcy5sZW5ndGggfTtcbn07XG4iXX0=