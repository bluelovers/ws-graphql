import { GraphQLObjectType } from 'graphql';

import getFieldsFromEntities from './getFieldsFromEntities';
import { getTypeFromKey } from '../utils/nameConverter';
import { ISourceDataRoot, ISourceDataRowBase, ISourceDataRowBaseCore } from '../types';

/**
 * Get a list of GraphQLObjectType from data
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
 * // [
 * //     new GraphQLObjectType({
 * //         name: "Posts",
 * //         fields: {
 * //             id: { type: graphql.GraphQLString },
 * //             title: { type: graphql.GraphQLString },
 * //             views: { type: graphql.GraphQLInt },
 * //             user_id: { type: graphql.GraphQLString },
 * //         }
 * //     }),
 * //     new GraphQLObjectType({
 * //         name: "Users",
 * //         fields: {
 * //             id: { type: graphql.GraphQLString },
 * //             name: { type: graphql.GraphQLString },
 * //         }
 * //     }),
 * // ]
 */
export default function getTypesFromData<T extends ISourceDataRowBase = ISourceDataRowBase>(data: ISourceDataRoot<T>)
{
	return Object.keys(data)
		.map(typeName => ({
			name: getTypeFromKey(typeName),
			fields: getFieldsFromEntities(data[typeName]),
		}))
		.map(typeObject => new GraphQLObjectType(typeObject));
}

export function getTypeNamesFromData(data: ISourceDataRoot)
{
	return Object.keys(data).map(getTypeFromKey);
}
