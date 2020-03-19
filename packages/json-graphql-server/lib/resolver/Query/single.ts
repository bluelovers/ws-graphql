import { ISourceDataRowBaseCore, IFieldResolverWithReturnValue } from '../../types';
import { IFieldResolver } from 'graphql-tools/dist/Interfaces';

export default function single<T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData: T[] = []): IFieldResolverWithReturnValue<Partial<ISourceDataRowBaseCore>, T>
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
