import { ISourceDataRowBase, IQueryBase, IFieldResolverWithReturnValue } from '../../types';
export default function all<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[]): IFieldResolverWithReturnValue<IQueryBase, T[]>;
