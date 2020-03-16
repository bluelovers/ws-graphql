import { GraphQLList, GraphQLScalarType, GraphQLType } from 'graphql';
export default function getTypeFromValues(name: string, values?: any[], isRequired?: boolean): GraphQLScalarType | GraphQLList<GraphQLType>;
