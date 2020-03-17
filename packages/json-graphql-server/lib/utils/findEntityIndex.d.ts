import { ISourceDataRowBaseCore } from '../types';
export default function findEntityIndex<T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(id: string, entityData: T[]): number;
