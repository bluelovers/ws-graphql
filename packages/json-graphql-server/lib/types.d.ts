/**
 * Created by user on 2020/3/16.
 */
import { IResolvers } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import { IExecutableSchemaDefinition } from 'graphql-tools/dist/Interfaces';
import { ITSRequiredWith } from 'ts-type';
export declare type IFilter<T = Record<string, any>> = IFilterBase & T;
export declare type ISortOrder = 'asc' | 'desc';
export interface IQueryBase {
    sortField?: string;
    sortOrder?: ISortOrder | string;
    page?: number;
    perPage?: number;
    filter?: IFilter;
}
export interface IFilterBase {
    ids?: (number)[];
    q?: string;
}
export interface ISourceDataRowBaseCore {
    id: any;
}
export interface ISourceDataRowBaseCore2 extends Record<string, any> {
}
export interface ISourceDataRowBase extends ISourceDataRowBaseCore2, ISourceDataRowBaseCore {
}
export declare type ISourceDataRoot2<T extends ISourceDataRowBase = ISourceDataRowBase> = Record<string, T[]>;
export declare type ISourceDataRoot<T extends ISourceDataRowBase = ISourceDataRowBase> = Record<string, ISourceDataRowBase[]>;
export interface IResolversLazy extends IResolvers {
    Query: IResolvers;
    Mutation: IResolvers;
}
export interface IOptions {
    before?: {
        makeExecutableSchema?(runtime: {
            typeDefs: string;
            resolvers: IResolversLazy;
        }, data: ISourceDataRoot): ITSRequiredWith<IExecutableSchemaDefinition & {
            typeDefs?: string;
            resolvers?: IResolversLazy;
        }, 'typeDefs' | 'resolvers'> | null;
    };
    after?: {
        getSchemaFromData?({ schema: GraphQLSchema, }: {
            schema: any;
        }, data: ISourceDataRoot): {
            schema: GraphQLSchema;
        } | null;
        printSchema?({ typeDefs: string, }: {
            typeDefs: any;
        }, data: ISourceDataRoot): {
            typeDefs: string;
        } | null;
        resolver?(runtime: {
            resolvers: IResolversLazy;
        }, data: ISourceDataRoot): {
            resolvers: IResolversLazy;
        } | null;
        makeExecutableSchema?({ executableSchemaDefinition: IExecutableSchemaDefinition, schema: GraphQLSchema, }: {
            executableSchemaDefinition: any;
            schema: any;
        }, data: ISourceDataRoot): {
            schema: GraphQLSchema;
        } | null;
    };
}
