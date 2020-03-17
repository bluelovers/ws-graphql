"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedType = exports.getReverseRelatedField = exports.getRelatedKey = exports.camelizePluralize = exports.getTypeFromKey = exports.getRelationshipFromKey = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZUNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWVDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThEO0FBRTlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUg7Ozs7R0FJRztBQUNILFNBQWdCLHNCQUFzQixDQUFDLEdBQVc7SUFFakQsT0FBTyxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFIRCx3REFHQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixjQUFjLENBQUMsR0FBVztJQUV6QyxPQUFPLHFCQUFRLENBQUMsd0JBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCx3Q0FHQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLEdBQVc7SUFFNUMsT0FBTyxxQkFBUSxDQUFDLHNCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBSEQsOENBR0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLFNBQWlCO0lBRTlDLE9BQU8sc0JBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUhELHNDQUdDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLHNCQUFzQixDQUFDLEdBQVc7SUFFakQsT0FBTyxHQUFHLHdCQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUNqQyxDQUFDO0FBSEQsd0RBR0M7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLFNBQWlCO0lBRS9DLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBSEQsd0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbGl6ZSwgcGx1cmFsaXplLCBzaW5ndWxhcml6ZSB9IGZyb20gJ2luZmxlY3Rpb24nO1xuXG4vKipcbiAqIEEgYml0IG9mIHZvY2FidWxhcnlcbiAqXG4gKiBDb25zaWRlciB0aGlzIGRhdGE6XG4gKiB7XG4gKiAgICAgcG9zdHM6IFtcbiAqICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAnZm9vJywgdXNlcl9pZDogMTIzIH1cbiAqICAgICBdLFxuICogICAgIHVzZXJzOiBbXG4gKiAgICAgICAgICB7IGlkOiAxMjMsIG5hbWU6ICdKb2huIERvZScgfVxuICogICAgIF1cbiAqIH1cbiAqXG4gKiBXZSdsbCB1c2UgdGhlIGZvbGxvd2luZyBuYW1lczpcbiAqIC0ga2V5OiB0aGUga2V5cyBpbiB0aGUgZGF0YSBtYXAsIGUuZy4gJ3Bvc3RzJywgJ3VzZXJzJ1xuICogLSB0eXBlOiBmb3IgYSBrZXksIHRoZSByZWxhdGVkIHR5cGUgaW4gdGhlIGdyYXBoUUwgc2NoZW1hLCBlLmcuICdwb3N0cycgPT4gJ1Bvc3QnLCAndXNlcnMnID0+ICdVc2VyJ1xuICogLSBmaWVsZDogdGhlIGtleXMgaW4gYSByZWNvcmQsIGUuZy4gJ2lkJywgJ2ZvbycsIHVzZXJfaWQnXG4gKiAtIHJlbGF0aW9uc2hpcCBmaWVsZDogYSBrZXkgZW5kaW5nIGluICdfaWQnLCBlLmcuICd1c2VyX2lkJ1xuICogLSByZWxhdGVkIGtleTogZm9yIGEgcmVsYXRpb25zaGlwIGZpZWxkLCB0aGUgcmVsYXRlZCBrZXksIGUuZy4gJ3VzZXJfaWQnID0+ICd1c2VycydcbiAqL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5ICd1c2VycydcbiAqIEByZXR1cm4ge1N0cmluZ30gJ1VzZXJzJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRpb25zaGlwRnJvbUtleShrZXk6IHN0cmluZylcbntcblx0cmV0dXJuIGNhbWVsaXplKGtleSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgJ3VzZXJzJ1xuICogQHJldHVybiB7U3RyaW5nfSAnVXNlcidcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVGcm9tS2V5KGtleTogc3RyaW5nKVxue1xuXHRyZXR1cm4gY2FtZWxpemUoc2luZ3VsYXJpemUoa2V5KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbGl6ZVBsdXJhbGl6ZShrZXk6IHN0cmluZylcbntcblx0cmV0dXJuIGNhbWVsaXplKHBsdXJhbGl6ZShrZXkpKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkTmFtZSAndXNlcl9pZCdcbiAqIEByZXR1cm4ge1N0cmluZ30gJ3VzZXJzJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRlZEtleShmaWVsZE5hbWU6IHN0cmluZylcbntcblx0cmV0dXJuIHBsdXJhbGl6ZShmaWVsZE5hbWUuc3Vic3RyKDAsIGZpZWxkTmFtZS5sZW5ndGggLSAzKSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgJ3VzZXJzJ1xuICogQHJldHVybiB7U3RyaW5nfSAndXNlcl9pZCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJldmVyc2VSZWxhdGVkRmllbGQoa2V5OiBzdHJpbmcpXG57XG5cdHJldHVybiBgJHtzaW5ndWxhcml6ZShrZXkpfV9pZGA7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZE5hbWUgJ3VzZXJfaWQnXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICdVc2VyJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRlZFR5cGUoZmllbGROYW1lOiBzdHJpbmcpXG57XG5cdHJldHVybiBnZXRUeXBlRnJvbUtleShmaWVsZE5hbWUuc3Vic3RyKDAsIGZpZWxkTmFtZS5sZW5ndGggLSAzKSk7XG59XG4iXX0=