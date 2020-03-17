import { ISourceDataRowBaseCore } from '../types';

export default function findEntityIndex<T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(id: string, entityData: T[])
{
	const stringId = id.toString();
	return entityData.findIndex(
		e => e.id != null && e.id.toString() === stringId,
	);
}
