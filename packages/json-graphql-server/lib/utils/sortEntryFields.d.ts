import { ISortOrderDirectionInput } from './sortOrderDirection';
import { ITSRequireAtLeastOne } from 'ts-type';
export default function sortEntryFields<T extends Record<string, any>, K extends keyof T | string>({ items, sortField, sortFields, sortOrder, }: {
    items: T[];
    sortOrder?: ISortOrderDirectionInput;
} & ITSRequireAtLeastOne<{
    /**
     * 依照單一屬性排序
     */
    sortField?: K;
    /**
     * 依照多個屬性來排序
     */
    sortFields?: K[];
}>): T[];
