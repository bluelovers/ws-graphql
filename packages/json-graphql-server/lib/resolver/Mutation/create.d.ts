import { ISourceDataRowBase, ISourceDataRowBaseCore2 } from '../../types';
export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[]): <R extends ISourceDataRowBaseCore2 | Partial<T>>(_: any, entity: R) => T & R;
