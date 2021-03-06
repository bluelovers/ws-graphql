/**
 * Created by user on 2020/3/16.
 */
import { IResolvers, IFieldResolver } from 'graphql-tools';
import { GraphQLSchema, GraphQLObjectType, GraphQLObjectTypeConfig } from 'graphql';
import { IExecutableSchemaDefinition } from 'graphql-tools/dist/Interfaces';
import { ITSOverwrite, ITSRequiredWith, ITSPartialRecord } from 'ts-type';
import { IRuntime } from './introspection/getSchemaFromData';
import { GraphQLSchemaConfig } from 'graphql/type/schema';
import { GraphQLFieldConfigMap, GraphQLInputObjectTypeConfig, GraphQLScalarType, GraphQLType, GraphQLList } from 'graphql/type/definition';
export declare type IFilter<T = Record<string, any>> = IFilterBase & Record<string, any> & T;
export declare type ISortOrder = 'asc' | 'desc';
export interface IQueryBase<T extends Record<string, any> = Record<string, any>> {
    sortField?: string | keyof T;
    sortFields?: (string | keyof T)[];
    sortOrder?: ISortOrder | string;
    page?: number;
    perPage?: number;
    filter?: IFilterByEntry<T>;
}
export declare type IFilterByEntry<T extends Record<string, any>> = IFilter<ITSPartialRecord<keyof T, any>>;
export declare type IFilterByKeys<T extends string> = IFilter<ITSPartialRecord<T, any>>;
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
    /**
     * each hook only run once
     */
    before?: {
        createSchemaQueryType?(runtime: IRuntime, data: ISourceDataRoot): IRuntime;
        createGraphQLSchema?(runtime: {
            query: GraphQLObjectType;
            mutation: GraphQLObjectType;
        }, data: ISourceDataRoot): {
            graphQLSchemaConfig: ITSRequiredWith<GraphQLSchemaConfig, 'query' | 'mutation'>;
        };
        makeExecutableSchema?(runtime: {
            typeDefs: string;
            resolvers: IResolversLazy;
        }, data: ISourceDataRoot): ITSRequiredWith<IExecutableSchemaDefinition & {
            typeDefs?: string;
            resolvers?: IResolversLazy;
        }, 'typeDefs' | 'resolvers'>;
    };
    /**
     * each hook only run once
     */
    after?: {
        getTypesFromData?(runtime: {
            types: GraphQLObjectType[];
        }, data: ISourceDataRoot): {
            types: GraphQLObjectType[];
        };
        createSchemaExtension?(runtime: IRuntime & {
            schemaExtension: string;
        }, data: ISourceDataRoot): {
            schemaExtension: string;
        };
        getSchemaFromData?(runtime: {
            schema: GraphQLSchema;
        }, data: ISourceDataRoot): {
            schema: GraphQLSchema;
        };
        printSchema?(runtime: {
            typeDefs: string;
        }, data: ISourceDataRoot): {
            typeDefs: string;
        };
        resolver?(runtime: {
            resolvers: IResolversLazy;
        }, data: ISourceDataRoot): {
            resolvers: IResolversLazy;
        };
        makeExecutableSchema?(runtime: {
            executableSchemaDefinition: IExecutableSchemaDefinition;
            schema: GraphQLSchema;
        }, data: ISourceDataRoot): {
            schema: GraphQLSchema;
        };
    };
    /**
     * each hook run multi time
     */
    on?: {
        getTypesFromData?<Data extends ISourceDataRoot = ISourceDataRoot>(runtime: {
            keyName: keyof Data | string;
            typeObject: IGraphQLObjectTypeConfig;
        }, data: Data): {
            typeObject: IGraphQLObjectTypeConfig | GraphQLObjectTypeConfig<any, any>;
        };
        getFilterTypesFromData?<Data extends ISourceDataRoot = ISourceDataRoot>(runtime: {
            keyName: keyof Data | string;
            typeKey: string;
            graphQLInputObjectTypeConfig: IGraphQLInputFilterObjectTypeConfig;
        }, data: Data): {
            graphQLInputObjectTypeConfig: IGraphQLInputFilterObjectTypeConfig;
        };
    };
    util?: {
        /**
         * 自訂新的 newID 值，請確保值 newID 是唯一的
         */
        createNewID?<R extends Partial<T> | ISourceDataRowBaseCore2, T extends ISourceDataRowBase = ISourceDataRowBase>(_: IFieldResolverParameters<R>[0], entity: R, entityData: T[], runtime?: {
            context?: IFieldResolverParameters<R>[2];
            info?: IFieldResolverParameters<R>[3];
        }): {
            newID: NonNullable<any>;
        };
    };
}
/**
 * 用於 getTypesFromData
 */
export declare type IGraphQLObjectTypeConfig = ITSOverwrite<GraphQLObjectTypeConfig<any, any>, {
    name: string;
    fields: GraphQLFieldConfigMap<any, any>;
}>;
/**
 * 用於 getFilterTypesFromData
 */
export declare type IGraphQLInputFilterObjectTypeConfig = ITSOverwrite<GraphQLInputObjectTypeConfig, {
    name: string;
    fields: GraphQLInputObjectTypeConfig["fields"] & {
        q: {
            type: GraphQLScalarType;
        };
        ids: {
            type: GraphQLList<GraphQLType>;
        };
    };
}>;
export declare type IFieldResolverParameters<TArgs = Record<string, any>> = Parameters<IFieldResolver<any, any, TArgs>>;
export declare type IFieldResolverWithReturnValue<TArgs = Record<string, any>, R = any> = (source: IFieldResolverParameters<TArgs>[0], args: IFieldResolverParameters<TArgs>[1], context?: IFieldResolverParameters<TArgs>[2], info?: IFieldResolverParameters<TArgs>[3]) => R;
export declare type ICreateNewIDFn<R extends Partial<T> | ISourceDataRowBaseCore2, T extends ISourceDataRowBase = ISourceDataRowBase> = (_: IFieldResolverParameters<R>[0], entity: R, entityData: T[], runtime?: {
    context?: IFieldResolverParameters<R>[2];
    info?: IFieldResolverParameters<R>[3];
}) => {
    newID: NonNullable<any>;
};
