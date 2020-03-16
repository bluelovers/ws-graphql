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
exports.default = (entityName, data) => {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNHQUE4RTtBQUM5RSw2REFBMEg7QUFDMUgsNkRBQWdFO0FBRWhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNHO0FBQ0gsa0JBQWUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFFbkMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQywrQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE1BQU0sa0JBQWtCLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FDekUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO1FBQzVCLENBQUMsOEJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQ3JDLElBQUksQ0FBQyw2QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNsQyxhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUN0RDtLQUNGLENBQUMsRUFDSCxFQUFFLENBQ0YsQ0FBQztJQUNGLE1BQU0sWUFBWSxHQUFHLHNDQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO0lBQ2hGLE1BQU0sc0JBQXNCLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FDM0MsK0JBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUN4RSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7UUFDNUIsQ0FBQyxzQ0FBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQ3RCLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQzNDO0tBQ0YsQ0FBQyxFQUNILEVBQUUsQ0FDRixDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQVMsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3pFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRGaWVsZHNGcm9tRW50aXRpZXMgZnJvbSAnLi4vLi4vaW50cm9zcGVjdGlvbi9nZXRGaWVsZHNGcm9tRW50aXRpZXMnO1xuaW1wb3J0IHsgZ2V0UmVsYXRlZEtleSwgZ2V0UmVsYXRlZFR5cGUsIGdldFJlbGF0aW9uc2hpcEZyb21LZXksIGdldFJldmVyc2VSZWxhdGVkRmllbGQgfSBmcm9tICcuLi8uLi91dGlscy9uYW1lQ29udmVydGVyJztcbmltcG9ydCB7IGlzUmVsYXRpb25zaGlwRmllbGQgfSBmcm9tICcuLi8uLi91dGlscy9yZWxhdGlvbnNoaXBzJztcblxuLyoqXG4gKiBBZGQgcmVzb2x2ZXJzIGZvciByZWxhdGlvbnNoaXAgZmllbGRzXG4gKlxuICogQGV4YW1wbGVcbiAqIENvbnNpZGVyIHRoaXMgZGF0YTpcbiAqXG4gKiAgICAge1xuICogICAgICAgICBwb3N0czogW1xuICogICAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAnSGVsbG8sIHdvcmxkJywgdXNlcl9pZDogMTIzIH1cbiAqICAgICAgICAgXSxcbiAqICAgICAgICAgdXNlcnM6IFtcbiAqICAgICAgICAgICAgICB7IGlkOiAxMjMsIG5hbWU6ICdKb2huIERvZScgfVxuICogICAgICAgICBdXG4gKiAgICAgICAgIGNvbW1lbnRzOiBbXG4gKiAgICAgICAgICAgICAgeyBpZDogNDY0NiwgcG9zdF9pZDogMSwgYm9keTogJ05pY2UgcG9zdCEnIH1cbiAqICAgICAgICAgXVxuICogICAgIH1cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIHJlbGF0aW9uc2hpcCBmaWVsZHMgaGVyZSwgcG9zdHMudXNlcl9pZCBhbmQgY29tbWVudHMucG9zdF9pZC5cbiAqIFRoZSBnZW5lcmF0ZWQgR3JhcGhRTCBzY2hlbWEgZm9yIHBvc3RzIGlzOlxuICpcbiAqICAgICB0eXBlIFBvc3Qge1xuICogICAgICAgICBpZDogSUQhXG4gKiAgICAgICAgIHRpdGxlOiBTdHJpbmdcbiAqICAgICAgICAgdXNlcl9pZDogSURcbiAqICAgICAgICAgVXNlcjogVXNlclxuICogICAgICAgICBDb21tZW50czogW0NvbW1lbnRdXG4gKiAgICAgfVxuICpcbiAqIFdoZW4gY2FsbGVkIGZvciB0aGUgcG9zdHMgZW50aXR5LCB0aGlzIG1ldGhvZCBnZW5lcmF0ZXMgcmVzb2x2ZXJzXG4gKiBmb3IgUG9zdC5Vc2VyIGFuZCBQb3N0LkNvbW1lbnRzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eU5hbWUgVGhlIGVudGl0eSBrZXkgaW4gdGhlIGRhdGEgbWFwLCBlLmcuIFwicG9zdHNcIlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGVudGlyZSBkYXRhIG1hcCwgZS5nLiB7IHBvc3RzOiBbXSwgdXNlcnM6IFtdIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlc29sdmVycywgZS5nLlxuICpcbiAqICAgICB7XG4gKiAgICAgICAgIFBvc3Q6IHtcbiAqICAgICAgICAgICAgIFVzZXI6IChwb3N0KSA9PiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PSBwb3N0LnVzZXJfaWQpLFxuICogICAgICAgICAgICAgQ29tbWVudHM6IChwb3N0KSA9PiBjb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LnBvc3RfaWQgPSBwb3N0LmlkKSxcbiAqICAgICAgICAgfSxcbiAqICAgICB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChlbnRpdHlOYW1lLCBkYXRhKSA9Plxue1xuXHRjb25zdCBlbnRpdHlGaWVsZHMgPSBPYmplY3Qua2V5cyhnZXRGaWVsZHNGcm9tRW50aXRpZXMoZGF0YVtlbnRpdHlOYW1lXSkpO1xuXHRjb25zdCBtYW55VG9PbmVSZXNvbHZlcnMgPSBlbnRpdHlGaWVsZHMuZmlsdGVyKGlzUmVsYXRpb25zaGlwRmllbGQpLnJlZHVjZShcblx0XHQocmVzb2x2ZXJzLCBmaWVsZE5hbWUpID0+XG5cdFx0XHRPYmplY3QuYXNzaWduKHt9LCByZXNvbHZlcnMsIHtcblx0XHRcdFx0W2dldFJlbGF0ZWRUeXBlKGZpZWxkTmFtZSldOiBlbnRpdHkgPT5cblx0XHRcdFx0XHRkYXRhW2dldFJlbGF0ZWRLZXkoZmllbGROYW1lKV0uZmluZChcblx0XHRcdFx0XHRcdHJlbGF0ZWRSZWNvcmQgPT4gcmVsYXRlZFJlY29yZC5pZCA9PSBlbnRpdHlbZmllbGROYW1lXSxcblx0XHRcdFx0XHQpLFxuXHRcdFx0fSksXG5cdFx0e30sXG5cdCk7XG5cdGNvbnN0IHJlbGF0ZWRGaWVsZCA9IGdldFJldmVyc2VSZWxhdGVkRmllbGQoZW50aXR5TmFtZSk7IC8vICdwb3N0cycgPT4gJ3Bvc3RfaWQnXG5cdGNvbnN0IGhhc1JldmVyc2VSZWxhdGlvbnNoaXAgPSBlbnRpdHlOYW1lID0+XG5cdFx0Z2V0RmllbGRzRnJvbUVudGl0aWVzKGRhdGFbZW50aXR5TmFtZV0pLmhhc093blByb3BlcnR5KHJlbGF0ZWRGaWVsZCk7XG5cdGNvbnN0IGVudGl0aWVzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cdGNvbnN0IG9uZVRvTWFueVJlc29sdmVycyA9IGVudGl0aWVzLmZpbHRlcihoYXNSZXZlcnNlUmVsYXRpb25zaGlwKS5yZWR1Y2UoXG5cdFx0KHJlc29sdmVycywgZW50aXR5TmFtZSkgPT5cblx0XHRcdE9iamVjdC5hc3NpZ24oe30sIHJlc29sdmVycywge1xuXHRcdFx0XHRbZ2V0UmVsYXRpb25zaGlwRnJvbUtleShlbnRpdHlOYW1lKV06IGVudGl0eSA9PlxuXHRcdFx0XHRcdGRhdGFbZW50aXR5TmFtZV0uZmlsdGVyKFxuXHRcdFx0XHRcdFx0cmVjb3JkID0+IHJlY29yZFtyZWxhdGVkRmllbGRdID09IGVudGl0eS5pZCxcblx0XHRcdFx0XHQpLFxuXHRcdFx0fSksXG5cdFx0e30sXG5cdCk7XG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30gYXMgYW55LCBtYW55VG9PbmVSZXNvbHZlcnMsIG9uZVRvTWFueVJlc29sdmVycyk7XG59O1xuIl19