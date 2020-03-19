import { ISourceDataRoot, ISourceDataRowBase, ISourceDataRowBaseCore, IOptions, IResolversLazy, IFieldResolverWithReturnValue, IFilter, IQueryBase } from '../types';
import { IResolvers } from 'graphql-tools';
export declare function getQueryResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, entityData: T[]): {
    [x: string]: IFieldResolverWithReturnValue<IQueryBase, T[]> | IFieldResolverWithReturnValue<{
        filter?: IFilter<Record<string, any>>;
    }, {
        count: number;
    }> | IFieldResolverWithReturnValue<Partial<ISourceDataRowBaseCore>, T>;
};
export declare function getMutationResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, entityData: T[]): {
    [x: string]: (_: any, { id }: Partial<ISourceDataRowBaseCore>) => T;
};
export declare function createResolversFromData<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>, cb: (key: string, data: ISourceDataRoot<T>) => any): IResolvers<any, any>;
export default function resolver<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>, options?: IOptions): IResolversLazy;
