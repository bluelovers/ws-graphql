import { ISourceDataRowBaseCore } from '../../types';
export default function <T extends ISourceDataRowBaseCore = ISourceDataRowBaseCore>(entityData?: T[]): (_: any, params: T) => T;
