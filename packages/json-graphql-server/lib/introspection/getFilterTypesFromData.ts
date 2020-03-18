import { GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLID } from 'graphql';
import getFieldsFromEntities from './getTypesFromData/getFieldsFromEntities';
import { getTypeFromKey } from '../utils/nameConverter';
import { ISourceDataRoot, IGraphQLInputFilterObjectTypeConfig, IOptions } from '../types';
import getRangeFiltersFromEntities from './getFilterTypesFromData/getRangeFiltersFromEntities';

/**
 * Get a list of GraphQLObjectType for filtering data
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
 * const types = getFilterTypesFromData(data);
 * // {
 * //     posts: new GraphQLInputObjectType({
 * //         name: "PostFilter",
 * //         fields: {
 * //             q: { type: GraphQLString },
 * //             id: { type: GraphQLString },
 * //             title: { type: GraphQLString },
 * //             views: { type: GraphQLInt },
 * //             views_lt: { type: GraphQLInt },
 * //             views_lte: { type: GraphQLInt },
 * //             views_gt: { type: GraphQLInt },
 * //             views_gte: { type: GraphQLInt },
 * //             user_id: { type: GraphQLString },
 * //         }
 * //     }),
 * //     users: new GraphQLObjectType({
 * //         name: "UserFilter",
 * //         fields: {
 * //             q: { type: GraphQLString },
 * //             id: { type: GraphQLString },
 * //             name: { type: GraphQLString },
 * //         }
 * //     }),
 * // }
 */
export default function getFilterTypesFromData<Data extends ISourceDataRoot = ISourceDataRoot>(data: Data, options: IOptions = {})
{
	return Object.keys(data).reduce(
		(types, keyName) =>
		{
			const typeKey = getTypeFromKey(keyName);

			let graphQLInputObjectTypeConfig: IGraphQLInputFilterObjectTypeConfig = {
				name: `${typeKey}Filter`,
				fields:
					{
						q: {
							type: GraphQLString,
						},
						ids: {
							type: new GraphQLList(GraphQLID),
						},

						...getFieldsFromEntities([keyName], data[keyName], false),

						...getRangeFiltersFromEntities([keyName], data[keyName]),

					},
			};

			graphQLInputObjectTypeConfig = options?.on?.getFilterTypesFromData?.({
				keyName,
				typeKey,
				graphQLInputObjectTypeConfig,
			}, data)?.graphQLInputObjectTypeConfig ?? graphQLInputObjectTypeConfig;

			types[typeKey] = new GraphQLInputObjectType(graphQLInputObjectTypeConfig);

			return types
		},
		{} as Record<string, GraphQLInputObjectType>,
	);
}
