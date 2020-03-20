import { ISourceDataRoot, ISourceDataRowBase, ISourceDataRowBaseCore, IOptions, IResolversLazy, IFieldResolverWithReturnValue, IFilter, IQueryBase } from '../types';
import { IResolvers } from 'graphql-tools';
export declare function getQueryResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, entityData: T[], options?: IOptions): {
    [x: string]: IFieldResolverWithReturnValue<{
        filter?: IFilter<Record<string, any>>;
    }, {
        count: number;
    }> | IFieldResolverWithReturnValue<IQueryBase<T>, T[]> | IFieldResolverWithReturnValue<Partial<ISourceDataRowBaseCore>, T>;
};
export declare function getMutationResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, entityData: T[], options?: IOptions): {
    [x: string]: (<R extends import("../types").ISourceDataRowBaseCore2 | Partial<T>>(_: any, entity: R, context?: any, info?: import("graphql").GraphQLResolveInfo & {
        mergeInfo: import("graphql-tools").MergeInfo;
    }) => T & R) | ((_: any, { id }: Partial<ISourceDataRowBaseCore>) => T);
};
export declare function createResolversFromData<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>, cb: (key: string, data: ISourceDataRoot<T>, options?: IOptions) => any, options?: IOptions): IResolvers<any, any>;
export default function resolver<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>, options?: IOptions): IResolversLazy;
