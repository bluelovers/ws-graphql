import { ISourceDataRowBase, ISourceDataRowBaseCore } from '../../types';

export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = [])
{
	return function (_, entity: T): T
	{
		const newId =
			entityData.length > 0 ? entityData[entityData.length - 1].id + 1 : 0;
		const newEntity = Object.assign({ id: newId } as ISourceDataRowBaseCore, entity);

		entityData.push(newEntity);
		return newEntity;
	}
}
