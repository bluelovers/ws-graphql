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
function Entity(entityName, data) {
    const entityFields = Object.keys(getFieldsFromEntities_1.default(data[entityName]));
    const manyToOneResolvers = entityFields.filter(relationships_1.isRelationshipField).reduce((resolvers, fieldName) => Object.assign({}, resolvers, {
        [nameConverter_1.getRelatedType(fieldName)]: entity => data[nameConverter_1.getRelatedKey(fieldName)].find(relatedRecord => relatedRecord.id == entity[fieldName]),
    }), {});
    const relatedField = nameConverter_1.getReverseRelatedField(entityName); // 'posts' => 'post_id'
    const hasReverseRelationship = entityName => getFieldsFromEntities_1.default(data[entityName]).hasOwnProperty(relatedField);
    const entities = Object.keys(data);
    const oneToManyResolvers = entities.filter(hasReverseRelationship).reduce((resolvers, entityName) => Object.assign({}, resolvers, {
        [nameConverter_1.getRelationshipFromKey(entityName)]: entity => data[entityName].filter(record => record[relatedField] == entity.id),
    }), {});
    return Object.assign({}, manyToOneResolvers, oneToManyResolvers);
}
exports.default = Entity;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNHQUE4RTtBQUM5RSw2REFBMEg7QUFDMUgsNkRBQWdFO0FBR2hFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNHO0FBQ0gsU0FBd0IsTUFBTSxDQUFDLFVBQWtCLEVBQUUsSUFBcUI7SUFFdkUsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQywrQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE1BQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FDekUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO1FBQzVCLENBQUMsOEJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQ3JDLElBQUksQ0FBQyw2QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNsQyxhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUN0RDtLQUNGLENBQUMsRUFDSCxFQUFFLENBQ0YsQ0FBQztJQUNGLE1BQU0sWUFBWSxHQUFHLHNDQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO0lBQ2hGLE1BQU0sc0JBQXNCLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FDM0MsK0JBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUN4RSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7UUFDNUIsQ0FBQyxzQ0FBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQ3RCLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQzNDO0tBQ0YsQ0FBQyxFQUNILEVBQUUsQ0FDRixDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQVMsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUE3QkQseUJBNkJDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRGaWVsZHNGcm9tRW50aXRpZXMgZnJvbSAnLi4vLi4vaW50cm9zcGVjdGlvbi9nZXRGaWVsZHNGcm9tRW50aXRpZXMnO1xuaW1wb3J0IHsgZ2V0UmVsYXRlZEtleSwgZ2V0UmVsYXRlZFR5cGUsIGdldFJlbGF0aW9uc2hpcEZyb21LZXksIGdldFJldmVyc2VSZWxhdGVkRmllbGQgfSBmcm9tICcuLi8uLi91dGlscy9uYW1lQ29udmVydGVyJztcbmltcG9ydCB7IGlzUmVsYXRpb25zaGlwRmllbGQgfSBmcm9tICcuLi8uLi91dGlscy9yZWxhdGlvbnNoaXBzJztcbmltcG9ydCB7IElTb3VyY2VEYXRhUm9vdCB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuLyoqXG4gKiBBZGQgcmVzb2x2ZXJzIGZvciByZWxhdGlvbnNoaXAgZmllbGRzXG4gKlxuICogQGV4YW1wbGVcbiAqIENvbnNpZGVyIHRoaXMgZGF0YTpcbiAqXG4gKiAgICAge1xuICogICAgICAgICBwb3N0czogW1xuICogICAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAnSGVsbG8sIHdvcmxkJywgdXNlcl9pZDogMTIzIH1cbiAqICAgICAgICAgXSxcbiAqICAgICAgICAgdXNlcnM6IFtcbiAqICAgICAgICAgICAgICB7IGlkOiAxMjMsIG5hbWU6ICdKb2huIERvZScgfVxuICogICAgICAgICBdXG4gKiAgICAgICAgIGNvbW1lbnRzOiBbXG4gKiAgICAgICAgICAgICAgeyBpZDogNDY0NiwgcG9zdF9pZDogMSwgYm9keTogJ05pY2UgcG9zdCEnIH1cbiAqICAgICAgICAgXVxuICogICAgIH1cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIHJlbGF0aW9uc2hpcCBmaWVsZHMgaGVyZSwgcG9zdHMudXNlcl9pZCBhbmQgY29tbWVudHMucG9zdF9pZC5cbiAqIFRoZSBnZW5lcmF0ZWQgR3JhcGhRTCBzY2hlbWEgZm9yIHBvc3RzIGlzOlxuICpcbiAqICAgICB0eXBlIFBvc3Qge1xuICogICAgICAgICBpZDogSUQhXG4gKiAgICAgICAgIHRpdGxlOiBTdHJpbmdcbiAqICAgICAgICAgdXNlcl9pZDogSURcbiAqICAgICAgICAgVXNlcjogVXNlclxuICogICAgICAgICBDb21tZW50czogW0NvbW1lbnRdXG4gKiAgICAgfVxuICpcbiAqIFdoZW4gY2FsbGVkIGZvciB0aGUgcG9zdHMgZW50aXR5LCB0aGlzIG1ldGhvZCBnZW5lcmF0ZXMgcmVzb2x2ZXJzXG4gKiBmb3IgUG9zdC5Vc2VyIGFuZCBQb3N0LkNvbW1lbnRzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eU5hbWUgVGhlIGVudGl0eSBrZXkgaW4gdGhlIGRhdGEgbWFwLCBlLmcuIFwicG9zdHNcIlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGVudGlyZSBkYXRhIG1hcCwgZS5nLiB7IHBvc3RzOiBbXSwgdXNlcnM6IFtdIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlc29sdmVycywgZS5nLlxuICpcbiAqICAgICB7XG4gKiAgICAgICAgIFBvc3Q6IHtcbiAqICAgICAgICAgICAgIFVzZXI6IChwb3N0KSA9PiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PSBwb3N0LnVzZXJfaWQpLFxuICogICAgICAgICAgICAgQ29tbWVudHM6IChwb3N0KSA9PiBjb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LnBvc3RfaWQgPSBwb3N0LmlkKSxcbiAqICAgICAgICAgfSxcbiAqICAgICB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudGl0eShlbnRpdHlOYW1lOiBzdHJpbmcsIGRhdGE6IElTb3VyY2VEYXRhUm9vdClcbntcblx0Y29uc3QgZW50aXR5RmllbGRzID0gT2JqZWN0LmtleXMoZ2V0RmllbGRzRnJvbUVudGl0aWVzKGRhdGFbZW50aXR5TmFtZV0pKTtcblx0Y29uc3QgbWFueVRvT25lUmVzb2x2ZXJzID0gZW50aXR5RmllbGRzLmZpbHRlcihpc1JlbGF0aW9uc2hpcEZpZWxkKS5yZWR1Y2UoXG5cdFx0KHJlc29sdmVycywgZmllbGROYW1lKSA9PlxuXHRcdFx0T2JqZWN0LmFzc2lnbih7fSwgcmVzb2x2ZXJzLCB7XG5cdFx0XHRcdFtnZXRSZWxhdGVkVHlwZShmaWVsZE5hbWUpXTogZW50aXR5ID0+XG5cdFx0XHRcdFx0ZGF0YVtnZXRSZWxhdGVkS2V5KGZpZWxkTmFtZSldLmZpbmQoXG5cdFx0XHRcdFx0XHRyZWxhdGVkUmVjb3JkID0+IHJlbGF0ZWRSZWNvcmQuaWQgPT0gZW50aXR5W2ZpZWxkTmFtZV0sXG5cdFx0XHRcdFx0KSxcblx0XHRcdH0pLFxuXHRcdHt9LFxuXHQpO1xuXHRjb25zdCByZWxhdGVkRmllbGQgPSBnZXRSZXZlcnNlUmVsYXRlZEZpZWxkKGVudGl0eU5hbWUpOyAvLyAncG9zdHMnID0+ICdwb3N0X2lkJ1xuXHRjb25zdCBoYXNSZXZlcnNlUmVsYXRpb25zaGlwID0gZW50aXR5TmFtZSA9PlxuXHRcdGdldEZpZWxkc0Zyb21FbnRpdGllcyhkYXRhW2VudGl0eU5hbWVdKS5oYXNPd25Qcm9wZXJ0eShyZWxhdGVkRmllbGQpO1xuXHRjb25zdCBlbnRpdGllcyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuXHRjb25zdCBvbmVUb01hbnlSZXNvbHZlcnMgPSBlbnRpdGllcy5maWx0ZXIoaGFzUmV2ZXJzZVJlbGF0aW9uc2hpcCkucmVkdWNlKFxuXHRcdChyZXNvbHZlcnMsIGVudGl0eU5hbWUpID0+XG5cdFx0XHRPYmplY3QuYXNzaWduKHt9LCByZXNvbHZlcnMsIHtcblx0XHRcdFx0W2dldFJlbGF0aW9uc2hpcEZyb21LZXkoZW50aXR5TmFtZSldOiBlbnRpdHkgPT5cblx0XHRcdFx0XHRkYXRhW2VudGl0eU5hbWVdLmZpbHRlcihcblx0XHRcdFx0XHRcdHJlY29yZCA9PiByZWNvcmRbcmVsYXRlZEZpZWxkXSA9PSBlbnRpdHkuaWQsXG5cdFx0XHRcdFx0KSxcblx0XHRcdH0pLFxuXHRcdHt9LFxuXHQpO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9IGFzIGFueSwgbWFueVRvT25lUmVzb2x2ZXJzLCBvbmVUb01hbnlSZXNvbHZlcnMpO1xufTtcbiJdfQ==