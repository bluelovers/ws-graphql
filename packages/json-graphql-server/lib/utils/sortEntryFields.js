"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sortOrderDirection_1 = __importDefault(require("./sortOrderDirection"));
function sortEntryFields({ items, sortField, sortFields, sortOrder, }) {
    if (sortField != null || (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length)) {
        if (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length) {
            if (sortFields.length === 1 && sortField == null) {
                sortField = sortFields[0];
                sortFields = null;
            }
            else if (sortField != null) {
                sortFields.unshift(sortField);
                sortField = null;
            }
        }
        else {
            sortFields = null;
        }
        const direction = sortOrderDirection_1.default(sortOrder);
        if (sortField != null) {
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
        else if (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length) {
            items = items.sort((a, b) => {
                for (const sortField of sortFields) {
                    if (a[sortField] > b[sortField]) {
                        return direction;
                    }
                    if (a[sortField] < b[sortField]) {
                        return -1 * direction;
                    }
                }
                return 0;
            });
        }
    }
    return items;
}
exports.default = sortEntryFields;
//# sourceMappingURL=sortEntryFields.js.map