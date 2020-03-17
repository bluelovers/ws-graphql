"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function default_1(entityData = []) {
    return function (_, params) {
        let updatedEntity = undefined;
        if (params.id != null) {
            const indexOfEntity = utils_1.findEntityIndex(params.id, entityData);
            if (indexOfEntity !== -1) {
                entityData[indexOfEntity] = Object.assign({}, entityData[indexOfEntity], params);
                updatedEntity = entityData[indexOfEntity];
            }
        }
        return updatedEntity;
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0NBQTJDO0FBRTNDLG1CQUFvRixhQUFrQixFQUFFO0lBRXZHLE9BQU8sVUFBVSxDQUFDLEVBQUUsTUFBUztRQUU1QixJQUFJLGFBQWEsR0FBTSxTQUFTLENBQUM7UUFDakMsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksRUFDckI7WUFDQyxNQUFNLGFBQWEsR0FBRyx1QkFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFN0QsSUFBSSxhQUFhLEtBQUssQ0FBQyxDQUFDLEVBQ3hCO2dCQUNDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUN4QyxFQUFFLEVBQ0YsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUN6QixNQUFNLENBQ04sQ0FBQztnQkFDRixhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Q7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN0QixDQUFDLENBQUE7QUFDRixDQUFDO0FBckJELDRCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTb3VyY2VEYXRhUm93QmFzZSwgSVNvdXJjZURhdGFSb3dCYXNlQ29yZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGZpbmRFbnRpdHlJbmRleCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gPFQgZXh0ZW5kcyBJU291cmNlRGF0YVJvd0Jhc2VDb3JlID0gSVNvdXJjZURhdGFSb3dCYXNlQ29yZT4oZW50aXR5RGF0YTogVFtdID0gW10pXG57XG5cdHJldHVybiBmdW5jdGlvbiAoXywgcGFyYW1zOiBUKVxuXHR7XG5cdFx0bGV0IHVwZGF0ZWRFbnRpdHk6IFQgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKHBhcmFtcy5pZCAhPSBudWxsKVxuXHRcdHtcblx0XHRcdGNvbnN0IGluZGV4T2ZFbnRpdHkgPSBmaW5kRW50aXR5SW5kZXgocGFyYW1zLmlkLCBlbnRpdHlEYXRhKTtcblxuXHRcdFx0aWYgKGluZGV4T2ZFbnRpdHkgIT09IC0xKVxuXHRcdFx0e1xuXHRcdFx0XHRlbnRpdHlEYXRhW2luZGV4T2ZFbnRpdHldID0gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRlbnRpdHlEYXRhW2luZGV4T2ZFbnRpdHldLFxuXHRcdFx0XHRcdHBhcmFtcyxcblx0XHRcdFx0KTtcblx0XHRcdFx0dXBkYXRlZEVudGl0eSA9IGVudGl0eURhdGFbaW5kZXhPZkVudGl0eV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB1cGRhdGVkRW50aXR5O1xuXHR9XG59XG4iXX0=