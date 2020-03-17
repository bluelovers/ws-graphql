import applyFilters from './applyFilters';
import { ISourceDataRowBase, IQueryBase, ISortOrder } from '../../types';

export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = [])
{
	return function (
		_,
		{
			sortField,
			sortOrder = 'asc',
			page,
			perPage = 25,
			filter = {}
		}: IQueryBase,
	)
	{
		let items = [...entityData];

		if (sortField)
		{
			const direction = sortOrder.toLowerCase() as ISortOrder == 'asc' ? 1 : -1;
			items = items.sort((a, b) =>
			{
				if (a[sortField] > b[sortField])
				{
					return direction;
				}
				if (a[sortField] < b[sortField])
				{
					return -1 * direction;
				}
				return 0;
			});
		}

		items = applyFilters(items, filter);

		if (page !== undefined && perPage)
		{
			items = items.slice(page * perPage, page * perPage + perPage);
		}

		return items;
	};
}
