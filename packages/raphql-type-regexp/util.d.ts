/**
 * Created by user on 2020/3/20.
 */
import { ValueNode } from 'graphql/language/ast';
import { IVariables } from '@graphql-lazy/parse-value-node';
export declare type IRegExpObjectLike = {
    source: string;
    flags?: string;
};
export declare type IOptions = {
    createRegExp?(value: RegExp | string | IRegExpObjectLike): RegExp;
};
export declare function serialize<T extends RegExp>(value: T): string;
export declare function createRegExp(value: RegExp | string | IRegExpObjectLike): RegExp;
export declare function parseValue(value: RegExp | string | IRegExpObjectLike, options?: IOptions): RegExp;
export declare function parseLiteral(ast: ValueNode, variables?: IVariables, options?: IOptions): RegExp;
