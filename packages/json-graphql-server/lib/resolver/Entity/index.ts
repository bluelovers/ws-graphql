import getFieldsFromEntities from '../../introspection/getFieldsFromEntities';
import {
	getRelatedKey,
	getRelatedTypeUnsafe,
	getRelationshipFromKey,
	getReverseRelatedField,
} from '../../utils/nameConverter';
import { isRelationshipField } from '../../utils/relationships';
import { ISourceDataRoot } from '../../types';
import { IResolvers } from 'graphql-tools';

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
export default function getEntityResolver(entityName: string, data: ISourceDataRoot)
{
	const entityFields = Object.keys(getFieldsFromEntities(data[entityName]));

	const manyToOneResolvers = entityFields
		.filter(isRelationshipField)
		.reduce((resolvers, fieldName) =>
				Object.assign(resolvers, {
					[getRelatedTypeUnsafe(fieldName)]: entity =>
						data[getRelatedKey(fieldName)]
							.find(
							relatedRecord => relatedRecord.id == entity[fieldName],
						),
				}),
			{} as IResolvers,
		);

	const relatedField = getReverseRelatedField(entityName); // 'posts' => 'post_id'
	const hasReverseRelationship = entityName =>
		getFieldsFromEntities(data[entityName]).hasOwnProperty(relatedField);
	const entities = Object.keys(data);

	const oneToManyResolvers = entities
		.filter(hasReverseRelationship)
		.reduce((resolvers, entityName) =>
				Object.assign(resolvers, {
					[getRelationshipFromKey(entityName)]: entity =>
						data[entityName]
							.filter(
							record => record[relatedField] == entity.id,
						),
				}),
			{} as IResolvers,
		);

	return Object.assign({} as IResolvers, manyToOneResolvers, oneToManyResolvers);
};
