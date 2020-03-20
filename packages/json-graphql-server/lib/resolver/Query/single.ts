import { ISourceDataRowBaseCore, IFieldResolverWithReturnValue, IOptions } from '../../types';
import { IFieldResolver } from 'graphql-tools/dist/Interfaces';

export default function single<T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData: T[] = [], options: IOptions = {}): IFieldResolverWithReturnValue<Partial<ISourceDataRowBaseCore>, T>
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
