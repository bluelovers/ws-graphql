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
//# sourceMappingURL=all.js.map