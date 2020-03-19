import { ISourceDataRowBase, IFilter, IFieldResolverWithReturnValue } from '../../types';
export default function meta<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[]): IFieldResolverWithReturnValue<{
    filter?: IFilter;
}, {
    count: number;
}>;
