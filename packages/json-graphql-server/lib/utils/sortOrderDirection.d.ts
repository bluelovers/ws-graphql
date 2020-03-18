import { ISortOrder } from '../types';
export declare const enum EnumOrderDirection {
    ASC = 1,
    DESC = -1
}
export default function sortOrderDirection(sortOrder: ISortOrder | string | boolean | EnumOrderDirection | 1 | -1): EnumOrderDirection.ASC | EnumOrderDirection.DESC;
