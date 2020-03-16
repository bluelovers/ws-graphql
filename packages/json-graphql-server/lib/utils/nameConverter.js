"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedType = exports.getReverseRelatedField = exports.getRelatedKey = exports.getTypeFromKey = exports.getRelationshipFromKey = void 0;
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
 * @param {String} fieldName 'users'
 * @return {String} 'Users'
 */
exports.getRelationshipFromKey = key => inflection_1.camelize(key);
/**
 *
 * @param {String} fieldName 'users'
 * @return {String} 'User'
 */
exports.getTypeFromKey = key => inflection_1.camelize(inflection_1.singularize(key));
/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'users'
 */
exports.getRelatedKey = fieldName => inflection_1.pluralize(fieldName.substr(0, fieldName.length - 3));
/**
 *
 * @param {String} key 'users'
 * @return {String} 'user_id'
 */
exports.getReverseRelatedField = key => `${inflection_1.singularize(key)}_id`;
/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'User'
 */
exports.getRelatedType = fieldName => exports.getTypeFromKey(fieldName.substr(0, fieldName.length - 3));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZUNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWVDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThEO0FBRTlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUg7Ozs7R0FJRztBQUNVLFFBQUEsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTNEOzs7O0dBSUc7QUFDVSxRQUFBLGNBQWMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLHFCQUFRLENBQUMsd0JBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWhFOzs7O0dBSUc7QUFDVSxRQUFBLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUN4QyxzQkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV0RDs7OztHQUlHO0FBQ1UsUUFBQSxzQkFBc0IsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBRXRFOzs7O0dBSUc7QUFDVSxRQUFBLGNBQWMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUN6QyxzQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsaXplLCBwbHVyYWxpemUsIHNpbmd1bGFyaXplIH0gZnJvbSAnaW5mbGVjdGlvbic7XG5cbi8qKlxuICogQSBiaXQgb2Ygdm9jYWJ1bGFyeVxuICpcbiAqIENvbnNpZGVyIHRoaXMgZGF0YTpcbiAqIHtcbiAqICAgICBwb3N0czogW1xuICogICAgICAgICAgeyBpZDogMSwgdGl0bGU6ICdmb28nLCB1c2VyX2lkOiAxMjMgfVxuICogICAgIF0sXG4gKiAgICAgdXNlcnM6IFtcbiAqICAgICAgICAgIHsgaWQ6IDEyMywgbmFtZTogJ0pvaG4gRG9lJyB9XG4gKiAgICAgXVxuICogfVxuICpcbiAqIFdlJ2xsIHVzZSB0aGUgZm9sbG93aW5nIG5hbWVzOlxuICogLSBrZXk6IHRoZSBrZXlzIGluIHRoZSBkYXRhIG1hcCwgZS5nLiAncG9zdHMnLCAndXNlcnMnXG4gKiAtIHR5cGU6IGZvciBhIGtleSwgdGhlIHJlbGF0ZWQgdHlwZSBpbiB0aGUgZ3JhcGhRTCBzY2hlbWEsIGUuZy4gJ3Bvc3RzJyA9PiAnUG9zdCcsICd1c2VycycgPT4gJ1VzZXInXG4gKiAtIGZpZWxkOiB0aGUga2V5cyBpbiBhIHJlY29yZCwgZS5nLiAnaWQnLCAnZm9vJywgdXNlcl9pZCdcbiAqIC0gcmVsYXRpb25zaGlwIGZpZWxkOiBhIGtleSBlbmRpbmcgaW4gJ19pZCcsIGUuZy4gJ3VzZXJfaWQnXG4gKiAtIHJlbGF0ZWQga2V5OiBmb3IgYSByZWxhdGlvbnNoaXAgZmllbGQsIHRoZSByZWxhdGVkIGtleSwgZS5nLiAndXNlcl9pZCcgPT4gJ3VzZXJzJ1xuICovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZE5hbWUgJ3VzZXJzJ1xuICogQHJldHVybiB7U3RyaW5nfSAnVXNlcnMnXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRSZWxhdGlvbnNoaXBGcm9tS2V5ID0ga2V5ID0+IGNhbWVsaXplKGtleSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZE5hbWUgJ3VzZXJzJ1xuICogQHJldHVybiB7U3RyaW5nfSAnVXNlcidcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFR5cGVGcm9tS2V5ID0ga2V5ID0+IGNhbWVsaXplKHNpbmd1bGFyaXplKGtleSkpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGROYW1lICd1c2VyX2lkJ1xuICogQHJldHVybiB7U3RyaW5nfSAndXNlcnMnXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRSZWxhdGVkS2V5ID0gZmllbGROYW1lID0+XG5cdHBsdXJhbGl6ZShmaWVsZE5hbWUuc3Vic3RyKDAsIGZpZWxkTmFtZS5sZW5ndGggLSAzKSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgJ3VzZXJzJ1xuICogQHJldHVybiB7U3RyaW5nfSAndXNlcl9pZCdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJldmVyc2VSZWxhdGVkRmllbGQgPSBrZXkgPT4gYCR7c2luZ3VsYXJpemUoa2V5KX1faWRgO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGROYW1lICd1c2VyX2lkJ1xuICogQHJldHVybiB7U3RyaW5nfSAnVXNlcidcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJlbGF0ZWRUeXBlID0gZmllbGROYW1lID0+XG5cdGdldFR5cGVGcm9tS2V5KGZpZWxkTmFtZS5zdWJzdHIoMCwgZmllbGROYW1lLmxlbmd0aCAtIDMpKTtcbiJdfQ==