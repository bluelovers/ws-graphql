import { GraphQLList, GraphQLScalarType, GraphQLType } from 'graphql';
export declare const enum EnumTypeFromValues {
    NONE = 0,
    Boolean = 1,
    Date = 2,
    String = 3,
    Integer = 4,
    Numeric = 5,
    RegExp = 6,
    Object = 7
}
/**
 * 自動檢測內容對應的 ScalarType
 */
export default function getTypeFromValues(fieldName: string, values?: any[], isRequired?: boolean): GraphQLScalarType | GraphQLList<GraphQLType>;
export declare function scalarTypeFromEnum(_type: EnumTypeFromValues): GraphQLScalarType;
export declare function checkTypeFromValues(values: any[]): EnumTypeFromValues | null;
