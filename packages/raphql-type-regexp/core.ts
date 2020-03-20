import { GraphQLScalarTypeConfig } from 'graphql/type/definition';
import { GraphQLScalarType } from 'graphql';
import { parseLiteral, parseValue, serialize } from './util';

export function createNewGraphQLRegExpType(config?: Partial<GraphQLScalarTypeConfig<RegExp, RegExp>>)
{
	return new GraphQLScalarType({
		name: 'RegExp',
		description: 'JS RegExp represented as string',
		serialize,
		parseValue,
		parseLiteral,
		...config,
	})
}

export default createNewGraphQLRegExpType
