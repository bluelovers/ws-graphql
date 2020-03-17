import { ISourceDataRowBaseCore, ISourceDataRowBaseCore2 } from '../../types';
export default function <T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData?: T[]): <R extends ISourceDataRowBaseCore2 | Partial<T>>(_: any, params: R) => T & R;
