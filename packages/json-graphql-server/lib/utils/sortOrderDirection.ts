import { ISortOrder } from '../types';

export const enum EnumOrderDirection
{
	ASC = 1,
	DESC = -1,
}

export default function sortOrderDirection(sortOrder: ISortOrder | string | boolean | EnumOrderDirection | 1 | -1): EnumOrderDirection.ASC | EnumOrderDirection.DESC
{
	if (sortOrder === true || (typeof sortOrder === 'number' && sortOrder > 0) || String(sortOrder).toLowerCase() as ISortOrder == 'asc')
	{
		return EnumOrderDirection.ASC
	}

	return EnumOrderDirection.DESC
}
