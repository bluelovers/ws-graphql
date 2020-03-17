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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0NBQTJDO0FBRTNDLG1CQUE0RSxhQUFrQixFQUFFO0lBRS9GLE9BQU8sVUFBVSxDQUFDLEVBQUUsTUFBUztRQUU1QixJQUFJLGFBQWEsR0FBTSxTQUFTLENBQUM7UUFDakMsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLElBQUksRUFDckI7WUFDQyxNQUFNLGFBQWEsR0FBRyx1QkFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFN0QsSUFBSSxhQUFhLEtBQUssQ0FBQyxDQUFDLEVBQ3hCO2dCQUNDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUN4QyxFQUFFLEVBQ0YsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUN6QixNQUFNLENBQ04sQ0FBQztnQkFDRixhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Q7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN0QixDQUFDLENBQUE7QUFDRixDQUFDO0FBckJELDRCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTb3VyY2VEYXRhUm93QmFzZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGZpbmRFbnRpdHlJbmRleCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gPFQgZXh0ZW5kcyBJU291cmNlRGF0YVJvd0Jhc2UgPSBJU291cmNlRGF0YVJvd0Jhc2U+KGVudGl0eURhdGE6IFRbXSA9IFtdKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24gKF8sIHBhcmFtczogVClcblx0e1xuXHRcdGxldCB1cGRhdGVkRW50aXR5OiBUID0gdW5kZWZpbmVkO1xuXHRcdGlmIChwYXJhbXMuaWQgIT0gbnVsbClcblx0XHR7XG5cdFx0XHRjb25zdCBpbmRleE9mRW50aXR5ID0gZmluZEVudGl0eUluZGV4KHBhcmFtcy5pZCwgZW50aXR5RGF0YSk7XG5cblx0XHRcdGlmIChpbmRleE9mRW50aXR5ICE9PSAtMSlcblx0XHRcdHtcblx0XHRcdFx0ZW50aXR5RGF0YVtpbmRleE9mRW50aXR5XSA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0ZW50aXR5RGF0YVtpbmRleE9mRW50aXR5XSxcblx0XHRcdFx0XHRwYXJhbXMsXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHVwZGF0ZWRFbnRpdHkgPSBlbnRpdHlEYXRhW2luZGV4T2ZFbnRpdHldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdXBkYXRlZEVudGl0eTtcblx0fVxufVxuIl19