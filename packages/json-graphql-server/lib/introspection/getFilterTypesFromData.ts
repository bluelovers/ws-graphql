import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
	GraphQLID,
	GraphQLType,
	GraphQLScalarType,
} from 'graphql';
import getFieldsFromEntities from './getFieldsFromEntities';
import getValuesFromEntities from './getValuesFromEntities';
import getTypeFromValues from './getTypeFromValues';
import { getTypeFromKey } from '../utils/nameConverter';
import {
	ISourceDataRowBase,
	ISourceDataRowBaseCore,
	ISourceDataRoot,
	IGraphQLInputFilterObjectTypeConfig, IOptions,
} from '../types';
import DateType from './type/DateType';
import { GraphQLFieldConfigMap, GraphQLInputObjectTypeConfig } from 'graphql/type/definition';

/**
 * 對數字類型的屬性增加 _lt _lte _gt _gte
 */
export function getRangeFiltersFromEntities<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(keyNames: string[],
	entities: T[],
)
{
	const fieldValues = getValuesFromEntities(entities);
	return Object.keys(fieldValues).reduce((fields, fieldName) =>
	{
		const fieldType = getTypeFromValues(
			fieldName,
			fieldValues[fieldName],
			false,
		) as GraphQLScalarType;
		if (
			fieldType == GraphQLInt ||
			fieldType == GraphQLFloat ||
			fieldType == DateType ||
			// @ts-ignore
			fieldType.name == 'Date'
		)
		{
			fields[`${fieldName}_lt`] = { type: fieldType };
			fields[`${fieldName}_lte`] = { type: fieldType };
			fields[`${fieldName}_gt`] = { type: fieldType };
			fields[`${fieldName}_gte`] = { type: fieldType };
		}
		return fields;
	}, {} as GraphQLFieldConfigMap<any, any>);
}

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
