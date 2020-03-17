import { ISortOrder } from '../types';

export default function sortOrderDirection(sortOrder: ISortOrder | string)
{
	return sortOrder.toLowerCase() as ISortOrder == 'asc' ? 1 : -1
}
