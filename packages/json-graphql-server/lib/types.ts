/**
 * Created by user on 2020/3/16.
 */

export type IFilter<T = Record<string, any>> = IFilterBase & T

export interface IFilterBase
{
	ids?: (number)[],
	q?: string,
}

export type ISourceDataRowBase = Record<string, any>

export type ISourceDataRoot<T = ISourceDataRowBase> = Record<string, T>
