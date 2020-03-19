import applyFilters from './applyFilters';
import { ISourceDataRowBase, IQueryBase, ISortOrder } from '../../types';
import sortOrderDirection from '../../utils/sortOrderDirection';
import sortEntryFields from '../../utils/sortEntryFields';

export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = [])
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
			items = items.slice(page * perPage, page * perPage + perPage);
		}

		return items;
	};
}
