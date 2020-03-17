import { ISourceDataRoot, ISourceDataRowBase, ISourceDataRowBaseCore, IOptions } from '../types';
import { IResolvers } from 'graphql-tools';
export declare function getQueryResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, data: T[]): {
    [x: string]: ((_: any, { sortField, sortOrder, page, perPage, filter }: import("../types").IQueryBase) => T[]) | ((_: any, { filter }: {
        filter?: import("../types").IFilter<Record<string, any>>;
    }) => {
        count: number;
    }) | ((_: any, { id }: T) => T);
};
export declare function getMutationResolvers<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(entityName: string, data: T[]): {
    [x: string]: (_: any, entity: T) => T;
};
export declare function createResolversFromData<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>, cb: (key: string, data: ISourceDataRoot<T>) => any): IResolvers<any, any>;
export default function resolver<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(data: ISourceDataRoot<T>, options?: IOptions): IResolvers;
