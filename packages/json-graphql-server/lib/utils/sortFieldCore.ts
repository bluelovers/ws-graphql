import { ISortOrderDirection } from './sortOrderDirection';

export default function sortFieldCore<T extends Record<string, any>>(a: T,
	b: T,
	sortField: keyof T | string,
	direction: ISortOrderDirection,
)
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
}
