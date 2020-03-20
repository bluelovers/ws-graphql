"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyFilters_1 = __importDefault(require("./applyFilters"));
const sortEntryFields_1 = __importDefault(require("../../utils/sortEntryFields"));
const sliceArrayByPage_1 = __importDefault(require("../../utils/sliceArrayByPage"));
function all(entityData = [], options = {}) {
    return function (_, { sortField, sortFields, sortOrder = 'asc', page, perPage = 25, filter = {} }) {
        let items = [...entityData];
        if (sortField != null || (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length)) {
            items = sortEntryFields_1.default({
                items,
                sortField,
                sortFields,
                sortOrder,
            });
        }
        items = applyFilters_1.default(items, filter);
        if (page !== undefined && page !== null && perPage) {
            items = sliceArrayByPage_1.default(items, page, perPage);
        }
        return items;
    };
}
exports.default = all;
//# sourceMappingURL=all.js.map