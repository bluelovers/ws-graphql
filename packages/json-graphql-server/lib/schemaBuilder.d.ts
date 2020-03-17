import { GraphQLSchema } from 'graphql';
import { ISourceDataRoot, IOptions } from './types';
/**
 * Generates a GraphQL Schema object for your data
 *
 * @param {ISourceDataRoot} data
 * @param {IOptions} options
 * @returns {GraphQLSchema}
 *
 * @example
 * import {graphql} from 'graphql';
 * import jsonSchemaBuilder from 'lazy-json-graphql';
 * const data = {
 *    "posts": [
 *        {
 *            "id": 1,
 *            "title": "Lorem Ipsum",
 *            "views": 254,
 *            "user_id": 123,
 *        },
 *        {
 *            "id": 2,
 *            "title": "Sic Dolor amet",
 *            "views": 65,
 *            "user_id": 456,
 *        },
 *    ],
 *    "users": [
 *        {
 *            "id": 123,
 *            "name": "John Doe"
 *        },
 *        {
 *            "id": 456,
 *            "name": "Jane Doe"
 *        }
 *    ],
 * };
 * const schema = jsonSchemaBuilder(data);
 * const query = `[...]`
 * graphql(schema, query).then(result => {
 *   console.log(result);
 * });
 *
 */
export declare function schemaBuilder(data: ISourceDataRoot, options?: IOptions): GraphQLSchema;
export default schemaBuilder;
