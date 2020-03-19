import { ISourceDataRowBase, IFilterByEntry } from '../../types';
export default function applyFilters<T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[], filter?: IFilterByEntry<T>): T[];
