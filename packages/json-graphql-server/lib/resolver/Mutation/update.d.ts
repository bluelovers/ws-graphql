import { ISourceDataRowBaseCore, ISourceDataRowBaseCore2, IOptions } from '../../types';
export default function <T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData?: T[], options?: IOptions): <R extends ISourceDataRowBaseCore2 | Partial<T>>(_: any, params: R) => T & R;
