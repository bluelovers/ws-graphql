import { GraphQLObjectType } from 'graphql';
import { ISourceDataRowBase, ISourceDataRowBaseCore, IOptions } from '../../types';
import { IRuntime } from '../getSchemaFromData';
export default function createSchemaQueryType<T extends ISourceDataRowBaseCore = ISourceDataRowBase>({ data, types, typesByName, }: IRuntime<T>, options?: IOptions): GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
