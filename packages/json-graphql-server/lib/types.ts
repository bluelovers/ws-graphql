/**
 * Created by user on 2020/3/16.
 */

export type IFilter<T = Record<string, any>> = IFilterBase & T

export type ISortOrder = 'asc' | 'desc';

export interface IQueryBase
{
	sortField?: string,
	sortOrder?: ISortOrder | string,
	page?: number,
	perPage?: number,
	filter?: IFilter
}

export interface IFilterBase
{
	ids?: (number)[],
	q?: string,
}

export interface ISourceDataRowBaseCore
{
	id
}

export type ISourceDataRowBase = Record<string, any> & ISourceDataRowBaseCore

export type ISourceDataRoot<T extends ISourceDataRowBase = ISourceDataRowBase> = Record<string, T[]>

