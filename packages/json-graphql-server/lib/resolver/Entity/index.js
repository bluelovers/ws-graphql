"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFieldsFromEntities_1 = __importDefault(require("../../introspection/getFieldsFromEntities"));
const nameConverter_1 = require("../../utils/nameConverter");
const relationships_1 = require("../../utils/relationships");
/**
 * Add resolvers for relationship fields
 *
 * @example
 * Consider this data:
 *
 *     {
 *         posts: [
 *              { id: 1, title: 'Hello, world', user_id: 123 }
 *         ],
 *         users: [
 *              { id: 123, name: 'John Doe' }
 *         ]
 *         comments: [
 *              { id: 4646, post_id: 1, body: 'Nice post!' }
 *         ]
 *     }
 *
 * There are two relationship fields here, posts.user_id and comments.post_id.
 * The generated GraphQL schema for posts is:
 *
 *     type Post {
 *         id: ID!
 *         title: String
 *         user_id: ID
 *         User: User
 *         Comments: [Comment]
 *     }
 *
 * When called for the posts entity, this method generates resolvers
 * for Post.User and Post.Comments
 *
 * @param {String} entityName The entity key in the data map, e.g. "posts"
 * @param {Object} data The entire data map, e.g. { posts: [], users: [] }
 *
 * @return {Object} resolvers, e.g.
 *
 *     {
 *         Post: {
 *             User: (post) => users.find(user => user.id == post.user_id),
 *             Comments: (post) => comments.filter(comment => comment.post_id = post.id),
 *         },
 *     }
 */
function getEntityResolver(entityName, data) {
    const entityFields = Object.keys(getFieldsFromEntities_1.default(data[entityName]));
    const manyToOneResolvers = entityFields
        .filter(relationships_1.isRelationshipField)
        .reduce((resolvers, fieldName) => Object.assign(resolvers, {
        [nameConverter_1.getRelatedTypeUnsafe(fieldName)]: entity => data[nameConverter_1.getRelatedKey(fieldName)]
            .find(relatedRecord => relatedRecord.id == entity[fieldName]),
    }), {});
    const relatedField = nameConverter_1.getReverseRelatedField(entityName); // 'posts' => 'post_id'
    const hasReverseRelationship = entityName => getFieldsFromEntities_1.default(data[entityName]).hasOwnProperty(relatedField);
    const entities = Object.keys(data);
    const oneToManyResolvers = entities
        .filter(hasReverseRelationship)
        .reduce((resolvers, entityName) => Object.assign(resolvers, {
        [nameConverter_1.getRelationshipFromKey(entityName)]: entity => data[entityName]
            .filter(record => record[relatedField] == entity.id),
    }), {});
    return Object.assign({}, manyToOneResolvers, oneToManyResolvers);
}
exports.default = getEntityResolver;
;
//# sourceMappingURL=index.js.map