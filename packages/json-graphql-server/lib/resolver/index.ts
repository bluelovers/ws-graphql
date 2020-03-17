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
import DateType from '../introspection/DateType';
import hasType from '../introspection/hasType';
import { ISourceDataRoot, ISourceDataRowBase, ISourceDataRowBaseCore } from '../types';
import { IResolvers } from 'graphql-tools';

export function getQueryResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, data: T[])
{
	let _key = pluralize(entityName);

	return ({
		[`all${_key}`]: all(data),
		[`_all${_key}Meta`]: meta(data),
		[entityName]: single(data),
	})
}

export function getMutationResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, data: T[])
{
	return ({
		[`create${entityName}`]: create(data),
		[`update${entityName}`]: update(data),
		[`remove${entityName}`]: remove(data),
	});
}

export default function resolver<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>): IResolvers
{
	return Object.assign(
		{} as IResolvers,
		{
			Query: Object.keys(data).reduce(
				(resolvers, key) =>
					Object.assign(
						{},
						resolvers,
						getQueryResolvers(getTypeFromKey(key), data[key]),
					),
				{} as IResolvers,
			),
			Mutation: Object.keys(data).reduce(
				(resolvers, key) =>
					Object.assign(
						{},
						resolvers,
						getMutationResolvers(getTypeFromKey(key), data[key]),
					),
				{} as IResolvers,
			),
		},
		Object.keys(data).reduce(
			(resolvers, key) =>
				Object.assign({}, resolvers, {
					[getTypeFromKey(key)]: entityResolver(key, data),
				}),
			{} as IResolvers,
		),
		hasType('Date', data) ? { Date: DateType } : {} as IResolvers, // required because makeExecutableSchema strips resolvers from typeDefs
		hasType('JSON', data) ? { JSON: GraphQLJSON } : {} as IResolvers, // required because makeExecutableSchema strips resolvers from typeDefs
	);
};
