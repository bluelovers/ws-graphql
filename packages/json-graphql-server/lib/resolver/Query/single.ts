import { ISourceDataRowBaseCore } from '../../types';

export default function <T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData: T[] = [])
{
	return function (_, { id }: Partial<ISourceDataRowBaseCore>)
	{
		if (id == null)
		{
			return;
		}

		return entityData.find(d => d.id == id);
	}
}
