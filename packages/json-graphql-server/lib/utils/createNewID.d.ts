import { ISourceDataRowBase, ISourceDataRowBaseCore2 } from '../types';
export default function createNewID<R extends Partial<T> | ISourceDataRowBaseCore2, T extends ISourceDataRowBase = ISourceDataRowBase>(_: any, entity: R, entityData: T[]): any;
