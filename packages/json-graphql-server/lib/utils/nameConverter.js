"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedKeyFromType = exports.getRelatedType = exports.getReverseRelatedField = exports.getRelatedKey = exports.camelizePluralize = exports.getTypeFromKey = exports.getRelationshipFromKey = void 0;
const inflection_1 = require("inflection");
/**
 * A bit of vocabulary
 *
 * Consider this data:
 * {
 *     posts: [
 *          { id: 1, title: 'foo', user_id: 123 }
 *     ],
 *     users: [
 *          { id: 123, name: 'John Doe' }
 *     ]
 * }
 *
 * We'll use the following names:
 * - key: the keys in the data map, e.g. 'posts', 'users'
 * - type: for a key, the related type in the graphQL schema, e.g. 'posts' => 'Post', 'users' => 'User'
 * - field: the keys in a record, e.g. 'id', 'foo', user_id'
 * - relationship field: a key ending in '_id', e.g. 'user_id'
 * - related key: for a relationship field, the related key, e.g. 'user_id' => 'users'
 */
/**
 *
 * @param {String} key 'users'
 * @return {String} 'Users'
 */
function getRelationshipFromKey(key) {
    return inflection_1.camelize(key);
}
exports.getRelationshipFromKey = getRelationshipFromKey;
/**
 *
 * @param {String} key 'users'
 * @return {String} 'User'
 */
function getTypeFromKey(key) {
    return inflection_1.camelize(inflection_1.singularize(key));
}
exports.getTypeFromKey = getTypeFromKey;
function camelizePluralize(key) {
    return inflection_1.camelize(inflection_1.pluralize(key));
}
exports.camelizePluralize = camelizePluralize;
/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'users'
 */
function getRelatedKey(fieldName) {
    return inflection_1.pluralize(fieldName.substr(0, fieldName.length - 3));
}
exports.getRelatedKey = getRelatedKey;
/**
 *
 * @param {String} key 'users'
 * @return {String} 'user_id'
 */
function getReverseRelatedField(key) {
    return `${inflection_1.singularize(key)}_id`;
}
exports.getReverseRelatedField = getReverseRelatedField;
/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'User'
 */
