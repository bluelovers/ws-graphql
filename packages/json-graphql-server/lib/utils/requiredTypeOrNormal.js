"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredTypeOrNormal = void 0;
const graphql_1 = require("graphql");
function requiredTypeOrNormal(type, isRequired) {
    return isRequired ? new graphql_1.GraphQLNonNull(type) : type;
}
exports.requiredTypeOrNormal = requiredTypeOrNormal;
exports.default = requiredTypeOrNormal;
//# sourceMappingURL=requiredTypeOrNormal.js.map