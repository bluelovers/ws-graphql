import { ISourceDataRowBase, IQueryBase } from '../../types';
export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[]): (_: any, { sortField, sortOrder, page, perPage, filter }: IQueryBase) => T[];
