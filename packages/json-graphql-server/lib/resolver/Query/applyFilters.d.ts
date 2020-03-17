import { IFilter, ISourceDataRowBase } from '../../types';
export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[], filter?: IFilter): T[];
