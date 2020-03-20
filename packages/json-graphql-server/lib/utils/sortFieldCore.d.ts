import { ISortOrderDirection } from './sortOrderDirection';
export default function sortFieldCore<T extends Record<string, any>>(a: T, b: T, sortField: keyof T | string, direction: ISortOrderDirection): number;
