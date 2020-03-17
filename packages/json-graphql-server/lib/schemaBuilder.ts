import { makeExecutableSchema } from 'graphql-tools';
import { printSchema, GraphQLSchema } from 'graphql';
import getSchemaFromData from './introspection/getSchemaFromData';
import resolver from './resolver/index';
import { ISourceDataRoot, ISourceDataRowBase, IOptions } from './types';
import printSchemaFromData from './utils/printSchemaFromData';

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
export function schemaBuilder(data: ISourceDataRoot, options: IOptions = {})
{
	const typeDefs = printSchemaFromData(data, options);
	const resolvers = resolver(data, options);

	return makeExecutableSchema({
		typeDefs,
		resolvers,
		// eslint-disable-line no-console
		logger: { log: e => console.log(e) },
	})
}

export default schemaBuilder