function getRelatedType(fieldName) {
    return getTypeFromKey(fieldName.substr(0, fieldName.length - 3));
}
exports.getRelatedType = getRelatedType;
function getRelatedKeyFromType(type) {
    return inflection_1.pluralize(type.toString());
}
exports.getRelatedKeyFromType = getRelatedKeyFromType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZUNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWVDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThEO0FBRzlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUg7Ozs7R0FJRztBQUNILFNBQWdCLHNCQUFzQixDQUFDLEdBQVc7SUFFakQsT0FBTyxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFIRCx3REFHQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixjQUFjLENBQUMsR0FBVztJQUV6QyxPQUFPLHFCQUFRLENBQUMsd0JBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCx3Q0FHQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLEdBQVc7SUFFNUMsT0FBTyxxQkFBUSxDQUFDLHNCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBSEQsOENBR0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLFNBQWlCO0lBRTlDLE9BQU8sc0JBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUhELHNDQUdDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLHNCQUFzQixDQUFDLEdBQVc7SUFFakQsT0FBTyxHQUFHLHdCQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUNqQyxDQUFDO0FBSEQsd0RBR0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLFNBQWlCO0lBRS9DLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBSEQsd0NBR0M7QUFFRCxTQUFnQixxQkFBcUIsQ0FBQyxJQUF1QjtJQUU1RCxPQUFPLHNCQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7QUFDbEMsQ0FBQztBQUhELHNEQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxpemUsIHBsdXJhbGl6ZSwgc2luZ3VsYXJpemUgfSBmcm9tICdpbmZsZWN0aW9uJztcbmltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbi8qKlxuICogQSBiaXQgb2Ygdm9jYWJ1bGFyeVxuICpcbiAqIENvbnNpZGVyIHRoaXMgZGF0YTpcbiAqIHtcbiAqICAgICBwb3N0czogW1xuICogICAgICAgICAgeyBpZDogMSwgdGl0bGU6ICdmb28nLCB1c2VyX2lkOiAxMjMgfVxuICogICAgIF0sXG4gKiAgICAgdXNlcnM6IFtcbiAqICAgICAgICAgIHsgaWQ6IDEyMywgbmFtZTogJ0pvaG4gRG9lJyB9XG4gKiAgICAgXVxuICogfVxuICpcbiAqIFdlJ2xsIHVzZSB0aGUgZm9sbG93aW5nIG5hbWVzOlxuICogLSBrZXk6IHRoZSBrZXlzIGluIHRoZSBkYXRhIG1hcCwgZS5nLiAncG9zdHMnLCAndXNlcnMnXG4gKiAtIHR5cGU6IGZvciBhIGtleSwgdGhlIHJlbGF0ZWQgdHlwZSBpbiB0aGUgZ3JhcGhRTCBzY2hlbWEsIGUuZy4gJ3Bvc3RzJyA9PiAnUG9zdCcsICd1c2VycycgPT4gJ1VzZXInXG4gKiAtIGZpZWxkOiB0aGUga2V5cyBpbiBhIHJlY29yZCwgZS5nLiAnaWQnLCAnZm9vJywgdXNlcl9pZCdcbiAqIC0gcmVsYXRpb25zaGlwIGZpZWxkOiBhIGtleSBlbmRpbmcgaW4gJ19pZCcsIGUuZy4gJ3VzZXJfaWQnXG4gKiAtIHJlbGF0ZWQga2V5OiBmb3IgYSByZWxhdGlvbnNoaXAgZmllbGQsIHRoZSByZWxhdGVkIGtleSwgZS5nLiAndXNlcl9pZCcgPT4gJ3VzZXJzJ1xuICovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgJ3VzZXJzJ1xuICogQHJldHVybiB7U3RyaW5nfSAnVXNlcnMnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGlvbnNoaXBGcm9tS2V5KGtleTogc3RyaW5nKVxue1xuXHRyZXR1cm4gY2FtZWxpemUoa2V5KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAndXNlcnMnXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICdVc2VyJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZUZyb21LZXkoa2V5OiBzdHJpbmcpXG57XG5cdHJldHVybiBjYW1lbGl6ZShzaW5ndWxhcml6ZShrZXkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsaXplUGx1cmFsaXplKGtleTogc3RyaW5nKVxue1xuXHRyZXR1cm4gY2FtZWxpemUocGx1cmFsaXplKGtleSkpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGROYW1lICd1c2VyX2lkJ1xuICogQHJldHVybiB7U3RyaW5nfSAndXNlcnMnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGVkS2V5KGZpZWxkTmFtZTogc3RyaW5nKVxue1xuXHRyZXR1cm4gcGx1cmFsaXplKGZpZWxkTmFtZS5zdWJzdHIoMCwgZmllbGROYW1lLmxlbmd0aCAtIDMpKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSAndXNlcnMnXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICd1c2VyX2lkJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmV2ZXJzZVJlbGF0ZWRGaWVsZChrZXk6IHN0cmluZylcbntcblx0cmV0dXJuIGAke3Npbmd1bGFyaXplKGtleSl9X2lkYDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkTmFtZSAndXNlcl9pZCdcbiAqIEByZXR1cm4ge1N0cmluZ30gJ1VzZXInXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGVkVHlwZShmaWVsZE5hbWU6IHN0cmluZylcbntcblx0cmV0dXJuIGdldFR5cGVGcm9tS2V5KGZpZWxkTmFtZS5zdWJzdHIoMCwgZmllbGROYW1lLmxlbmd0aCAtIDMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbGF0ZWRLZXlGcm9tVHlwZSh0eXBlOiBHcmFwaFFMT2JqZWN0VHlwZSlcbntcblx0cmV0dXJuIHBsdXJhbGl6ZSh0eXBlLnRvU3RyaW5nKCkpXG59XG4iXX0=