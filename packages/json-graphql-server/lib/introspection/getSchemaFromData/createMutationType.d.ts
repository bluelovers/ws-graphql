import { GraphQLObjectType } from 'graphql';
import { ISourceDataRowBase, IOptions } from '../../types';
import { IRuntime } from '../getSchemaFromData';
export default function createMutationType<T extends ISourceDataRowBase = ISourceDataRowBase>({ data, types, typesByName, }: IRuntime<T>, options?: IOptions): GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
