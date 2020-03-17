import { ISourceDataRowBase } from '../../types';
export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[]): (_: any, params: T) => T;
