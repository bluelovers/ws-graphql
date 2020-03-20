import { ISourceDataRowBaseCore, IOptions } from '../../types';
export default function <T extends Partial<ISourceDataRowBaseCore> = Partial<ISourceDataRowBaseCore>>(entityData?: T[], options?: IOptions): (_: any, { id }: Partial<ISourceDataRowBaseCore>) => T;
