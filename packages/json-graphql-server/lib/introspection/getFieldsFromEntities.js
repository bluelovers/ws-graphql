"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTypeFromValues_1 = __importDefault(require("./getTypeFromValues"));
const getValuesFromEntities_1 = __importDefault(require("./getValuesFromEntities"));
/**
 * Get a list of GraphQL fields from a list of entities
 *
 * @example
 * const entities = [
 *     {
 *         "id": 1,
 *         "title": "Lorem Ipsum",
 *         "views": 254,
 *         "user_id": 123,
 *     },
 *     {
 *         "id": 2,
 *         "title": "Sic Dolor amet",
 *         "user_id": 456,
 *     },
 * ];
 * const types = getFieldsFromEntities(entities);
 * // {
 * //    id: { type: new GraphQLNonNull(GraphQLString) },
 * //    title: { type: new GraphQLNonNull(GraphQLString) },
 * //    views: { type: GraphQLInt },
 * //    user_id: { type: new GraphQLNonNull(GraphQLString) },
 * // };
 */
function getFieldsFromEntities(entities, checkRequired = true) {
    const fieldValues = getValuesFromEntities_1.default(entities);
    const nbValues = entities.length;
    return Object.keys(fieldValues).reduce((fields, fieldName) => {
        fields[fieldName] = {
            type: getTypeFromValues_1.default(fieldName, fieldValues[fieldName], checkRequired
                ? fieldValues[fieldName].length === nbValues
                : false),
        };
        return fields;
    }, {});
}
exports.default = getFieldsFromEntities;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RmllbGRzRnJvbUVudGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0RmllbGRzRnJvbUVudGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNEVBQW9EO0FBQ3BELG9GQUE0RDtBQUc1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ0gsU0FBd0IscUJBQXFCLENBQXdELFFBQWEsRUFBRSxhQUFhLEdBQUcsSUFBSTtJQUV2SSxNQUFNLFdBQVcsR0FBRywrQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUU7UUFFNUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHO1lBQ25CLElBQUksRUFBRSwyQkFBaUIsQ0FDdEIsU0FBUyxFQUNULFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFDdEIsYUFBYTtnQkFDWixDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRO2dCQUM1QyxDQUFDLENBQUMsS0FBSyxDQUNSO1NBQ0QsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1IsQ0FBQztBQWpCRCx3Q0FpQkM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFR5cGVGcm9tVmFsdWVzIGZyb20gJy4vZ2V0VHlwZUZyb21WYWx1ZXMnO1xuaW1wb3J0IGdldFZhbHVlc0Zyb21FbnRpdGllcyBmcm9tICcuL2dldFZhbHVlc0Zyb21FbnRpdGllcyc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvd0Jhc2UsIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiBHcmFwaFFMIGZpZWxkcyBmcm9tIGEgbGlzdCBvZiBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBlbnRpdGllcyA9IFtcbiAqICAgICB7XG4gKiAgICAgICAgIFwiaWRcIjogMSxcbiAqICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvcmVtIElwc3VtXCIsXG4gKiAgICAgICAgIFwidmlld3NcIjogMjU0LFxuICogICAgICAgICBcInVzZXJfaWRcIjogMTIzLFxuICogICAgIH0sXG4gKiAgICAge1xuICogICAgICAgICBcImlkXCI6IDIsXG4gKiAgICAgICAgIFwidGl0bGVcIjogXCJTaWMgRG9sb3IgYW1ldFwiLFxuICogICAgICAgICBcInVzZXJfaWRcIjogNDU2LFxuICogICAgIH0sXG4gKiBdO1xuICogY29uc3QgdHlwZXMgPSBnZXRGaWVsZHNGcm9tRW50aXRpZXMoZW50aXRpZXMpO1xuICogLy8ge1xuICogLy8gICAgaWQ6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpIH0sXG4gKiAvLyAgICB0aXRsZTogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZykgfSxcbiAqIC8vICAgIHZpZXdzOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAqIC8vICAgIHVzZXJfaWQ6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpIH0sXG4gKiAvLyB9O1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGaWVsZHNGcm9tRW50aXRpZXM8VCBleHRlbmRzIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgPSBJU291cmNlRGF0YVJvd0Jhc2U+KGVudGl0aWVzOiBUW10sIGNoZWNrUmVxdWlyZWQgPSB0cnVlKVxue1xuXHRjb25zdCBmaWVsZFZhbHVlcyA9IGdldFZhbHVlc0Zyb21FbnRpdGllcyhlbnRpdGllcyk7XG5cdGNvbnN0IG5iVmFsdWVzID0gZW50aXRpZXMubGVuZ3RoO1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoZmllbGRWYWx1ZXMpLnJlZHVjZSgoZmllbGRzLCBmaWVsZE5hbWUpID0+XG5cdHtcblx0XHRmaWVsZHNbZmllbGROYW1lXSA9IHtcblx0XHRcdHR5cGU6IGdldFR5cGVGcm9tVmFsdWVzKFxuXHRcdFx0XHRmaWVsZE5hbWUsXG5cdFx0XHRcdGZpZWxkVmFsdWVzW2ZpZWxkTmFtZV0sXG5cdFx0XHRcdGNoZWNrUmVxdWlyZWRcblx0XHRcdFx0XHQ/IGZpZWxkVmFsdWVzW2ZpZWxkTmFtZV0ubGVuZ3RoID09PSBuYlZhbHVlc1xuXHRcdFx0XHRcdDogZmFsc2UsXG5cdFx0XHQpLFxuXHRcdH07XG5cdFx0cmV0dXJuIGZpZWxkcztcblx0fSwge30pO1xufTtcbiJdfQ==