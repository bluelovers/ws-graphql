import { ISourceDataRowBaseCore, IFieldResolverWithReturnValue } from '../../types';
export default function single<T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData?: T[]): IFieldResolverWithReturnValue<Partial<ISourceDataRowBaseCore>, T>;
