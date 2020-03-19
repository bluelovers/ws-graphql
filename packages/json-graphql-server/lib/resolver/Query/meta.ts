import applyFilters from './applyFilters';
import { ISourceDataRowBase, IFilter, ISourceDataRowBaseCore, IFieldResolverWithReturnValue } from '../../types';
import { IFieldResolver } from 'graphql-tools/dist/Interfaces';

export default function meta<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[]): IFieldResolverWithReturnValue<{
	filter?: IFilter,
}, {
	count: number
}>
{
	return function (_, { filter = {} as IFilter })
	{
		let items = applyFilters(entityData, filter);

		return { count: items.length };
	}
}
