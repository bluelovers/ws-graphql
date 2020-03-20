import applyFilters from './applyFilters';
import {
	ISourceDataRowBase,
	IQueryBase,
	ISortOrder,
	IFieldResolverWithReturnValue,
	IFilter,
	IOptions,
} from '../../types';
import sortOrderDirection from '../../utils/sortOrderDirection';
import sortEntryFields from '../../utils/sortEntryFields';
import sliceArrayByPage from '../../utils/sliceArrayByPage';

export default function all<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = [], options: IOptions = {}): IFieldResolverWithReturnValue<IQueryBase<T>, T[]>
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
		},
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
