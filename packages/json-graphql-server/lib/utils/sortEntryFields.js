"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sortOrderDirection_1 = __importDefault(require("./sortOrderDirection"));
const array_hyper_unique_1 = require("array-hyper-unique");
const sortFieldCore_1 = __importDefault(require("./sortFieldCore"));
function sortEntryFields({ items, sortField, sortFields, sortOrder, }) {
    if (sortField != null || (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length)) {
        if (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length) {
            sortFields = [...sortFields];
            if (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length) {
                array_hyper_unique_1.lazy_unique_overwrite(sortFields);
            }
            if (sortFields.length === 1 && sortField == null) {
                sortField = sortFields[0];
                sortFields = null;
            }
            else if (sortField != null) {
                sortFields.unshift(sortField);
                sortField = null;
            }
            if (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length) {
                array_hyper_unique_1.lazy_unique_overwrite(sortFields);
            }
        }
        else {
            sortFields = null;
        }
        const direction = sortOrderDirection_1.default(sortOrder);
        if (sortField != null) {
            items = items.sort((a, b) => {
                return sortFieldCore_1.default(a, b, sortField, direction);
            });
        }
        else if (sortFields === null || sortFields === void 0 ? void 0 : sortFields.length) {
            items = items.sort((a, b) => {
                for (const sortField of sortFields) {
                    let c = sortFieldCore_1.default(a, b, sortField, direction);
                    if (c) {
                        return c;
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