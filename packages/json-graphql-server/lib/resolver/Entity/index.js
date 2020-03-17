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
        [nameConverter_1.getRelatedType(fieldName)]: entity => data[nameConverter_1.getRelatedKey(fieldName)].find(relatedRecord => relatedRecord.id == entity[fieldName]),
    }), {});
    const relatedField = nameConverter_1.getReverseRelatedField(entityName); // 'posts' => 'post_id'
    const hasReverseRelationship = entityName => getFieldsFromEntities_1.default(data[entityName]).hasOwnProperty(relatedField);
    const entities = Object.keys(data);
    const oneToManyResolvers = entities
        .filter(hasReverseRelationship)
        .reduce((resolvers, entityName) => Object.assign(resolvers, {
        [nameConverter_1.getRelationshipFromKey(entityName)]: entity => data[entityName].filter(record => record[relatedField] == entity.id),
    }), {});
    return Object.assign({}, manyToOneResolvers, oneToManyResolvers);
}
exports.default = getEntityResolver;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNHQUE4RTtBQUM5RSw2REFLbUM7QUFDbkMsNkRBQWdFO0FBSWhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNHO0FBQ0gsU0FBd0IsaUJBQWlCLENBQUMsVUFBa0IsRUFBRSxJQUFxQjtJQUVsRixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLCtCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUUsTUFBTSxrQkFBa0IsR0FBRyxZQUFZO1NBQ3JDLE1BQU0sQ0FBQyxtQ0FBbUIsQ0FBQztTQUMzQixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7UUFDeEIsQ0FBQyw4QkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FDckMsSUFBSSxDQUFDLDZCQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2xDLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQ3REO0tBQ0YsQ0FBQyxFQUNILEVBQWdCLENBQ2hCLENBQUM7SUFFSCxNQUFNLFlBQVksR0FBRyxzQ0FBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtJQUNoRixNQUFNLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQzNDLCtCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5DLE1BQU0sa0JBQWtCLEdBQUcsUUFBUTtTQUNqQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7U0FDOUIsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQ3hCLENBQUMsc0NBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUN0QixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUMzQztLQUNGLENBQUMsRUFDSCxFQUFnQixDQUNoQixDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQWdCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUNoRixDQUFDO0FBbENELG9DQWtDQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RmllbGRzRnJvbUVudGl0aWVzIGZyb20gJy4uLy4uL2ludHJvc3BlY3Rpb24vZ2V0RmllbGRzRnJvbUVudGl0aWVzJztcbmltcG9ydCB7XG5cdGdldFJlbGF0ZWRLZXksXG5cdGdldFJlbGF0ZWRUeXBlLFxuXHRnZXRSZWxhdGlvbnNoaXBGcm9tS2V5LFxuXHRnZXRSZXZlcnNlUmVsYXRlZEZpZWxkLFxufSBmcm9tICcuLi8uLi91dGlscy9uYW1lQ29udmVydGVyJztcbmltcG9ydCB7IGlzUmVsYXRpb25zaGlwRmllbGQgfSBmcm9tICcuLi8uLi91dGlscy9yZWxhdGlvbnNoaXBzJztcbmltcG9ydCB7IElTb3VyY2VEYXRhUm9vdCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IElSZXNvbHZlcnMgfSBmcm9tICdncmFwaHFsLXRvb2xzJztcblxuLyoqXG4gKiBBZGQgcmVzb2x2ZXJzIGZvciByZWxhdGlvbnNoaXAgZmllbGRzXG4gKlxuICogQGV4YW1wbGVcbiAqIENvbnNpZGVyIHRoaXMgZGF0YTpcbiAqXG4gKiAgICAge1xuICogICAgICAgICBwb3N0czogW1xuICogICAgICAgICAgICAgIHsgaWQ6IDEsIHRpdGxlOiAnSGVsbG8sIHdvcmxkJywgdXNlcl9pZDogMTIzIH1cbiAqICAgICAgICAgXSxcbiAqICAgICAgICAgdXNlcnM6IFtcbiAqICAgICAgICAgICAgICB7IGlkOiAxMjMsIG5hbWU6ICdKb2huIERvZScgfVxuICogICAgICAgICBdXG4gKiAgICAgICAgIGNvbW1lbnRzOiBbXG4gKiAgICAgICAgICAgICAgeyBpZDogNDY0NiwgcG9zdF9pZDogMSwgYm9keTogJ05pY2UgcG9zdCEnIH1cbiAqICAgICAgICAgXVxuICogICAgIH1cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIHJlbGF0aW9uc2hpcCBmaWVsZHMgaGVyZSwgcG9zdHMudXNlcl9pZCBhbmQgY29tbWVudHMucG9zdF9pZC5cbiAqIFRoZSBnZW5lcmF0ZWQgR3JhcGhRTCBzY2hlbWEgZm9yIHBvc3RzIGlzOlxuICpcbiAqICAgICB0eXBlIFBvc3Qge1xuICogICAgICAgICBpZDogSUQhXG4gKiAgICAgICAgIHRpdGxlOiBTdHJpbmdcbiAqICAgICAgICAgdXNlcl9pZDogSURcbiAqICAgICAgICAgVXNlcjogVXNlclxuICogICAgICAgICBDb21tZW50czogW0NvbW1lbnRdXG4gKiAgICAgfVxuICpcbiAqIFdoZW4gY2FsbGVkIGZvciB0aGUgcG9zdHMgZW50aXR5LCB0aGlzIG1ldGhvZCBnZW5lcmF0ZXMgcmVzb2x2ZXJzXG4gKiBmb3IgUG9zdC5Vc2VyIGFuZCBQb3N0LkNvbW1lbnRzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eU5hbWUgVGhlIGVudGl0eSBrZXkgaW4gdGhlIGRhdGEgbWFwLCBlLmcuIFwicG9zdHNcIlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGVudGlyZSBkYXRhIG1hcCwgZS5nLiB7IHBvc3RzOiBbXSwgdXNlcnM6IFtdIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlc29sdmVycywgZS5nLlxuICpcbiAqICAgICB7XG4gKiAgICAgICAgIFBvc3Q6IHtcbiAqICAgICAgICAgICAgIFVzZXI6IChwb3N0KSA9PiB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PSBwb3N0LnVzZXJfaWQpLFxuICogICAgICAgICAgICAgQ29tbWVudHM6IChwb3N0KSA9PiBjb21tZW50cy5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LnBvc3RfaWQgPSBwb3N0LmlkKSxcbiAqICAgICAgICAgfSxcbiAqICAgICB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEVudGl0eVJlc29sdmVyKGVudGl0eU5hbWU6IHN0cmluZywgZGF0YTogSVNvdXJjZURhdGFSb290KVxue1xuXHRjb25zdCBlbnRpdHlGaWVsZHMgPSBPYmplY3Qua2V5cyhnZXRGaWVsZHNGcm9tRW50aXRpZXMoZGF0YVtlbnRpdHlOYW1lXSkpO1xuXG5cdGNvbnN0IG1hbnlUb09uZVJlc29sdmVycyA9IGVudGl0eUZpZWxkc1xuXHRcdC5maWx0ZXIoaXNSZWxhdGlvbnNoaXBGaWVsZClcblx0XHQucmVkdWNlKChyZXNvbHZlcnMsIGZpZWxkTmFtZSkgPT5cblx0XHRcdFx0T2JqZWN0LmFzc2lnbihyZXNvbHZlcnMsIHtcblx0XHRcdFx0XHRbZ2V0UmVsYXRlZFR5cGUoZmllbGROYW1lKV06IGVudGl0eSA9PlxuXHRcdFx0XHRcdFx0ZGF0YVtnZXRSZWxhdGVkS2V5KGZpZWxkTmFtZSldLmZpbmQoXG5cdFx0XHRcdFx0XHRcdHJlbGF0ZWRSZWNvcmQgPT4gcmVsYXRlZFJlY29yZC5pZCA9PSBlbnRpdHlbZmllbGROYW1lXSxcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdH0pLFxuXHRcdFx0e30gYXMgSVJlc29sdmVycyxcblx0XHQpO1xuXG5cdGNvbnN0IHJlbGF0ZWRGaWVsZCA9IGdldFJldmVyc2VSZWxhdGVkRmllbGQoZW50aXR5TmFtZSk7IC8vICdwb3N0cycgPT4gJ3Bvc3RfaWQnXG5cdGNvbnN0IGhhc1JldmVyc2VSZWxhdGlvbnNoaXAgPSBlbnRpdHlOYW1lID0+XG5cdFx0Z2V0RmllbGRzRnJvbUVudGl0aWVzKGRhdGFbZW50aXR5TmFtZV0pLmhhc093blByb3BlcnR5KHJlbGF0ZWRGaWVsZCk7XG5cdGNvbnN0IGVudGl0aWVzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cblx0Y29uc3Qgb25lVG9NYW55UmVzb2x2ZXJzID0gZW50aXRpZXNcblx0XHQuZmlsdGVyKGhhc1JldmVyc2VSZWxhdGlvbnNoaXApXG5cdFx0LnJlZHVjZSgocmVzb2x2ZXJzLCBlbnRpdHlOYW1lKSA9PlxuXHRcdFx0XHRPYmplY3QuYXNzaWduKHJlc29sdmVycywge1xuXHRcdFx0XHRcdFtnZXRSZWxhdGlvbnNoaXBGcm9tS2V5KGVudGl0eU5hbWUpXTogZW50aXR5ID0+XG5cdFx0XHRcdFx0XHRkYXRhW2VudGl0eU5hbWVdLmZpbHRlcihcblx0XHRcdFx0XHRcdFx0cmVjb3JkID0+IHJlY29yZFtyZWxhdGVkRmllbGRdID09IGVudGl0eS5pZCxcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdH0pLFxuXHRcdFx0e30gYXMgSVJlc29sdmVycyxcblx0XHQpO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9IGFzIElSZXNvbHZlcnMsIG1hbnlUb09uZVJlc29sdmVycywgb25lVG9NYW55UmVzb2x2ZXJzKTtcbn07XG4iXX0=