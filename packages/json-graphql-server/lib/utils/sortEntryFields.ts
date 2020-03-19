import sortOrderDirection, { ISortOrderDirectionInput } from './sortOrderDirection';
import { ISortOrder } from '../types';
import { ITSRequireAtLeastOne } from 'ts-type';

export default function sortEntryFields<T extends Record<string, any>, K extends keyof T | string>({
	items,

	sortField,
	sortFields,

	sortOrder,
}: {
	items: T[],
	sortOrder?: ISortOrderDirectionInput,
} & ITSRequireAtLeastOne<{
	sortField?: K,
	sortFields?: K[],
}>)
{
	if (sortField != null || sortFields?.length)
	{
		if (sortFields?.length)
		{
			if (sortFields.length === 1 && sortField == null)
			{
				sortField = sortFields[0];
				sortFields = null;
			}
			else if (sortField != null)
			{
				sortFields.unshift(sortField)
				sortField = null;
			}
		}
		else
		{
			sortFields = null;
		}

		const direction = sortOrderDirection(sortOrder);

		if (sortField != null)
		{
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
		else if (sortFields?.length)
		{
			items = items.sort((a, b) =>
			{
				for (const sortField of sortFields)
				{
					if (a[sortField] > b[sortField])
					{
						return direction;
					}
					if (a[sortField] < b[sortField])
					{
						return -1 * direction;
					}
				}

				return 0;
			});
		}
	}

	return items
}
