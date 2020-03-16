"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relationships_1 = require("../../utils/relationships");
const nameConverter_1 = require("../../utils/nameConverter");
const inflection_1 = require("inflection");
function createSchemaExtension({ typesByName, }) {
    /**
     * extend schema to add relationship fields
     *
     * @example
     * If the `post` key contains a 'user_id' field, then
     * add one-to-many and many-to-one type extensions:
     *     extend type Post { User: User }
     *     extend type User { Posts: [Post] }
     */
    const schemaExtension = Object.values(typesByName).reduce((ext, type) => {
        Object.keys(type.getFields())
            .filter(relationships_1.isRelationshipField)
            .map(fieldName => {
            const relType = nameConverter_1.getRelatedType(fieldName);
            const rel = inflection_1.pluralize(type.toString());
            ext += `
extend type ${type} { ${relType}: ${relType} }
extend type ${relType} { ${rel}: [${type}] }`;
        });
        return ext;
    }, '');
    return schemaExtension;
}
exports.default = createSchemaExtension;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NoZW1hRXh0ZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlU2NoZW1hRXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQWdFO0FBQ2hFLDZEQUEyRDtBQUMzRCwyQ0FBdUM7QUFFdkMsU0FBd0IscUJBQXFCLENBQUMsRUFDN0MsV0FBVyxHQUNYO0lBRUE7Ozs7Ozs7O09BUUc7SUFDSCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsRUFBRTtRQUVwRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUMzQixNQUFNLENBQUMsbUNBQW1CLENBQUM7YUFDM0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBRWhCLE1BQU0sT0FBTyxHQUFHLDhCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsTUFBTSxHQUFHLEdBQUcsc0JBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN2QyxHQUFHLElBQUk7Y0FDRyxJQUFJLE1BQU0sT0FBTyxLQUFLLE9BQU87Y0FDN0IsT0FBTyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxlQUFlLENBQUE7QUFDdkIsQ0FBQztBQTdCRCx3Q0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1JlbGF0aW9uc2hpcEZpZWxkIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVsYXRpb25zaGlwcyc7XG5pbXBvcnQgeyBnZXRSZWxhdGVkVHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hbWVDb252ZXJ0ZXInO1xuaW1wb3J0IHsgcGx1cmFsaXplIH0gZnJvbSAnaW5mbGVjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNjaGVtYUV4dGVuc2lvbih7XG5cdHR5cGVzQnlOYW1lLFxufSlcbntcblx0LyoqXG5cdCAqIGV4dGVuZCBzY2hlbWEgdG8gYWRkIHJlbGF0aW9uc2hpcCBmaWVsZHNcblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogSWYgdGhlIGBwb3N0YCBrZXkgY29udGFpbnMgYSAndXNlcl9pZCcgZmllbGQsIHRoZW5cblx0ICogYWRkIG9uZS10by1tYW55IGFuZCBtYW55LXRvLW9uZSB0eXBlIGV4dGVuc2lvbnM6XG5cdCAqICAgICBleHRlbmQgdHlwZSBQb3N0IHsgVXNlcjogVXNlciB9XG5cdCAqICAgICBleHRlbmQgdHlwZSBVc2VyIHsgUG9zdHM6IFtQb3N0XSB9XG5cdCAqL1xuXHRjb25zdCBzY2hlbWFFeHRlbnNpb24gPSBPYmplY3QudmFsdWVzKHR5cGVzQnlOYW1lKS5yZWR1Y2UoKGV4dDogc3RyaW5nLCB0eXBlOiBhbnkpID0+XG5cdHtcblx0XHRPYmplY3Qua2V5cyh0eXBlLmdldEZpZWxkcygpKVxuXHRcdFx0LmZpbHRlcihpc1JlbGF0aW9uc2hpcEZpZWxkKVxuXHRcdFx0Lm1hcChmaWVsZE5hbWUgPT5cblx0XHRcdHtcblx0XHRcdFx0Y29uc3QgcmVsVHlwZSA9IGdldFJlbGF0ZWRUeXBlKGZpZWxkTmFtZSk7XG5cdFx0XHRcdGNvbnN0IHJlbCA9IHBsdXJhbGl6ZSh0eXBlLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRleHQgKz0gYFxuZXh0ZW5kIHR5cGUgJHt0eXBlfSB7ICR7cmVsVHlwZX06ICR7cmVsVHlwZX0gfVxuZXh0ZW5kIHR5cGUgJHtyZWxUeXBlfSB7ICR7cmVsfTogWyR7dHlwZX1dIH1gO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGV4dDtcblx0fSwgJycpO1xuXG5cdHJldHVybiBzY2hlbWFFeHRlbnNpb25cbn1cbiJdfQ==