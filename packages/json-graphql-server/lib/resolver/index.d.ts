import { ISourceDataRoot } from '../types';
export declare function getQueryResolvers(entityName: string, data: any): {
    [x: string]: ((_: any, { sortField, sortOrder, page, perPage, filter }: {
        sortField?: any;
        sortOrder?: any;
        page?: any;
        perPage?: any;
        filter?: any;
    }) => any[]) | ((_: any, { filter }: {
        filter?: {};
    }) => {
        count: number;
    }) | ((_: any, { id }: {
        id?: any;
    }) => any);
};
export declare function getMutationResolvers(entityName: string, data: any): {
    [x: string]: (_: any, { id }: {
        id?: any;
    }) => any;
};
export default function resolver(data: ISourceDataRoot): any;
