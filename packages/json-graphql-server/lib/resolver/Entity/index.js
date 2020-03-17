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
        [nameConverter_1.getRelatedType(fieldName)]: entity => data[nameConverter_1.getRelatedKey(fieldName)]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNHQUE4RTtBQUM5RSw2REFLbUM7QUFDbkMsNkRBQWdFO0FBSWhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkNHO0FBQ0gsU0FBd0IsaUJBQWlCLENBQUMsVUFBa0IsRUFBRSxJQUFxQjtJQUVsRixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLCtCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUUsTUFBTSxrQkFBa0IsR0FBRyxZQUFZO1NBQ3JDLE1BQU0sQ0FBQyxtQ0FBbUIsQ0FBQztTQUMzQixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7UUFDeEIsQ0FBQyw4QkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FDckMsSUFBSSxDQUFDLDZCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUIsSUFBSSxDQUNMLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQ3REO0tBQ0YsQ0FBQyxFQUNILEVBQWdCLENBQ2hCLENBQUM7SUFFSCxNQUFNLFlBQVksR0FBRyxzQ0FBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtJQUNoRixNQUFNLHNCQUFzQixHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQzNDLCtCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RSxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5DLE1BQU0sa0JBQWtCLEdBQUcsUUFBUTtTQUNqQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7U0FDOUIsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQ3hCLENBQUMsc0NBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2QsTUFBTSxDQUNQLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQzNDO0tBQ0YsQ0FBQyxFQUNILEVBQWdCLENBQ2hCLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hGLENBQUM7QUFwQ0Qsb0NBb0NDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRGaWVsZHNGcm9tRW50aXRpZXMgZnJvbSAnLi4vLi4vaW50cm9zcGVjdGlvbi9nZXRGaWVsZHNGcm9tRW50aXRpZXMnO1xuaW1wb3J0IHtcblx0Z2V0UmVsYXRlZEtleSxcblx0Z2V0UmVsYXRlZFR5cGUsXG5cdGdldFJlbGF0aW9uc2hpcEZyb21LZXksXG5cdGdldFJldmVyc2VSZWxhdGVkRmllbGQsXG59IGZyb20gJy4uLy4uL3V0aWxzL25hbWVDb252ZXJ0ZXInO1xuaW1wb3J0IHsgaXNSZWxhdGlvbnNoaXBGaWVsZCB9IGZyb20gJy4uLy4uL3V0aWxzL3JlbGF0aW9uc2hpcHMnO1xuaW1wb3J0IHsgSVNvdXJjZURhdGFSb290IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgSVJlc29sdmVycyB9IGZyb20gJ2dyYXBocWwtdG9vbHMnO1xuXG4vKipcbiAqIEFkZCByZXNvbHZlcnMgZm9yIHJlbGF0aW9uc2hpcCBmaWVsZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogQ29uc2lkZXIgdGhpcyBkYXRhOlxuICpcbiAqICAgICB7XG4gKiAgICAgICAgIHBvc3RzOiBbXG4gKiAgICAgICAgICAgICAgeyBpZDogMSwgdGl0bGU6ICdIZWxsbywgd29ybGQnLCB1c2VyX2lkOiAxMjMgfVxuICogICAgICAgICBdLFxuICogICAgICAgICB1c2VyczogW1xuICogICAgICAgICAgICAgIHsgaWQ6IDEyMywgbmFtZTogJ0pvaG4gRG9lJyB9XG4gKiAgICAgICAgIF1cbiAqICAgICAgICAgY29tbWVudHM6IFtcbiAqICAgICAgICAgICAgICB7IGlkOiA0NjQ2LCBwb3N0X2lkOiAxLCBib2R5OiAnTmljZSBwb3N0IScgfVxuICogICAgICAgICBdXG4gKiAgICAgfVxuICpcbiAqIFRoZXJlIGFyZSB0d28gcmVsYXRpb25zaGlwIGZpZWxkcyBoZXJlLCBwb3N0cy51c2VyX2lkIGFuZCBjb21tZW50cy5wb3N0X2lkLlxuICogVGhlIGdlbmVyYXRlZCBHcmFwaFFMIHNjaGVtYSBmb3IgcG9zdHMgaXM6XG4gKlxuICogICAgIHR5cGUgUG9zdCB7XG4gKiAgICAgICAgIGlkOiBJRCFcbiAqICAgICAgICAgdGl0bGU6IFN0cmluZ1xuICogICAgICAgICB1c2VyX2lkOiBJRFxuICogICAgICAgICBVc2VyOiBVc2VyXG4gKiAgICAgICAgIENvbW1lbnRzOiBbQ29tbWVudF1cbiAqICAgICB9XG4gKlxuICogV2hlbiBjYWxsZWQgZm9yIHRoZSBwb3N0cyBlbnRpdHksIHRoaXMgbWV0aG9kIGdlbmVyYXRlcyByZXNvbHZlcnNcbiAqIGZvciBQb3N0LlVzZXIgYW5kIFBvc3QuQ29tbWVudHNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZW50aXR5TmFtZSBUaGUgZW50aXR5IGtleSBpbiB0aGUgZGF0YSBtYXAsIGUuZy4gXCJwb3N0c1wiXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZW50aXJlIGRhdGEgbWFwLCBlLmcuIHsgcG9zdHM6IFtdLCB1c2VyczogW10gfVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gcmVzb2x2ZXJzLCBlLmcuXG4gKlxuICogICAgIHtcbiAqICAgICAgICAgUG9zdDoge1xuICogICAgICAgICAgICAgVXNlcjogKHBvc3QpID0+IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09IHBvc3QudXNlcl9pZCksXG4gKiAgICAgICAgICAgICBDb21tZW50czogKHBvc3QpID0+IGNvbW1lbnRzLmZpbHRlcihjb21tZW50ID0+IGNvbW1lbnQucG9zdF9pZCA9IHBvc3QuaWQpLFxuICogICAgICAgICB9LFxuICogICAgIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RW50aXR5UmVzb2x2ZXIoZW50aXR5TmFtZTogc3RyaW5nLCBkYXRhOiBJU291cmNlRGF0YVJvb3QpXG57XG5cdGNvbnN0IGVudGl0eUZpZWxkcyA9IE9iamVjdC5rZXlzKGdldEZpZWxkc0Zyb21FbnRpdGllcyhkYXRhW2VudGl0eU5hbWVdKSk7XG5cblx0Y29uc3QgbWFueVRvT25lUmVzb2x2ZXJzID0gZW50aXR5RmllbGRzXG5cdFx0LmZpbHRlcihpc1JlbGF0aW9uc2hpcEZpZWxkKVxuXHRcdC5yZWR1Y2UoKHJlc29sdmVycywgZmllbGROYW1lKSA9PlxuXHRcdFx0XHRPYmplY3QuYXNzaWduKHJlc29sdmVycywge1xuXHRcdFx0XHRcdFtnZXRSZWxhdGVkVHlwZShmaWVsZE5hbWUpXTogZW50aXR5ID0+XG5cdFx0XHRcdFx0XHRkYXRhW2dldFJlbGF0ZWRLZXkoZmllbGROYW1lKV1cblx0XHRcdFx0XHRcdFx0LmZpbmQoXG5cdFx0XHRcdFx0XHRcdHJlbGF0ZWRSZWNvcmQgPT4gcmVsYXRlZFJlY29yZC5pZCA9PSBlbnRpdHlbZmllbGROYW1lXSxcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdH0pLFxuXHRcdFx0e30gYXMgSVJlc29sdmVycyxcblx0XHQpO1xuXG5cdGNvbnN0IHJlbGF0ZWRGaWVsZCA9IGdldFJldmVyc2VSZWxhdGVkRmllbGQoZW50aXR5TmFtZSk7IC8vICdwb3N0cycgPT4gJ3Bvc3RfaWQnXG5cdGNvbnN0IGhhc1JldmVyc2VSZWxhdGlvbnNoaXAgPSBlbnRpdHlOYW1lID0+XG5cdFx0Z2V0RmllbGRzRnJvbUVudGl0aWVzKGRhdGFbZW50aXR5TmFtZV0pLmhhc093blByb3BlcnR5KHJlbGF0ZWRGaWVsZCk7XG5cdGNvbnN0IGVudGl0aWVzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cblx0Y29uc3Qgb25lVG9NYW55UmVzb2x2ZXJzID0gZW50aXRpZXNcblx0XHQuZmlsdGVyKGhhc1JldmVyc2VSZWxhdGlvbnNoaXApXG5cdFx0LnJlZHVjZSgocmVzb2x2ZXJzLCBlbnRpdHlOYW1lKSA9PlxuXHRcdFx0XHRPYmplY3QuYXNzaWduKHJlc29sdmVycywge1xuXHRcdFx0XHRcdFtnZXRSZWxhdGlvbnNoaXBGcm9tS2V5KGVudGl0eU5hbWUpXTogZW50aXR5ID0+XG5cdFx0XHRcdFx0XHRkYXRhW2VudGl0eU5hbWVdXG5cdFx0XHRcdFx0XHRcdC5maWx0ZXIoXG5cdFx0XHRcdFx0XHRcdHJlY29yZCA9PiByZWNvcmRbcmVsYXRlZEZpZWxkXSA9PSBlbnRpdHkuaWQsXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHR9KSxcblx0XHRcdHt9IGFzIElSZXNvbHZlcnMsXG5cdFx0KTtcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSBhcyBJUmVzb2x2ZXJzLCBtYW55VG9PbmVSZXNvbHZlcnMsIG9uZVRvTWFueVJlc29sdmVycyk7XG59O1xuIl19