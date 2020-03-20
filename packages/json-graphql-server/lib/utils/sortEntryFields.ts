import sortOrderDirection, { ISortOrderDirectionInput } from './sortOrderDirection';
import { ITSRequireAtLeastOne } from 'ts-type';
import { lazy_unique_overwrite } from 'array-hyper-unique';
import sortFieldCore from './sortFieldCore';

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

			if (sortFields?.length)
			{
				lazy_unique_overwrite(sortFields)
			}

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
				return sortFieldCore(a, b, sortField, direction);
			});
		}
		else if (sortFields?.length)
		{
			items = items.sort((a, b) =>
			{
				for (const sortField of sortFields)
				{
					let c = sortFieldCore(a, b, sortField, direction);

					if (c)
					{
						return c
					}
				}

				return 0;
			});
		}
	}

	return items
}

