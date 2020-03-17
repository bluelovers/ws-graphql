"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findEntityIndex_1 = __importDefault(require("../../utils/findEntityIndex"));
function default_1(entityData = []) {
    return function (_, { id }) {
        let removedEntity = undefined;
        if (id != null) {
            const indexOfEntity = findEntityIndex_1.default(id, entityData);
            if (indexOfEntity !== -1) {
                removedEntity = entityData.splice(indexOfEntity, 1)[0];
            }
        }
        return removedEntity;
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0ZBQTBEO0FBRTFELG1CQUFzRyxhQUFrQixFQUFFO0lBRXpILE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQW1DO1FBRTFELElBQUksYUFBYSxHQUFNLFNBQVMsQ0FBQztRQUNqQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQ2Q7WUFDQyxNQUFNLGFBQWEsR0FBRyx5QkFBZSxDQUFDLEVBQUUsRUFBRSxVQUFpQixDQUFDLENBQUM7WUFFN0QsSUFBSSxhQUFhLEtBQUssQ0FBQyxDQUFDLEVBQ3hCO2dCQUNDLGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RDtTQUNEO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdEIsQ0FBQyxDQUFBO0FBQ0YsQ0FBQztBQWhCRCw0QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU291cmNlRGF0YVJvd0Jhc2UsIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgZmluZEVudGl0eUluZGV4IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRFbnRpdHlJbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIDxUIGV4dGVuZHMgUGFydGlhbDxJU291cmNlRGF0YVJvd0Jhc2VDb3JlPiA9IFBhcnRpYWw8SVNvdXJjZURhdGFSb3dCYXNlQ29yZT4+KGVudGl0eURhdGE6IFRbXSA9IFtdKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24gKF8sIHsgaWQgfTogUGFydGlhbDxJU291cmNlRGF0YVJvd0Jhc2VDb3JlPilcblx0e1xuXHRcdGxldCByZW1vdmVkRW50aXR5OiBUID0gdW5kZWZpbmVkO1xuXHRcdGlmIChpZCAhPSBudWxsKVxuXHRcdHtcblx0XHRcdGNvbnN0IGluZGV4T2ZFbnRpdHkgPSBmaW5kRW50aXR5SW5kZXgoaWQsIGVudGl0eURhdGEgYXMgYW55KTtcblxuXHRcdFx0aWYgKGluZGV4T2ZFbnRpdHkgIT09IC0xKVxuXHRcdFx0e1xuXHRcdFx0XHRyZW1vdmVkRW50aXR5ID0gZW50aXR5RGF0YS5zcGxpY2UoaW5kZXhPZkVudGl0eSwgMSlbMF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZW1vdmVkRW50aXR5O1xuXHR9XG59XG4iXX0=