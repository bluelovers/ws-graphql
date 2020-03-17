import { ISourceDataRowBase } from '../../types';
import { findEntityIndex } from '../utils';

export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[] = [])
{
	return function (_, params: T)
	{
		let updatedEntity: T = undefined;
		if (params.id != null)
		{
			const indexOfEntity = findEntityIndex(params.id, entityData);

			if (indexOfEntity !== -1)
			{
				entityData[indexOfEntity] = Object.assign(
					{},
					entityData[indexOfEntity],
					params,
				);
				updatedEntity = entityData[indexOfEntity];
			}
		}
		return updatedEntity;
	}
}
