import { GraphQLScalarType } from 'graphql';
import { ValueNode } from 'graphql/language/ast';
import { IVariables } from '../@graphql-lazy/parse-value-node/index';
export declare type IRegExpObjectLike = {
    source: string;
    flags?: string;
};
export declare function serialize<T extends RegExp>(value: T): string;
export declare function parseValue(value: RegExp | string | IRegExpObjectLike): RegExp;
export declare function parseLiteral(ast: ValueNode, variables?: IVariables): RegExp;
export declare const GraphQLRegExpType: GraphQLScalarType;
export default GraphQLRegExpType;
