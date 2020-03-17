import { ISourceDataRowBase, ISourceDataRowBaseCore } from '../../types';
import findEntityIndex from '../../utils/findEntityIndex';

export default function <T extends Partial<ISourceDataRowBaseCore> = Partial<ISourceDataRowBaseCore>>(entityData: T[] = [])
{
	return function (_, { id }: Partial<ISourceDataRowBaseCore>)
	{
		let removedEntity: T = undefined;
		if (id != null)
		{
			const indexOfEntity = findEntityIndex(id, entityData as any);

			if (indexOfEntity !== -1)
			{
				removedEntity = entityData.splice(indexOfEntity, 1)[0];
			}
		}
		return removedEntity;
	}
}
