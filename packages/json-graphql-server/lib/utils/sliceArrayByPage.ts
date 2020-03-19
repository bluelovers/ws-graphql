/**
 * Created by user on 2020/3/20.
 */

export default function sliceArrayByPage<T>(items: T[], page: number, perPage: number): T[]
{
	const idx = page * perPage;
	return items.slice(idx, idx + perPage)
}
