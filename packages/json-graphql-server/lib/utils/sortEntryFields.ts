import sortOrderDirection, { ISortOrderDirectionInput } from './sortOrderDirection';
import { ISortOrder } from '../types';
import { ITSRequireAtLeastOne } from 'ts-type';
import { lazy_unique_overwrite } from 'array-hyper-unique';

export default function sortEntryFields<T extends Record<string, any>, K extends keyof T | string>({
	items,

	sortField,
	sortFields,

	sortOrder,
}: {
	items: T[],
	sortOrder?: ISortOrderDirectionInput,
} & ITSRequireAtLeastOne<{
	/**
	 * 依照單一屬性排序
	 */
	sortField?: K,
	/**
	 * 依照多個屬性來排序
	 */
	sortFields?: K[],
}>)
{
	if (sortField != null || sortFields?.length)
	{
		if (sortFields?.length)
		{
			sortFields = [...sortFields];

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

			if (sortFields?.length)
			{
				lazy_unique_overwrite(sortFields)
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
