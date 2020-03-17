import { ISourceDataRowBase, ISourceDataRowBaseCore } from '../../types';
import { IRuntime } from '../getSchemaFromData';
export default function createSchemaExtension<T extends ISourceDataRowBaseCore = ISourceDataRowBase>({ data, types, typesByName, }: IRuntime<T>): string;
