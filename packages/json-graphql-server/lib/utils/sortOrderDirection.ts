import { ISortOrder } from '../types';

export const enum EnumOrderDirection
{
	ASC = 1,
	DESC = -1,
}

export type ISortOrderDirection = EnumOrderDirection.ASC | EnumOrderDirection.DESC | 1 | -1;

export type ISortOrderDirectionInput = ISortOrder | string | boolean | ISortOrderDirection;

export default function sortOrderDirection(sortOrder: ISortOrderDirectionInput): ISortOrderDirection
{
	if (sortOrder === true || (typeof sortOrder === 'number' && sortOrder > 0) || String(sortOrder).toLowerCase() as ISortOrder == 'asc')
	{
		return EnumOrderDirection.ASC
	}

	return EnumOrderDirection.DESC
}
