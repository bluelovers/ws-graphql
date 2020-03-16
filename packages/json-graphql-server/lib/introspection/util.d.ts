import { GraphQLScalarType, GraphQLList, GraphQLNonNull, GraphQLType } from 'graphql';
export declare function isNumeric(value: any): value is number;
export declare function valuesAreNumeric(values: any[]): values is number[];
export declare function isInteger(value: any): value is number;
export declare function valuesAreInteger(values: any[]): values is number[];
export declare function isBoolean(value: any): value is boolean;
export declare function valuesAreBoolean(values: any[]): values is boolean[];
export declare function isString(value: any): value is string;
export declare function valuesAreString(values: any[]): values is string[];
export declare function isArray(value: any): value is any[];
export declare function valuesAreArray(values: any[]): values is any[][];
export declare function isDate(value: any): value is Date;
export declare function valuesAreDate(values: any[]): values is Date[];
export declare function isObject(value: any): boolean;
export declare function valuesAreObject(values: any[]): boolean;
export declare function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T, isRequired: true): GraphQLNonNull<T>;
export declare function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T, isRequired?: false): T;
export declare function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T, isRequired: boolean): GraphQLNonNull<T> | T;