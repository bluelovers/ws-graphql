import { ISourceDataRowBase } from '../../types';
import { IRuntime } from '../getSchemaFromData';
export default function createSchemaExtension<T = ISourceDataRowBase>({ data, types, typesByName, }: IRuntime<T>): string;
