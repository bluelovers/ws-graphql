import { ISourceDataRowBase } from '../../types';
export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[]): (_: any, entity: T) => T;
