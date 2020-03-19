import { IFilter, ISourceDataRowBase } from '../../types';
export default function applyFilters<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[], filter?: IFilter): T[];
