import { GraphQLScalarType, GraphQLError } from 'graphql';
import { Kind } from 'graphql/language';

export const DateType = new GraphQLScalarType({
	name: 'Date',
	description: 'Date type',
	parseValue(value: number | string)
	{
		// value comes from the client
		return new Date(value); // sent to resolvers
	},
	serialize(value: Date)
	{
		// value comes from resolvers
		return value.toISOString(); // sent to the client
	},
	parseLiteral(ast)
	{
		// ast comes from parsing the query
		// this is where you can validate and transform
		if (ast.kind !== Kind.STRING)
		{
			throw new GraphQLError(
				`Query error: Can only parse dates strings, got a: ${ast.kind}`,
				[ast],
			);
		}
		if (isNaN(Date.parse(ast.value)))
		{
			throw new GraphQLError(`Query error: not a valid date`, [ast]);
		}
		return new Date(ast.value);
	},
});

export default DateType
