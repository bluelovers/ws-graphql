import { ISourceDataRowBase, ISourceDataRowBaseCore2 } from '../types';

export default function createNewID<R extends Partial<T> | ISourceDataRowBaseCore2, T extends ISourceDataRowBase = ISourceDataRowBase>(_, entity: R, entityData: T[])
{
	const newId =
		entityData.length > 0 ? entityData[entityData.length - 1].id + 1 : 0;

	return newId
}
