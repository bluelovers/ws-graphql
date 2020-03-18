import { pluralize } from 'inflection';
import GraphQLJSON from 'graphql-type-json';

import all from './Query/all';
import meta from './Query/meta';
import single from './Query/single';
import create from './Mutation/create';
import update from './Mutation/update';
import remove from './Mutation/remove';
import entityResolver from './Entity/index';
import { getTypeFromKey } from '../utils/nameConverter';
import hasType from '../introspection/hasType';
import { ISourceDataRoot, ISourceDataRowBase, ISourceDataRowBaseCore, IOptions } from '../types';
import { IResolvers } from 'graphql-tools';
import { DateType } from '../introspection/type/DateType';

export function getQueryResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, data: T[])
{
	let _key = pluralize(entityName);

	return ({
		[`all${_key}`]: all(data),
		[`_all${_key}Meta`]: meta(data),
		[entityName]: single(data),
	})
}

export function getMutationResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string,
	data: T[],
)
{
	return ({
		[`create${entityName}`]: create(data),
		[`update${entityName}`]: update(data),
		[`remove${entityName}`]: remove(data),
	});
}

export function createResolversFromData<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>,
	cb: (key: string, data: ISourceDataRoot<T>) => any,
)
{
	return Object.keys(data)
		.reduce((resolvers, key) =>
				Object.assign(
					//{},
					resolvers,
					cb(key, data),
				),
			{} as IResolvers,
		)
}

export default function resolver<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>, options: IOptions = {}): IResolvers
{
	const resolvers = Object.assign(
		{} as IResolvers,

		{

			Query: createResolversFromData(data, (key, data) => getQueryResolvers(getTypeFromKey(key), data[key])),

			Mutation: createResolversFromData(data, (key, data) => getMutationResolvers(getTypeFromKey(key), data[key])),

		},

		createResolversFromData(data, (key, data) =>
		{
			return {
				[getTypeFromKey(key)]: entityResolver(key, data),
			}
		}),

		/**
		 * required because makeExecutableSchema strips resolvers from typeDefs
		 */
		hasType(DateType, data) ? {
			[DateType.name]: DateType,
		} : {} as IResolvers,

		/**
		 * required because makeExecutableSchema strips resolvers from typeDefs
		 */
		hasType(GraphQLJSON, data) ? {
			JSON: GraphQLJSON
		} : {} as IResolvers,
	);

	return resolvers
}
