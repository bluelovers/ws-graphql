import { ISourceDataRowBase, IFilter, IFieldResolverWithReturnValue, IOptions } from '../../types';
export default function meta<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[], options?: IOptions): IFieldResolverWithReturnValue<{
    filter?: IFilter;
}, {
    count: number;
}>;
