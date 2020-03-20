import { ISourceDataRowBaseCore, IFieldResolverWithReturnValue, IOptions } from '../../types';
export default function single<T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData?: T[], options?: IOptions): IFieldResolverWithReturnValue<Partial<ISourceDataRowBaseCore>, T>;
