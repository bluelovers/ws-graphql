import { GraphQLSchema, parse, extendSchema, GraphQLObjectType } from 'graphql';

import getTypesFromData from './getTypesFromData';
import { ISourceDataRoot, ISourceDataRowBase, IOptions } from '../types';
import createSchemaQueryType from './getSchemaFromData/createSchemaQueryType';
import createMutationType from './getSchemaFromData/createMutationType';
import createSchemaExtension from './getSchemaFromData/createSchemaExtension';
import { ITSRequiredWith } from 'ts-type';
import { GraphQLSchemaConfig } from 'graphql/type/schema';

export interface IRuntime<T extends ISourceDataRowBase = ISourceDataRowBase>
{
	data: ISourceDataRoot<T>,
	types: GraphQLObjectType[],
	typesByName: Record<string, GraphQLObjectType>,
}

/**
 * Get a GraphQL schema from data
 *
 * @example
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
 * const types = getTypesFromData(data);
 * // type Post {
 * //     id: ID
 * //     title: String
 * //     views: Int
 * //     user_id: ID
 * // }
 * //
 * // type User {
 * //     id: ID
 * //     name: String
 * // }
 * //
 * // type Query {
 * //     Post(id: ID!): Post
 * //     allPosts(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PostFilter): [Post]
 * //     User(id: ID!): User
 * //     allUsers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: UserFilter): [User]
 * // }
 * //
 * // type Mutation {
 * //     createPost(data: String): Post
 * //     updatePost(data: String): Post
 * //     removePost(id: ID!): Boolean
 * //     createUser(data: String): User
 * //     updateUser(data: String): User
 * //     removeUser(id: ID!): Boolean
 * // }
 */
function getSchemaFromData(data: ISourceDataRoot, options: IOptions = {})
{
	let types = getTypesFromData(data);

	types = options?.after?.getTypesFromData?.({
		types
	}, data)?.types ?? types;

	const typesByName = types.reduce((types, type) =>
	{
		types[type.name] = type;
		return types;
	}, {} as IRuntime["typesByName"]);

	const runtime: IRuntime = {
		data,
		types,
		typesByName,
	};

	;{
		let runtime2 = options?.before?.createSchemaQueryType?.(runtime, data);

		if (runtime2 != null)
		{
			runtime.types = runtime2.types ?? runtime.types;
			runtime.typesByName = runtime2.typesByName ?? runtime.typesByName;
		}
	};

	const queryType = createSchemaQueryType(runtime);
	const mutationType = createMutationType(runtime);

	let graphQLSchemaConfig = options?.before?.createGraphQLSchema?.({
		query: queryType,
		mutation: mutationType,
	}, data)?.graphQLSchemaConfig ?? null;

	graphQLSchemaConfig = {
		...graphQLSchemaConfig,

		query: graphQLSchemaConfig?.query ?? queryType,
		mutation: graphQLSchemaConfig?.mutation ?? mutationType,
	};

	const schema = new GraphQLSchema(graphQLSchemaConfig);

	let schemaExtension = createSchemaExtension(runtime);

	schemaExtension = options?.after?.createSchemaExtension?.({
		...runtime,
		schemaExtension,
	}, data)?.schemaExtension ?? schemaExtension;

	const returnSchema = schemaExtension
		? extendSchema(schema, parse(schemaExtension))
		: schema;

	return options?.after?.getSchemaFromData?.({
		schema: returnSchema,
	}, data)?.schema ?? returnSchema;
}

export default getSchemaFromData;
