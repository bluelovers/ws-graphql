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
//# sourceMappingURL=nameConverter.js.map