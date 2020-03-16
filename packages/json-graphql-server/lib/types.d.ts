/**
 * Created by user on 2020/3/16.
 */
export declare type IFilter<T = Record<string, any>> = IFilterBase & T;
export interface IFilterBase {
    ids?: (number)[];
    q?: string;
}
export declare type ISourceDataRowBase = Record<string, any>;
export declare type ISourceDataRoot<T = ISourceDataRowBase> = Record<string, T>;
