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
export declare function getRelationshipFromKey(key: string): string;
/**
 *
 * @param {String} key 'users'
 * @return {String} 'User'
 */
export declare function getTypeFromKey(key: string): string;
export declare function camelizePluralize(key: string): string;
/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'users'
 */
export declare function getRelatedKey(fieldName: string): string;
/**
 *
 * @param {String} key 'users'
 * @return {String} 'user_id'
 */
export declare function getReverseRelatedField(key: string): string;
/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'User'
 */
export declare function getRelatedType(fieldName: string): string;
