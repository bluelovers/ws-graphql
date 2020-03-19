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
import { ISourceDataRoot, ISourceDataRowBase, ISourceDataRowBaseCore, IOptions, IResolversLazy } from '../types';
import { IResolvers } from 'graphql-tools';
import { DateType } from '../introspection/type/DateType';
import pluralize from 'inflection2/pluralize';

export function getQueryResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, entityData: T[])
{
	let _key = pluralize(entityName);

	return {
		[`all${_key}`]: all(entityData),
		[`_all${_key}Meta`]: meta(entityData),
		[entityName]: single(entityData),
	}
}

export function getMutationResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string,
	entityData: T[],
)
{
	return {
		[`create${entityName}`]: create(entityData),
		[`update${entityName}`]: update(entityData),
		[`remove${entityName}`]: remove(entityData),
	};
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

export default function resolver<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>, options: IOptions = {}): IResolversLazy
{
	const resolvers: IResolversLazy = Object.assign(
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
		hasType(DateType, data, options) ? {
			[DateType.name]: DateType,
		} : {} as IResolvers,

		/**
		 * required because makeExecutableSchema strips resolvers from typeDefs
		 */
		hasType(GraphQLJSON, data, options) ? {
			JSON: GraphQLJSON
		} : {} as IResolvers,
	);

	return options?.after?.resolver?.({
		resolvers,
	}, data)?.resolvers ?? resolvers
}
