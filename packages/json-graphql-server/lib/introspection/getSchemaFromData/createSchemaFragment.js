"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSchemaFragment(type, fieldNames) {
    if (fieldNames.length) {
        return `\nfragment ${type}Fragment on ${type} {
	${fieldNames.join("\n\t")}
}`;
    }
    return '';
}
exports.default = createSchemaFragment;
//# sourceMappingURL=createSchemaFragment.js.map