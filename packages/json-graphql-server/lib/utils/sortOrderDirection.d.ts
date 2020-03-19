import { ISortOrder } from '../types';
export declare const enum EnumOrderDirection {
    ASC = 1,
    DESC = -1
}
export declare type ISortOrderDirection = EnumOrderDirection.ASC | EnumOrderDirection.DESC | 1 | -1;
export declare type ISortOrderDirectionInput = ISortOrder | string | boolean | ISortOrderDirection;
export default function sortOrderDirection(sortOrder: ISortOrderDirectionInput): ISortOrderDirection;
