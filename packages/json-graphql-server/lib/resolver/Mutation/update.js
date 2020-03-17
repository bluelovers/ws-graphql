"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findEntityIndex_1 = __importDefault(require("../../utils/findEntityIndex"));
function default_1(entityData = []) {
    return function (_, params) {
        let updatedEntity = undefined;
        if (params.id != null) {
            const indexOfEntity = findEntityIndex_1.default(params.id, entityData);
            if (indexOfEntity !== -1) {
                entityData[indexOfEntity] = Object.assign({}, entityData[indexOfEntity], params);
                // @ts-ignore
                updatedEntity = entityData[indexOfEntity];
            }
        }
        return updatedEntity;
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0ZBQTBEO0FBRTFELG1CQUFvRixhQUFrQixFQUFFO0lBRXZHLE9BQU8sVUFBMEQsQ0FBQyxFQUFFLE1BQVM7UUFFNUUsSUFBSSxhQUFhLEdBQVUsU0FBUyxDQUFDO1FBQ3JDLElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQ3JCO1lBQ0MsTUFBTSxhQUFhLEdBQUcseUJBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRTdELElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQyxFQUN4QjtnQkFDQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDeEMsRUFBRSxFQUNGLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFDekIsTUFBTSxDQUNOLENBQUM7Z0JBQ0YsYUFBYTtnQkFDYixhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFDO1NBQ0Q7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN0QixDQUFDLENBQUE7QUFDRixDQUFDO0FBdEJELDRCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTb3VyY2VEYXRhUm93QmFzZSwgSVNvdXJjZURhdGFSb3dCYXNlQ29yZSwgSVNvdXJjZURhdGFSb3dCYXNlQ29yZTIgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgZmluZEVudGl0eUluZGV4IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRFbnRpdHlJbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIDxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlQ29yZSA9IElTb3VyY2VEYXRhUm93QmFzZUNvcmU+KGVudGl0eURhdGE6IFRbXSA9IFtdKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24gPFIgZXh0ZW5kcyBQYXJ0aWFsPFQ+IHwgSVNvdXJjZURhdGFSb3dCYXNlQ29yZTI+KF8sIHBhcmFtczogUilcblx0e1xuXHRcdGxldCB1cGRhdGVkRW50aXR5OiBUICYgUiA9IHVuZGVmaW5lZDtcblx0XHRpZiAocGFyYW1zLmlkICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0Y29uc3QgaW5kZXhPZkVudGl0eSA9IGZpbmRFbnRpdHlJbmRleChwYXJhbXMuaWQsIGVudGl0eURhdGEpO1xuXG5cdFx0XHRpZiAoaW5kZXhPZkVudGl0eSAhPT0gLTEpXG5cdFx0XHR7XG5cdFx0XHRcdGVudGl0eURhdGFbaW5kZXhPZkVudGl0eV0gPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdGVudGl0eURhdGFbaW5kZXhPZkVudGl0eV0sXG5cdFx0XHRcdFx0cGFyYW1zLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlXG5cdFx0XHRcdHVwZGF0ZWRFbnRpdHkgPSBlbnRpdHlEYXRhW2luZGV4T2ZFbnRpdHldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdXBkYXRlZEVudGl0eTtcblx0fVxufVxuIl19