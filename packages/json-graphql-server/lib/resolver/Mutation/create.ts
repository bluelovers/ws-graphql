import {
	ISourceDataRowBase,
	ISourceDataRowBaseCore,
	ISourceDataRowBaseCore2,
	IFieldResolverWithReturnValue, IQueryBase, IFieldResolverParameters, IOptions,
} from '../../types';
import createNewID from '../../utils/createNewID';

export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = [], options: IOptions = {})
{
	const createNewIDFn = options?.util?.createNewID ?? createNewID;

	return function <R extends Partial<T> | ISourceDataRowBaseCore2>(
		_: IFieldResolverParameters<R>[0],
		entity: R,
		context?: IFieldResolverParameters<R>[2],
		info?: IFieldResolverParameters<R>[3]
	)
	{
		const id = createNewIDFn(_, entity, entityData, {
			context,
			info,
		})?.newID;

		if (id == null)
		{
			throw new TypeError(`createNewID().newId should not null`);
		}

		const newEntity = Object.assign({} as T, entity, { id } as ISourceDataRowBaseCore) as T & R;

		entityData.push(newEntity);
		return newEntity;
	}
}
