"use strict";
/**
 * Created by user on 2020/3/20.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function sliceArrayByPage(items, page, perPage) {
    const idx = page * perPage;
    return items.slice(idx, idx + perPage);
}
exports.default = sliceArrayByPage;
//# sourceMappingURL=sliceArrayByPage.js.map