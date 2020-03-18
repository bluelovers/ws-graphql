/**
 * Created by user on 2020/3/16.
 */
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema, printSchema, GraphQLObjectType } from 'graphql';
import { IExecutableSchemaDefinition } from 'graphql-tools/dist/Interfaces';
import { ITSOverwrite, ITSRequireAtLeastOne, ITSRequiredWith } from 'ts-type';
import getTypesFromData from './introspection/getTypesFromData';
import createSchemaQueryType from './introspection/getSchemaFromData/createSchemaQueryType';
import { IRuntime } from './introspection/getSchemaFromData';
import { GraphQLSchemaConfig } from 'graphql/type/schema';
import createSchemaExtension from './introspection/getSchemaFromData/createSchemaExtension';

export type IFilter<T = Record<string, any>> = IFilterBase & T

export type ISortOrder = 'asc' | 'desc';

export interface IQueryBase
{
	sortField?: string,
	sortOrder?: ISortOrder | string,
	page?: number,
	perPage?: number,
	filter?: IFilter
}

export interface IFilterBase
{
	ids?: (number)[],
	q?: string,
}

export interface ISourceDataRowBaseCore
{
	id
}

export interface ISourceDataRowBaseCore2 extends Record<string, any>
{

}

export interface ISourceDataRowBase extends ISourceDataRowBaseCore2, ISourceDataRowBaseCore
{

}

export type ISourceDataRoot2<T extends ISourceDataRowBase = ISourceDataRowBase> = Record<string, T[]>

export type ISourceDataRoot<T extends ISourceDataRowBase = ISourceDataRowBase> = Record<string, ISourceDataRowBase[]>

export interface IResolversLazy extends IResolvers
{
	Query: IResolvers,
	Mutation: IResolvers,
}

export interface IOptions
{

	before?: {

		createSchemaQueryType?(runtime: IRuntime, data: ISourceDataRoot): IRuntime | null,

		createGraphQLSchema?(runtime: {
			query: GraphQLObjectType,
			mutation: GraphQLObjectType,
		}, data: ISourceDataRoot): {
			graphQLSchemaConfig: ITSRequiredWith<GraphQLSchemaConfig, 'query' | 'mutation' >
		} | null,

		makeExecutableSchema?(runtime: {
			typeDefs: string,
			resolvers: IResolversLazy,
		}, data: ISourceDataRoot): ITSRequiredWith<IExecutableSchemaDefinition & {
			typeDefs?: string,
			resolvers?: IResolversLazy,
		}, 'typeDefs' | 'resolvers'> | null,

	},

	after?: {

		createSchemaExtension?(runtime: IRuntime & {
			schemaExtension: string
		}, data: ISourceDataRoot): {
			schemaExtension: string
		} | null,

		getSchemaFromData?(runtime: {
			schema: GraphQLSchema,
		}, data: ISourceDataRoot): {
			schema: GraphQLSchema,
		} | null,

		getTypesFromData?(runtime: {
			types: GraphQLObjectType[],
		}, data: ISourceDataRoot): {
			types: GraphQLObjectType[],
		} | null,

		printSchema?(runtime: {
			typeDefs: string,
		}, data: ISourceDataRoot): {
			typeDefs: string,
		} | null,

		resolver?(runtime: {
			resolvers: IResolversLazy,
		}, data: ISourceDataRoot): {
			resolvers: IResolversLazy,
		} | null,

		makeExecutableSchema?(runtime: {
			executableSchemaDefinition: IExecutableSchemaDefinition,
			schema: GraphQLSchema,
		}, data: ISourceDataRoot): {
			schema: GraphQLSchema,
		} | null,

	},

}
