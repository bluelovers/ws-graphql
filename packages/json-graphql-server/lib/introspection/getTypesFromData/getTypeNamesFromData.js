"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nameConverter_1 = require("../../utils/nameConverter");
function getTypeNamesFromData(data) {
    return Object.keys(data).map(nameConverter_1.getTypeFromKey);
}
exports.default = getTypeNamesFromData;
//# sourceMappingURL=getTypeNamesFromData.js.map