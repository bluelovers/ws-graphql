import { ISourceDataRowBaseCore } from '../types';

export function findEntityIndex<T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(id: string, entityData: T[])
{
	const stringId = id.toString();
	const indexOfEntity = entityData.findIndex(
		e => e.id != null && e.id.toString() === stringId,
	);

	return indexOfEntity
}
