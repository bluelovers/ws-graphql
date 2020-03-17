import { GraphQLObjectType } from 'graphql';
import { ISourceDataRowBase, ISourceDataRowBaseCore } from '../../types';
import { IRuntime } from '../getSchemaFromData';
export default function createSchemaQueryType<T extends ISourceDataRowBaseCore = ISourceDataRowBase>({ data, types, typesByName, }: IRuntime<T>): GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
