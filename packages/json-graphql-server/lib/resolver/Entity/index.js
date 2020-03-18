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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNHQUE4RTtBQUM5RSw2REFLbUM7QUFDbkMsNkRBQWdFO0FBSWhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNHO0FBQ0gsU0FBd0IsaUJBQWlCLENBQUMsVUFBa0IsRUFBRSxJQUFxQjtJQUVsRixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLCtCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUUsTUFBTSxrQkFBa0IsR0FBRyxZQUFZO1NBQ3JDLE1BQU0sQ0FBQyxtQ0FBbUIsQ0FBQztTQUMzQixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7UUFDeEIsQ0FBQyxvQ0FBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQzNDLElBQUksQ0FBQyw2QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzVCLElBQUksQ0FDTCxhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUN0RDtLQUNGLENBQUMsRUFDSCxFQUFnQixDQUNoQixDQUFDO0lBRUgsTUFBTSxZQUFZLEdBQUcsc0NBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7SUFDaEYsTUFBTSxzQkFBc0IsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUMzQywrQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVuQyxNQUFNLGtCQUFrQixHQUFHLFFBQVE7U0FDakMsTUFBTSxDQUFDLHNCQUFzQixDQUFDO1NBQzlCLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUN4QixDQUFDLHNDQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNkLE1BQU0sQ0FDUCxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUMzQztLQUNGLENBQUMsRUFDSCxFQUFnQixDQUNoQixDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQWdCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUNoRixDQUFDO0FBcENELG9DQW9DQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RmllbGRzRnJvbUVudGl0aWVzIGZyb20gJy4uLy4uL2ludHJvc3BlY3Rpb24vZ2V0RmllbGRzRnJvbUVudGl0aWVzJztcbmltcG9ydCB7XG5cdGdldFJlbGF0ZWRLZXksXG5cdGdldFJlbGF0ZWRUeXBlVW5zYWZlLFxuXHRnZXRSZWxhdGlvbnNoaXBGcm9tS2V5LFxuXHRnZXRSZXZlcnNlUmVsYXRlZEZpZWxkLFxufSBmcm9tICcuLi8uLi91dGlscy9uYW1lQ29udmVydGVyJztcbmltcG9ydCB7IGlzUmVsYXRpb25zaGlwRmllbGQgfSBmcm9tICcuLi8uLi91dGlscy9yZWxhdGlvbnNoaXBzJztcbmltcG9ydCB7IElTb3VyY2VEYXRhUm9vdCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IElSZXNvbHZlcnMgfSBmcm9tICdncmFwaHFsLXRvb2xzJztcblxuLyoqXG4gKiBBZGQgcmVzb2x2ZXJzIGZvciByZWxhdGlvbnNoaXAgZmllbGRzXG4gKlxuICogQGV4YW1wbGVcbiAqIENvbnNpZGVyIHRoaXMgZGF0YTpcbiAqXG4gKiAgICAge1xuICogICAgICAgICBwb3N0czogW1xuICogICAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAnSGVsbG8sIHdvcmxkJywgdXNlcl9pZDogMTIzIH1cbiAqICAgICAgICAgXSxcbiAqICAgICAgICAgdXNlcnM6IFtcbiAqICAgICAgICAgICAgICB7IGlkOiAxMjMsIG5hbWU6ICdKb2huIERvZScgfVxuICogICAgICAgICBdXG4gKiAgICAgICAgIGNvbW1lbnRzOiBbXG4gKiAgICAgICAgICAgICAgeyBpZDogNDY0NiwgcG9zdF9pZDogMSwgYm9keTogJ05pY2UgcG9zdCEnIH1cbiAqICAgICAgICAgXVxuICogICAgIH1cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIHJlbGF0aW9uc2hpcCBmaWVsZHMgaGVyZSwgcG9zdHMudXNlcl9pZCBhbmQgY29tbWVudHMucG9zdF9pZC5cbiAqIFRoZSBnZW5lcmF0ZWQgR3JhcGhRTCBzY2hlbWEgZm9yIHBvc3RzIGlzOlxuICpcbiAqICAgICB0eXBlIFBvc3Qge1xuICogICAgICAgICBpZDogSUQhXG4gKiAgICAgICAgIHRpdGxlOiBTdHJpbmdcbiAqICAgICAgICAgdXNlcl9pZDogSURcbiAqICAgICAgICAgVXNlcjogVXNlclxuICogICAgICAgICBDb21tZW50czogW0NvbW1lbnRdXG4gKiAgICAgfVxuICpcbiAqIFdoZW4gY2FsbGVkIGZvciB0aGUgcG9zdHMgZW50aXR5LCB0aGlzIG1ldGhvZCBnZW5lcmF0ZXMgcmVzb2x2ZXJzXG4gKiBmb3IgUG9zdC5Vc2VyIGFuZCBQb3N0LkNvbW1lbnRzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eU5hbWUgVGhlIGVudGl0eSBrZXkgaW4gdGhlIGRhdGEgbWFwLCBlLmcuIFwicG9zdHNcIlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGVudGlyZSBkYXRhIG1hcCwgZS5nLiB7IHBvc3RzOiBbXSwgdXNlcnM6IFtdIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlc29sdmVycywgZS5nLlxuICpcbiAqICAgICB7XG4gKiAgICAgICAgIFBvc3Q6IHtcbiAqICAgICAgICAgICAgIFVzZXI6IChwb3N0KSA9PiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PSBwb3N0LnVzZXJfaWQpLFxuICogICAgICAgICAgICAgQ29tbWVudHM6IChwb3N0KSA9PiBjb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LnBvc3RfaWQgPSBwb3N0LmlkKSxcbiAqICAgICAgICAgfSxcbiAqICAgICB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEVudGl0eVJlc29sdmVyKGVudGl0eU5hbWU6IHN0cmluZywgZGF0YTogSVNvdXJjZURhdGFSb290KVxue1xuXHRjb25zdCBlbnRpdHlGaWVsZHMgPSBPYmplY3Qua2V5cyhnZXRGaWVsZHNGcm9tRW50aXRpZXMoZGF0YVtlbnRpdHlOYW1lXSkpO1xuXG5cdGNvbnN0IG1hbnlUb09uZVJlc29sdmVycyA9IGVudGl0eUZpZWxkc1xuXHRcdC5maWx0ZXIoaXNSZWxhdGlvbnNoaXBGaWVsZClcblx0XHQucmVkdWNlKChyZXNvbHZlcnMsIGZpZWxkTmFtZSkgPT5cblx0XHRcdFx0T2JqZWN0LmFzc2lnbihyZXNvbHZlcnMsIHtcblx0XHRcdFx0XHRbZ2V0UmVsYXRlZFR5cGVVbnNhZmUoZmllbGROYW1lKV06IGVudGl0eSA9PlxuXHRcdFx0XHRcdFx0ZGF0YVtnZXRSZWxhdGVkS2V5KGZpZWxkTmFtZSldXG5cdFx0XHRcdFx0XHRcdC5maW5kKFxuXHRcdFx0XHRcdFx0XHRyZWxhdGVkUmVjb3JkID0+IHJlbGF0ZWRSZWNvcmQuaWQgPT0gZW50aXR5W2ZpZWxkTmFtZV0sXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHR9KSxcblx0XHRcdHt9IGFzIElSZXNvbHZlcnMsXG5cdFx0KTtcblxuXHRjb25zdCByZWxhdGVkRmllbGQgPSBnZXRSZXZlcnNlUmVsYXRlZEZpZWxkKGVudGl0eU5hbWUpOyAvLyAncG9zdHMnID0+ICdwb3N0X2lkJ1xuXHRjb25zdCBoYXNSZXZlcnNlUmVsYXRpb25zaGlwID0gZW50aXR5TmFtZSA9PlxuXHRcdGdldEZpZWxkc0Zyb21FbnRpdGllcyhkYXRhW2VudGl0eU5hbWVdKS5oYXNPd25Qcm9wZXJ0eShyZWxhdGVkRmllbGQpO1xuXHRjb25zdCBlbnRpdGllcyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXG5cdGNvbnN0IG9uZVRvTWFueVJlc29sdmVycyA9IGVudGl0aWVzXG5cdFx0LmZpbHRlcihoYXNSZXZlcnNlUmVsYXRpb25zaGlwKVxuXHRcdC5yZWR1Y2UoKHJlc29sdmVycywgZW50aXR5TmFtZSkgPT5cblx0XHRcdFx0T2JqZWN0LmFzc2lnbihyZXNvbHZlcnMsIHtcblx0XHRcdFx0XHRbZ2V0UmVsYXRpb25zaGlwRnJvbUtleShlbnRpdHlOYW1lKV06IGVudGl0eSA9PlxuXHRcdFx0XHRcdFx0ZGF0YVtlbnRpdHlOYW1lXVxuXHRcdFx0XHRcdFx0XHQuZmlsdGVyKFxuXHRcdFx0XHRcdFx0XHRyZWNvcmQgPT4gcmVjb3JkW3JlbGF0ZWRGaWVsZF0gPT0gZW50aXR5LmlkLFxuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0fSksXG5cdFx0XHR7fSBhcyBJUmVzb2x2ZXJzLFxuXHRcdCk7XG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30gYXMgSVJlc29sdmVycywgbWFueVRvT25lUmVzb2x2ZXJzLCBvbmVUb01hbnlSZXNvbHZlcnMpO1xufTtcbiJdfQ==