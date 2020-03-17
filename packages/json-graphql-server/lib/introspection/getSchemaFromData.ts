import { GraphQLSchema, parse, extendSchema, GraphQLObjectType } from 'graphql';

import getTypesFromData from './getTypesFromData';
import { ISourceDataRoot, ISourceDataRowBase, IOptions } from '../types';
import createSchemaQueryType from './getSchemaFromData/createSchemaQueryType';
import createMutationType from './getSchemaFromData/createMutationType';
import createSchemaExtension from './getSchemaFromData/createSchemaExtension';

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
	const types = getTypesFromData(data);
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

	const queryType = createSchemaQueryType(runtime);

	const mutationType = createMutationType(runtime);

	const schema = new GraphQLSchema({
		query: queryType,
		mutation: mutationType,
	});

	const schemaExtension = createSchemaExtension(runtime);

	return schemaExtension
		? extendSchema(schema, parse(schemaExtension))
		: schema;
}

export default getSchemaFromData;
