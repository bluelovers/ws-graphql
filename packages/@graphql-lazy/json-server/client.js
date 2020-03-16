"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemaBuilder = void 0;
const graphQLClientServer_1 = __importDefault(require("./lib/graphQLClientServer"));
const schemaBuilder_1 = __importDefault(require("json-graphql-server/lib/schemaBuilder"));
exports.jsonSchemaBuilder = schemaBuilder_1.default;
if (typeof window !== 'undefined') {
    window.JsonGraphqlServer = graphQLClientServer_1.default;
    window.jsonSchemaBuilder = schemaBuilder_1.default;
}
exports.default = graphQLClientServer_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9GQUEwRDtBQUMxRCwwRkFBc0U7QUFpQjdELDRCQWpCRix1QkFBaUIsQ0FpQkU7QUFOMUIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQ2pDO0lBQ0MsTUFBTSxDQUFDLGlCQUFpQixHQUFHLDZCQUFpQixDQUFDO0lBQzdDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyx1QkFBaUIsQ0FBQztDQUM3QztBQUdELGtCQUFlLDZCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpzb25HcmFwaHFsU2VydmVyIGZyb20gJy4vbGliL2dyYXBoUUxDbGllbnRTZXJ2ZXInO1xuaW1wb3J0IGpzb25TY2hlbWFCdWlsZGVyIGZyb20gJ2pzb24tZ3JhcGhxbC1zZXJ2ZXIvbGliL3NjaGVtYUJ1aWxkZXInO1xuXG5kZWNsYXJlIGdsb2JhbFxue1xuXHRpbnRlcmZhY2UgV2luZG93XG5cdHtcblx0XHRKc29uR3JhcGhxbFNlcnZlcjogdHlwZW9mIEpzb25HcmFwaHFsU2VydmVyO1xuXHRcdGpzb25TY2hlbWFCdWlsZGVyOiB0eXBlb2YganNvblNjaGVtYUJ1aWxkZXJcblx0fVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG57XG5cdHdpbmRvdy5Kc29uR3JhcGhxbFNlcnZlciA9IEpzb25HcmFwaHFsU2VydmVyO1xuXHR3aW5kb3cuanNvblNjaGVtYUJ1aWxkZXIgPSBqc29uU2NoZW1hQnVpbGRlcjtcbn1cblxuZXhwb3J0IHsganNvblNjaGVtYUJ1aWxkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IEpzb25HcmFwaHFsU2VydmVyO1xuIl19