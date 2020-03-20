import { GraphQLScalarType, GraphQLList, GraphQLType, GraphQLNonNull } from 'graphql';

export function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T,
	isRequired: true,
): GraphQLNonNull<T>
export function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T,
	isRequired?: false,
): T
export function requiredTypeOrNormal<T extends GraphQLScalarType | GraphQLList<GraphQLType>>(type: T,
	isRequired: boolean,
): GraphQLNonNull<T> | T
export function requiredTypeOrNormal(type: GraphQLScalarType | GraphQLList<GraphQLType>, isRequired: boolean)
{
	return isRequired ? new GraphQLNonNull(type) : type
}

export default requiredTypeOrNormal
