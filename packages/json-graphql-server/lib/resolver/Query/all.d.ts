import { ISourceDataRowBase, IQueryBase, IFieldResolverWithReturnValue, IOptions } from '../../types';
export default function all<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[], options?: IOptions): IFieldResolverWithReturnValue<IQueryBase<T>, T[]>;
