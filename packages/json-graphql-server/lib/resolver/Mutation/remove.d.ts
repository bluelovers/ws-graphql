import { ISourceDataRowBaseCore } from '../../types';
export default function <T extends Partial<ISourceDataRowBaseCore> = Partial<ISourceDataRowBaseCore>>(entityData?: T[]): (_: any, { id }: Partial<ISourceDataRowBaseCore>) => T;
