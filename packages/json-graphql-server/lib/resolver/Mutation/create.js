"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createNewID_1 = __importDefault(require("../../utils/createNewID"));
function default_1(entityData = []) {
    return function (_, entity) {
        const id = createNewID_1.default(_, entity, entityData);
        const newEntity = Object.assign({}, entity, { id });
        entityData.push(newEntity);
        return newEntity;
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsMEVBQWtEO0FBRWxELG1CQUE0RSxhQUFrQixFQUFFO0lBRS9GLE9BQU8sVUFBMEQsQ0FBQyxFQUFFLE1BQVM7UUFFNUUsTUFBTSxFQUFFLEdBQUcscUJBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBNEIsQ0FBVSxDQUFDO1FBRTVGLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQyxDQUFBO0FBQ0YsQ0FBQztBQVZELDRCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNvdXJjZURhdGFSb3dCYXNlLCBJU291cmNlRGF0YVJvd0Jhc2VDb3JlLCBJU291cmNlRGF0YVJvd0Jhc2VDb3JlMiB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBjcmVhdGVOZXdJRCBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVOZXdJRCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIDxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlID0gSVNvdXJjZURhdGFSb3dCYXNlPihlbnRpdHlEYXRhOiBUW10gPSBbXSlcbntcblx0cmV0dXJuIGZ1bmN0aW9uIDxSIGV4dGVuZHMgUGFydGlhbDxUPiB8IElTb3VyY2VEYXRhUm93QmFzZUNvcmUyPihfLCBlbnRpdHk6IFIpXG5cdHtcblx0XHRjb25zdCBpZCA9IGNyZWF0ZU5ld0lEKF8sIGVudGl0eSwgZW50aXR5RGF0YSk7XG5cdFx0Y29uc3QgbmV3RW50aXR5ID0gT2JqZWN0LmFzc2lnbih7fSBhcyBULCBlbnRpdHksIHsgaWQgfSBhcyBJU291cmNlRGF0YVJvd0Jhc2VDb3JlKSBhcyBUICYgUjtcblxuXHRcdGVudGl0eURhdGEucHVzaChuZXdFbnRpdHkpO1xuXHRcdHJldHVybiBuZXdFbnRpdHk7XG5cdH1cbn1cbiJdfQ==