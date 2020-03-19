import { ISortOrderDirectionInput } from './sortOrderDirection';
import { ITSRequireAtLeastOne } from 'ts-type';
export default function sortEntryFields<T extends Record<string, any>, K extends keyof T | string>({ items, sortField, sortFields, sortOrder, }: {
    items: T[];
    sortOrder?: ISortOrderDirectionInput;
} & ITSRequireAtLeastOne<{
    sortField?: K;
    sortFields?: K[];
}>): T[];
