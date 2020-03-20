import { ISourceDataRowBase, ISourceDataRowBaseCore2, IFieldResolverParameters } from '../types';

/**
 * 新的 newID 值
 */
export default function createNewID<R extends Partial<T> | ISourceDataRowBaseCore2, T extends ISourceDataRowBase = ISourceDataRowBase>(
	_: IFieldResolverParameters<R>[0],
	entity: R,
	entityData: T[],
	runtime?: {
		context?: IFieldResolverParameters<R>[2],
		info?: IFieldResolverParameters<R>[3],
	},
)
{
	const newID =
		entityData.length > 0 ? entityData[entityData.length - 1].id + 1 : 0;

	return {
		newID,
	}
}
