import applyFilters from './applyFilters';
import { ISourceDataRowBase, IQueryBase, ISortOrder, IFieldResolverWithReturnValue, IFilter } from '../../types';
import sortOrderDirection from '../../utils/sortOrderDirection';
import sortEntryFields from '../../utils/sortEntryFields';
import sliceArrayByPage from '../../utils/sliceArrayByPage';

export default function all<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = []): IFieldResolverWithReturnValue<IQueryBase, T[]>
{
	return function (
		_,
		{
			sortField,
			sortFields,
			sortOrder = 'asc',
			page,
			perPage = 25,
			filter = {}
		}: IQueryBase,
	)
	{
		let items = [...entityData];

		if (sortField != null || sortFields?.length)
		{
			items = sortEntryFields({
				items,
				sortField,
				sortFields,
				sortOrder,
			});
		}

		items = applyFilters(items, filter);

		if (page !== undefined && page !== null && perPage)
		{
			items = sliceArrayByPage(items, page, perPage);
		}

		return items;
	};
}
