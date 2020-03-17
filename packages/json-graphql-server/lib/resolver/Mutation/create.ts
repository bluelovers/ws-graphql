import { ISourceDataRowBase, ISourceDataRowBaseCore, ISourceDataRowBaseCore2 } from '../../types';
import createNewID from '../../utils/createNewID';

export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = [])
{
	return function <R extends Partial<T> | ISourceDataRowBaseCore2>(_, entity: R)
	{
		const id = createNewID(_, entity, entityData);
		const newEntity = Object.assign({} as T, entity, { id } as ISourceDataRowBaseCore) as T & R;

		entityData.push(newEntity);
		return newEntity;
	}
}
