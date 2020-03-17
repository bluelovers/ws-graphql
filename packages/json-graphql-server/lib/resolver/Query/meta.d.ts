import { ISourceDataRowBase, IFilter } from '../../types';
export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData: T[]): (_: any, { filter }: {
    filter?: IFilter<Record<string, any>>;
}) => {
    count: number;
};
