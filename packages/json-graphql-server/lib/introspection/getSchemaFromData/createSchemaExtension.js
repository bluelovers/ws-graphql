"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relationships_1 = require("../../utils/relationships");
const nameConverter_1 = require("../../utils/nameConverter");
function createSchemaExtension({ data, types, typesByName, }) {
    /**
     * extend schema to add relationship fields
     *
     * @example
     * If the `post` key contains a 'user_id' field, then
     * add one-to-many and many-to-one type extensions:
     *     extend type Post { User: User }
     *     extend type User { Posts: [Post] }
     */
    const schemaExtension = Object.values(typesByName)
        .reduce((ext, type) => {
        //const fieldNames: string[] = [];
        const rel = nameConverter_1.getRelatedKeyFromType(type);
        for (const fieldName in type.getFields()) {
            if (relationships_1.isRelationshipField(fieldName)) {
                const relType = nameConverter_1.getRelatedTypeUnsafe(fieldName);
                ext += `
extend type ${type} { ${relType}: ${relType} }
extend type ${relType} { ${rel}: [${type}] }`;
            }
            else {
                //fieldNames.push(fieldName)
            }
        }
        /*
        if (fieldNames.length)
        {
            // @FIXME: not work
            ext += createSchemaFragment(type, fieldNames);
        }
         */
        return ext;
    }, '');
    return schemaExtension;
}
exports.default = createSchemaExtension;
//# sourceMappingURL=createSchemaExtension.js.map