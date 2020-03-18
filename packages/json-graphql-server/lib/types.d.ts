/**
 * Created by user on 2020/3/16.
 */
import { IResolvers } from 'graphql-tools';
export declare type IFilter<T = Record<string, any>> = IFilterBase & T;
export declare type ISortOrder = 'asc' | 'desc';
export interface IQueryBase {
    sortField?: string;
    sortOrder?: ISortOrder | string;
    page?: number;
    perPage?: number;
    filter?: IFilter;
}
export interface IFilterBase {
    ids?: (number)[];
    q?: string;
}
export interface ISourceDataRowBaseCore {
    id: any;
}
export interface ISourceDataRowBaseCore2 extends Record<string, any> {
}
export interface ISourceDataRowBase extends ISourceDataRowBaseCore2, ISourceDataRowBaseCore {
}
export declare type ISourceDataRoot2<T extends ISourceDataRowBase = ISourceDataRowBase> = Record<string, T[]>;
export declare type ISourceDataRoot<T extends ISourceDataRowBase = ISourceDataRowBase> = Record<string, ISourceDataRowBase[]>;
export interface IOptions {
}
export interface IResolversLazy extends IResolvers {
    Query: IResolvers;
    Mutation: IResolvers;
}
