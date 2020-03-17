"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const relationships_1 = require("../../utils/relationships");
const nameConverter_1 = require("../../utils/nameConverter");
const inflection_1 = require("inflection");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NoZW1hRXh0ZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlU2NoZW1hRXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQWdFO0FBQ2hFLDZEQUEyRDtBQUMzRCwyQ0FBdUM7QUFJdkMsU0FBd0IscUJBQXFCLENBQXlCLEVBQ3JFLElBQUksRUFDSixLQUFLLEVBQ0wsV0FBVyxHQUNFO0lBRWI7Ozs7Ozs7O09BUUc7SUFDSCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsRUFBRTtRQUVwRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUMzQixNQUFNLENBQUMsbUNBQW1CLENBQUM7YUFDM0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBRWhCLE1BQU0sT0FBTyxHQUFHLDhCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsTUFBTSxHQUFHLEdBQUcsc0JBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN2QyxHQUFHLElBQUk7Y0FDRyxJQUFJLE1BQU0sT0FBTyxLQUFLLE9BQU87Y0FDN0IsT0FBTyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsT0FBTyxlQUFlLENBQUE7QUFDdkIsQ0FBQztBQS9CRCx3Q0ErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1JlbGF0aW9uc2hpcEZpZWxkIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVsYXRpb25zaGlwcyc7XG5pbXBvcnQgeyBnZXRSZWxhdGVkVHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hbWVDb252ZXJ0ZXInO1xuaW1wb3J0IHsgcGx1cmFsaXplIH0gZnJvbSAnaW5mbGVjdGlvbic7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvd0Jhc2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBJUnVudGltZSB9IGZyb20gJy4uL2dldFNjaGVtYUZyb21EYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2NoZW1hRXh0ZW5zaW9uPFQgPSBJU291cmNlRGF0YVJvd0Jhc2U+KHtcblx0ZGF0YSxcblx0dHlwZXMsXG5cdHR5cGVzQnlOYW1lLFxufTogSVJ1bnRpbWU8VD4pXG57XG5cdC8qKlxuXHQgKiBleHRlbmQgc2NoZW1hIHRvIGFkZCByZWxhdGlvbnNoaXAgZmllbGRzXG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIElmIHRoZSBgcG9zdGAga2V5IGNvbnRhaW5zIGEgJ3VzZXJfaWQnIGZpZWxkLCB0aGVuXG5cdCAqIGFkZCBvbmUtdG8tbWFueSBhbmQgbWFueS10by1vbmUgdHlwZSBleHRlbnNpb25zOlxuXHQgKiAgICAgZXh0ZW5kIHR5cGUgUG9zdCB7IFVzZXI6IFVzZXIgfVxuXHQgKiAgICAgZXh0ZW5kIHR5cGUgVXNlciB7IFBvc3RzOiBbUG9zdF0gfVxuXHQgKi9cblx0Y29uc3Qgc2NoZW1hRXh0ZW5zaW9uID0gT2JqZWN0LnZhbHVlcyh0eXBlc0J5TmFtZSkucmVkdWNlKChleHQ6IHN0cmluZywgdHlwZTogYW55KSA9PlxuXHR7XG5cdFx0T2JqZWN0LmtleXModHlwZS5nZXRGaWVsZHMoKSlcblx0XHRcdC5maWx0ZXIoaXNSZWxhdGlvbnNoaXBGaWVsZClcblx0XHRcdC5tYXAoZmllbGROYW1lID0+XG5cdFx0XHR7XG5cdFx0XHRcdGNvbnN0IHJlbFR5cGUgPSBnZXRSZWxhdGVkVHlwZShmaWVsZE5hbWUpO1xuXHRcdFx0XHRjb25zdCByZWwgPSBwbHVyYWxpemUodHlwZS50b1N0cmluZygpKTtcblx0XHRcdFx0ZXh0ICs9IGBcbmV4dGVuZCB0eXBlICR7dHlwZX0geyAke3JlbFR5cGV9OiAke3JlbFR5cGV9IH1cbmV4dGVuZCB0eXBlICR7cmVsVHlwZX0geyAke3JlbH06IFske3R5cGV9XSB9YDtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBleHQ7XG5cdH0sICcnKTtcblxuXHRyZXR1cm4gc2NoZW1hRXh0ZW5zaW9uXG59XG4iXX0=