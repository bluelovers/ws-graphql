import { ISourceDataRowBase, ISourceDataRowBaseCore, ISourceDataRowBaseCore2, IOptions } from '../../types';
import findEntityIndex from '../../utils/findEntityIndex';

export default function <T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData: T[] = [], options: IOptions = {})
{
	return function <R extends Partial<T> | ISourceDataRowBaseCore2>(_, params: R)
	{
		let updatedEntity: T & R = undefined;
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
				// @ts-ignore
				updatedEntity = entityData[indexOfEntity];
			}
		}
		return updatedEntity;
	}
}
