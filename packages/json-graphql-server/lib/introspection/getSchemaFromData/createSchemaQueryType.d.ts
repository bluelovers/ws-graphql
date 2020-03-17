import { GraphQLObjectType } from 'graphql';
import { ISourceDataRowBase } from '../../types';
import { IRuntime } from '../getSchemaFromData';
export default function createSchemaQueryType<T = ISourceDataRowBase>({ data, types, typesByName, }: IRuntime<T>): GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
