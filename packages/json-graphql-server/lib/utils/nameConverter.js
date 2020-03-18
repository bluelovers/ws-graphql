"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedKeyFromType = exports.getRelatedTypeWithValid = exports.getRelatedTypeUnsafe = exports.getReverseRelatedField = exports.getRelatedKey = exports.camelizePluralize = exports.getTypeFromKey = exports.getRelationshipFromKey = void 0;
const relationships_1 = require("./relationships");
const camelize_1 = __importDefault(require("inflection2/camelize"));
const singularize_1 = __importDefault(require("inflection2/singularize"));
const pluralize_1 = __importDefault(require("inflection2/pluralize"));
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
    return camelize_1.default(key);
}
exports.getRelationshipFromKey = getRelationshipFromKey;
/**
 *
 * @param {String} key 'users'
 * @return {String} 'User'
 */
function getTypeFromKey(key) {
    return camelize_1.default(singularize_1.default(key));
}
exports.getTypeFromKey = getTypeFromKey;
/**
 *
 * @param {string} key 'user'
 * @returns {string} 'Users'
 */
function camelizePluralize(key) {
    return camelize_1.default(pluralize_1.default(key));
}
exports.camelizePluralize = camelizePluralize;
/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'users'
 */
function getRelatedKey(fieldName) {
    return pluralize_1.default(fieldName.substr(0, fieldName.length - 3));
}
exports.getRelatedKey = getRelatedKey;
/**
 *
 * @param {String} key 'users'
 * @return {String} 'user_id'
 */
function getReverseRelatedField(key) {
    return `${singularize_1.default(key)}_id`;
}
exports.getReverseRelatedField = getReverseRelatedField;
/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'User'
 */
function getRelatedTypeUnsafe(fieldName) {
    return getTypeFromKey(fieldName.substr(0, fieldName.length - 3));
}
exports.getRelatedTypeUnsafe = getRelatedTypeUnsafe;
/**
 * '_id' => undefined
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'User'
 */
function getRelatedTypeWithValid(fieldName) {
    if (relationships_1.isRelationshipField(fieldName)) {
        return getTypeFromKey(fieldName.substr(0, fieldName.length - 3));
    }
    return '';
}
exports.getRelatedTypeWithValid = getRelatedTypeWithValid;
/**
 *
 * @param {GraphQLObjectType} type User
 * @returns {string} 'Users'
 */
