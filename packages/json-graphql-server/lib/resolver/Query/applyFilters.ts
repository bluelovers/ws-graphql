import { IFilter, ISourceDataRowBase, IFilterByEntry } from '../../types';

export default function applyFilters<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = [], filter: IFilterByEntry<T> = {}): T[]
{
	let filterKeys = Object.keys(filter);

	if (filterKeys.length)
	{
		let {
			ids,
			q,
		} = filter;

		filter = {
			...filter,
		};

		delete filter.ids;
		delete filter.q;

		let items = [...entityData];

		filterKeys = Object.keys(filter);

		if (!ids?.length)
		{
			ids = null;
		}

		items = items
			.filter(d =>
			{

				let bool: boolean = true;

				if (bool && ids !== null)
				{
					bool = ids.some(id => id == d.id)
				}

				if (bool && filterKeys.length)
				{
					bool = filterKeys
						.every(key =>
						{
							if (key.endsWith('_lte'))
							{
								const realKey = key.replace(/(_lte)$/, '');

								bool = d[realKey] <= filter[key]
							}
							else if (key.endsWith('_gte'))
							{
								const realKey = key.replace(/(_gte)$/, '');

								bool = d[realKey] >= filter[key]
							}
							else if (key.endsWith('_lt'))
							{
								const realKey = key.replace(/(_lt)$/, '');

								bool = d[realKey] < filter[key]
							}
							else if (key.endsWith('_gt'))
							{
								const realKey = key.replace(/(_gt)$/, '');

								bool = d[realKey] > filter[key]
							}
							else if (Array.isArray(filter[key]))
							{
								if (Array.isArray(d[key]))
								{
									// array filter and array item value: where all items in values
									bool = filter[key]
										.every(v =>
											d[key]
												.some(itemValue => itemValue == v),
										);
								}
								else
								{
									// where item in values
									bool = filter[key]
										.filter(v => v == d[key])
										.length > 0
								}
							}
							else
							{
								bool = filter[key] instanceof Date
									? +d[key] == +filter[key]
									: d[key] == filter[key]
								;
							}

							return bool;
						})
					;
				}

				if (bool && q != null)
				{
					q = q.toLowerCase();

					bool = Object
						.keys(d)
						.some(key =>
							d[key]
								?.toString()
								.toLowerCase()
								.includes(q)
						)
					;
				}

				return bool;
			})
		;

		return items;
	}

	return entityData
}
