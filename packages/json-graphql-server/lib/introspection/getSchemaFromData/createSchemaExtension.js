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
                const relType = nameConverter_1.getRelatedType(fieldName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NoZW1hRXh0ZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlU2NoZW1hRXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQWdFO0FBQ2hFLDZEQUFrRjtBQU9sRixTQUF3QixxQkFBcUIsQ0FBd0QsRUFDcEcsSUFBSSxFQUNKLEtBQUssRUFDTCxXQUFXLEdBQ0U7SUFFYjs7Ozs7Ozs7T0FRRztJQUNILE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ2hELE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxJQUF1QixFQUFFLEVBQUU7UUFFaEQsa0NBQWtDO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLHFDQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhDLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUN4QztZQUNDLElBQUksbUNBQW1CLENBQUMsU0FBUyxDQUFDLEVBQ2xDO2dCQUNDLE1BQU0sT0FBTyxHQUFHLDhCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRTFDLEdBQUcsSUFBSTtjQUNFLElBQUksTUFBTSxPQUFPLEtBQUssT0FBTztjQUM3QixPQUFPLE1BQU0sR0FBRyxNQUFNLElBQUksS0FBSyxDQUFDO2FBQ3pDO2lCQUVEO2dCQUNDLDRCQUE0QjthQUM1QjtTQUNEO1FBRUQ7Ozs7OztXQU1HO1FBRUgsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUixPQUFPLGVBQWUsQ0FBQTtBQUN2QixDQUFDO0FBakRELHdDQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUmVsYXRpb25zaGlwRmllbGQgfSBmcm9tICcuLi8uLi91dGlscy9yZWxhdGlvbnNoaXBzJztcbmltcG9ydCB7IGdldFJlbGF0ZWRUeXBlLCBnZXRSZWxhdGVkS2V5RnJvbVR5cGUgfSBmcm9tICcuLi8uLi91dGlscy9uYW1lQ29udmVydGVyJztcbmltcG9ydCB7IHBsdXJhbGl6ZSB9IGZyb20gJ2luZmxlY3Rpb24nO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb3dCYXNlLCBJU291cmNlRGF0YVJvd0Jhc2VDb3JlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgSVJ1bnRpbWUgfSBmcm9tICcuLi9nZXRTY2hlbWFGcm9tRGF0YSc7XG5pbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGNyZWF0ZVNjaGVtYUZyYWdtZW50IGZyb20gJy4vY3JlYXRlU2NoZW1hRnJhZ21lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTY2hlbWFFeHRlbnNpb248VCBleHRlbmRzIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgPSBJU291cmNlRGF0YVJvd0Jhc2U+KHtcblx0ZGF0YSxcblx0dHlwZXMsXG5cdHR5cGVzQnlOYW1lLFxufTogSVJ1bnRpbWU8VD4pXG57XG5cdC8qKlxuXHQgKiBleHRlbmQgc2NoZW1hIHRvIGFkZCByZWxhdGlvbnNoaXAgZmllbGRzXG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIElmIHRoZSBgcG9zdGAga2V5IGNvbnRhaW5zIGEgJ3VzZXJfaWQnIGZpZWxkLCB0aGVuXG5cdCAqIGFkZCBvbmUtdG8tbWFueSBhbmQgbWFueS10by1vbmUgdHlwZSBleHRlbnNpb25zOlxuXHQgKiAgICAgZXh0ZW5kIHR5cGUgUG9zdCB7IFVzZXI6IFVzZXIgfVxuXHQgKiAgICAgZXh0ZW5kIHR5cGUgVXNlciB7IFBvc3RzOiBbUG9zdF0gfVxuXHQgKi9cblx0Y29uc3Qgc2NoZW1hRXh0ZW5zaW9uID0gT2JqZWN0LnZhbHVlcyh0eXBlc0J5TmFtZSlcblx0XHQucmVkdWNlKChleHQ6IHN0cmluZywgdHlwZTogR3JhcGhRTE9iamVjdFR5cGUpID0+XG5cdFx0e1xuXHRcdFx0Ly9jb25zdCBmaWVsZE5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0Y29uc3QgcmVsID0gZ2V0UmVsYXRlZEtleUZyb21UeXBlKHR5cGUpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGZpZWxkTmFtZSBpbiB0eXBlLmdldEZpZWxkcygpKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaXNSZWxhdGlvbnNoaXBGaWVsZChmaWVsZE5hbWUpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29uc3QgcmVsVHlwZSA9IGdldFJlbGF0ZWRUeXBlKGZpZWxkTmFtZSk7XG5cblx0XHRcdFx0XHRleHQgKz0gYFxuZXh0ZW5kIHR5cGUgJHt0eXBlfSB7ICR7cmVsVHlwZX06ICR7cmVsVHlwZX0gfVxuZXh0ZW5kIHR5cGUgJHtyZWxUeXBlfSB7ICR7cmVsfTogWyR7dHlwZX1dIH1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vZmllbGROYW1lcy5wdXNoKGZpZWxkTmFtZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKlxuXHRcdFx0aWYgKGZpZWxkTmFtZXMubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBARklYTUU6IG5vdCB3b3JrXG5cdFx0XHRcdGV4dCArPSBjcmVhdGVTY2hlbWFGcmFnbWVudCh0eXBlLCBmaWVsZE5hbWVzKTtcblx0XHRcdH1cblx0XHRcdCAqL1xuXG5cdFx0XHRyZXR1cm4gZXh0O1xuXHRcdH0sICcnKTtcblxuXHRyZXR1cm4gc2NoZW1hRXh0ZW5zaW9uXG59XG4iXX0=