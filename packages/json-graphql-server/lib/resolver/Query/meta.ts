import applyFilters from './applyFilters';
import { ISourceDataRowBase, IFilter } from '../../types';

export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[])
{
	return function (_, { filter = {} as IFilter })
	{
		let items = applyFilters(entityData, filter);

		return { count: items.length };
	}
}
