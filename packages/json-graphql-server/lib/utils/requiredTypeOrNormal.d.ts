import { GraphQLScalarType, GraphQLList, GraphQLType, GraphQLNonNull } from 'graphql';
export declare function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T, isRequired: true): GraphQLNonNull<T>;
export declare function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T, isRequired?: false): T;
export declare function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T, isRequired: boolean): GraphQLNonNull<T> | T;
export default requiredTypeOrNormal;
