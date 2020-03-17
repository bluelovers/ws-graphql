import { camelize, pluralize, singularize } from 'inflection';

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
export function getRelationshipFromKey(key: string)
{
	return camelize(key);
}

/**
 *
 * @param {String} key 'users'
 * @return {String} 'User'
 */
export function getTypeFromKey(key: string)
{
	return camelize(singularize(key));
}

export function camelizePluralize(key: string)
{
	return camelize(pluralize(key));
}

/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'users'
 */
export function getRelatedKey(fieldName: string)
{
	return pluralize(fieldName.substr(0, fieldName.length - 3));
}

/**
 *
 * @param {String} key 'users'
 * @return {String} 'user_id'
 */
export function getReverseRelatedField(key: string)
{
	return `${singularize(key)}_id`;
}

/**
 *
 * @param {String} fieldName 'user_id'
 * @return {String} 'User'
 */
export function getRelatedType(fieldName: string)
{
	return getTypeFromKey(fieldName.substr(0, fieldName.length - 3));
}
