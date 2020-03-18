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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NoZW1hRXh0ZW5zaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlU2NoZW1hRXh0ZW5zaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkRBQWdFO0FBQ2hFLDZEQUF3RjtBQUt4RixTQUF3QixxQkFBcUIsQ0FBd0QsRUFDcEcsSUFBSSxFQUNKLEtBQUssRUFDTCxXQUFXLEdBQ0U7SUFFYjs7Ozs7Ozs7T0FRRztJQUNILE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ2hELE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxJQUF1QixFQUFFLEVBQUU7UUFFaEQsa0NBQWtDO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLHFDQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhDLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUN4QztZQUNDLElBQUksbUNBQW1CLENBQUMsU0FBUyxDQUFDLEVBQ2xDO2dCQUNDLE1BQU0sT0FBTyxHQUFHLG9DQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVoRCxHQUFHLElBQUk7Y0FDRSxJQUFJLE1BQU0sT0FBTyxLQUFLLE9BQU87Y0FDN0IsT0FBTyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQzthQUN6QztpQkFFRDtnQkFDQyw0QkFBNEI7YUFDNUI7U0FDRDtRQUVEOzs7Ozs7V0FNRztRQUVILE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVIsT0FBTyxlQUFlLENBQUE7QUFDdkIsQ0FBQztBQWpERCx3Q0FpREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1JlbGF0aW9uc2hpcEZpZWxkIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVsYXRpb25zaGlwcyc7XG5pbXBvcnQgeyBnZXRSZWxhdGVkVHlwZVVuc2FmZSwgZ2V0UmVsYXRlZEtleUZyb21UeXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbmFtZUNvbnZlcnRlcic7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvd0Jhc2UsIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBJUnVudGltZSB9IGZyb20gJy4uL2dldFNjaGVtYUZyb21EYXRhJztcbmltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNjaGVtYUV4dGVuc2lvbjxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlQ29yZSA9IElTb3VyY2VEYXRhUm93QmFzZT4oe1xuXHRkYXRhLFxuXHR0eXBlcyxcblx0dHlwZXNCeU5hbWUsXG59OiBJUnVudGltZTxUPilcbntcblx0LyoqXG5cdCAqIGV4dGVuZCBzY2hlbWEgdG8gYWRkIHJlbGF0aW9uc2hpcCBmaWVsZHNcblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogSWYgdGhlIGBwb3N0YCBrZXkgY29udGFpbnMgYSAndXNlcl9pZCcgZmllbGQsIHRoZW5cblx0ICogYWRkIG9uZS10by1tYW55IGFuZCBtYW55LXRvLW9uZSB0eXBlIGV4dGVuc2lvbnM6XG5cdCAqICAgICBleHRlbmQgdHlwZSBQb3N0IHsgVXNlcjogVXNlciB9XG5cdCAqICAgICBleHRlbmQgdHlwZSBVc2VyIHsgUG9zdHM6IFtQb3N0XSB9XG5cdCAqL1xuXHRjb25zdCBzY2hlbWFFeHRlbnNpb24gPSBPYmplY3QudmFsdWVzKHR5cGVzQnlOYW1lKVxuXHRcdC5yZWR1Y2UoKGV4dDogc3RyaW5nLCB0eXBlOiBHcmFwaFFMT2JqZWN0VHlwZSkgPT5cblx0XHR7XG5cdFx0XHQvL2NvbnN0IGZpZWxkTmFtZXM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRjb25zdCByZWwgPSBnZXRSZWxhdGVkS2V5RnJvbVR5cGUodHlwZSk7XG5cblx0XHRcdGZvciAoY29uc3QgZmllbGROYW1lIGluIHR5cGUuZ2V0RmllbGRzKCkpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChpc1JlbGF0aW9uc2hpcEZpZWxkKGZpZWxkTmFtZSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb25zdCByZWxUeXBlID0gZ2V0UmVsYXRlZFR5cGVVbnNhZmUoZmllbGROYW1lKTtcblxuXHRcdFx0XHRcdGV4dCArPSBgXG5leHRlbmQgdHlwZSAke3R5cGV9IHsgJHtyZWxUeXBlfTogJHtyZWxUeXBlfSB9XG5leHRlbmQgdHlwZSAke3JlbFR5cGV9IHsgJHtyZWx9OiBbJHt0eXBlfV0gfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly9maWVsZE5hbWVzLnB1c2goZmllbGROYW1lKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qXG5cdFx0XHRpZiAoZmllbGROYW1lcy5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdC8vIEBGSVhNRTogbm90IHdvcmtcblx0XHRcdFx0ZXh0ICs9IGNyZWF0ZVNjaGVtYUZyYWdtZW50KHR5cGUsIGZpZWxkTmFtZXMpO1xuXHRcdFx0fVxuXHRcdFx0ICovXG5cblx0XHRcdHJldHVybiBleHQ7XG5cdFx0fSwgJycpO1xuXG5cdHJldHVybiBzY2hlbWFFeHRlbnNpb25cbn1cbiJdfQ==