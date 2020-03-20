import { GraphQLList, GraphQLScalarType, GraphQLType } from 'graphql';
/**
 * 自動檢測內容對應的 ScalarType
 */
export default function getTypeFromValues(name: string, values?: any[], isRequired?: boolean): GraphQLScalarType | GraphQLList<GraphQLType>;