function getRelatedKeyFromType(type) {
    return pluralize_1.default(type.toString());
}
exports.getRelatedKeyFromType = getRelatedKeyFromType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZUNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWVDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsbURBQXNEO0FBQ3RELG9FQUE0QztBQUM1QywwRUFBa0Q7QUFDbEQsc0VBQThDO0FBRTlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUg7Ozs7R0FJRztBQUNILFNBQWdCLHNCQUFzQixDQUFDLEdBQVc7SUFFakQsT0FBTyxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFIRCx3REFHQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixjQUFjLENBQUMsR0FBVztJQUV6QyxPQUFPLGtCQUFRLENBQUMscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCx3Q0FHQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxHQUFXO0lBRTVDLE9BQU8sa0JBQVEsQ0FBQyxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUhELDhDQUdDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxTQUFpQjtJQUU5QyxPQUFPLG1CQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFIRCxzQ0FHQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFnQixzQkFBc0IsQ0FBQyxHQUFXO0lBRWpELE9BQU8sR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDakMsQ0FBQztBQUhELHdEQUdDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLG9CQUFvQixDQUFDLFNBQWlCO0lBRXJELE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBSEQsb0RBR0M7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLHVCQUF1QixDQUFDLFNBQWlCO0lBRXhELElBQUksbUNBQW1CLENBQUMsU0FBUyxDQUFDLEVBQ2xDO1FBQ0MsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pFO0lBRUQsT0FBTyxFQUFFLENBQUE7QUFDVixDQUFDO0FBUkQsMERBUUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUMsSUFBdUI7SUFFNUQsT0FBTyxtQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0FBQ2xDLENBQUM7QUFIRCxzREFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBpc1JlbGF0aW9uc2hpcEZpZWxkIH0gZnJvbSAnLi9yZWxhdGlvbnNoaXBzJztcbmltcG9ydCBjYW1lbGl6ZSBmcm9tICdpbmZsZWN0aW9uMi9jYW1lbGl6ZSc7XG5pbXBvcnQgc2luZ3VsYXJpemUgZnJvbSAnaW5mbGVjdGlvbjIvc2luZ3VsYXJpemUnO1xuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdpbmZsZWN0aW9uMi9wbHVyYWxpemUnO1xuXG4vKipcbiAqIEEgYml0IG9mIHZvY2FidWxhcnlcbiAqXG4gKiBDb25zaWRlciB0aGlzIGRhdGE6XG4gKiB7XG4gKiAgICAgcG9zdHM6IFtcbiAqICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAnZm9vJywgdXNlcl9pZDogMTIzIH1cbiAqICAgICBdLFxuICogICAgIHVzZXJzOiBbXG4gKiAgICAgICAgICB7IGlkOiAxMjMsIG5hbWU6ICdKb2huIERvZScgfVxuICogICAgIF1cbiAqIH1cbiAqXG4gKiBXZSdsbCB1c2UgdGhlIGZvbGxvd2luZyBuYW1lczpcbiAqIC0ga2V5OiB0aGUga2V5cyBpbiB0aGUgZGF0YSBtYXAsIGUuZy4gJ3Bvc3RzJywgJ3VzZXJzJ1xuICogLSB0eXBlOiBmb3IgYSBrZXksIHRoZSByZWxhdGVkIHR5cGUgaW4gdGhlIGdyYXBoUUwgc2NoZW1hLCBlLmcuICdwb3N0cycgPT4gJ1Bvc3QnLCAndXNlcnMnID0+ICdVc2VyJ1xuICogLSBmaWVsZDogdGhlIGtleXMgaW4gYSByZWNvcmQsIGUuZy4gJ2lkJywgJ2ZvbycsIHVzZXJfaWQnXG4gKiAtIHJlbGF0aW9uc2hpcCBmaWVsZDogYSBrZXkgZW5kaW5nIGluICdfaWQnLCBlLmcuICd1c2VyX2lkJ1xuICogLSByZWxhdGVkIGtleTogZm9yIGEgcmVsYXRpb25zaGlwIGZpZWxkLCB0aGUgcmVsYXRlZCBrZXksIGUuZy4gJ3VzZXJfaWQnID0+ICd1c2VycydcbiAqL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5ICd1c2VycydcbiAqIEByZXR1cm4ge1N0cmluZ30gJ1VzZXJzJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRpb25zaGlwRnJvbUtleShrZXk6IHN0cmluZylcbntcblx0cmV0dXJuIGNhbWVsaXplKGtleSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgJ3VzZXJzJ1xuICogQHJldHVybiB7U3RyaW5nfSAnVXNlcidcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVGcm9tS2V5KGtleTogc3RyaW5nKVxue1xuXHRyZXR1cm4gY2FtZWxpemUoc2luZ3VsYXJpemUoa2V5KSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgJ3VzZXInXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAnVXNlcnMnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbGl6ZVBsdXJhbGl6ZShrZXk6IHN0cmluZylcbntcblx0cmV0dXJuIGNhbWVsaXplKHBsdXJhbGl6ZShrZXkpKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkTmFtZSAndXNlcl9pZCdcbiAqIEByZXR1cm4ge1N0cmluZ30gJ3VzZXJzJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRlZEtleShmaWVsZE5hbWU6IHN0cmluZylcbntcblx0cmV0dXJuIHBsdXJhbGl6ZShmaWVsZE5hbWUuc3Vic3RyKDAsIGZpZWxkTmFtZS5sZW5ndGggLSAzKSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgJ3VzZXJzJ1xuICogQHJldHVybiB7U3RyaW5nfSAndXNlcl9pZCdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJldmVyc2VSZWxhdGVkRmllbGQoa2V5OiBzdHJpbmcpXG57XG5cdHJldHVybiBgJHtzaW5ndWxhcml6ZShrZXkpfV9pZGA7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZE5hbWUgJ3VzZXJfaWQnXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICdVc2VyJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsYXRlZFR5cGVVbnNhZmUoZmllbGROYW1lOiBzdHJpbmcpXG57XG5cdHJldHVybiBnZXRUeXBlRnJvbUtleShmaWVsZE5hbWUuc3Vic3RyKDAsIGZpZWxkTmFtZS5sZW5ndGggLSAzKSk7XG59XG5cbi8qKlxuICogJ19pZCcgPT4gdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkTmFtZSAndXNlcl9pZCdcbiAqIEByZXR1cm4ge1N0cmluZ30gJ1VzZXInXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGVkVHlwZVdpdGhWYWxpZChmaWVsZE5hbWU6IHN0cmluZylcbntcblx0aWYgKGlzUmVsYXRpb25zaGlwRmllbGQoZmllbGROYW1lKSlcblx0e1xuXHRcdHJldHVybiBnZXRUeXBlRnJvbUtleShmaWVsZE5hbWUuc3Vic3RyKDAsIGZpZWxkTmFtZS5sZW5ndGggLSAzKSk7XG5cdH1cblxuXHRyZXR1cm4gJydcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtHcmFwaFFMT2JqZWN0VHlwZX0gdHlwZSBVc2VyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAnVXNlcnMnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGVkS2V5RnJvbVR5cGUodHlwZTogR3JhcGhRTE9iamVjdFR5cGUpXG57XG5cdHJldHVybiBwbHVyYWxpemUodHlwZS50b1N0cmluZygpKVxufVxuIl19