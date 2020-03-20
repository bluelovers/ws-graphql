import { GraphQLScalarType, GraphQLError } from 'graphql';
import { Kind } from 'graphql/language';
import { inspect } from 'util';
import { parseRegularExpressionString } from 'regexp-cjk/lib/getSource';
import { ValueNode } from 'graphql/language/ast';
import { valueOfValueNode, IVariables } from '../@graphql-lazy/parse-value-node/index';

export type IRegExpObjectLike = {
	source: string,
	flags?: string,
};

export function serialize<T extends RegExp>(value: T)
{
	return value.toString();
}

export function parseValue(value: RegExp | string | IRegExpObjectLike)
{
	try
	{
		if (value instanceof RegExp)
		{
			return value
		}

		if (typeof value === 'string')
		{
			let m = parseRegularExpressionString(value);

			if (m)
			{
				return new RegExp(m.source, m.flags);
			}
		}
		else if (typeof value?.source === 'string')
		{
			return new RegExp(value.source, value.flags);
		}

		const msg = `Expected RegExp/string but got: ${inspect(value)}`

		throw new GraphQLError(msg)
	}
	catch (e)
	{
		if (!(e instanceof GraphQLError))
		{
			e = new GraphQLError(e);
		}
		throw e
	}
}

export function parseLiteral(ast: ValueNode, variables?: IVariables)
{
	switch (ast.kind)
	{
		case Kind.OBJECT:
			let map = valueOfValueNode<IRegExpObjectLike>(ast, variables);
			return parseValue(map);
		case Kind.STRING:
			return parseValue(ast.value);
		case Kind.VARIABLE:
			const name = ast.name.value
			return variables ? parseValue(variables[name]) : undefined
		default:
			throw new GraphQLError(`not support type ${inspect(ast.kind)}, got ${inspect(ast)}`);
	}
}

export const GraphQLRegExpType = new GraphQLScalarType({
	name: 'RegExp',
	description: 'JS RegExp represented as string',
	serialize,
	parseValue,
	parseLiteral,
})

export default GraphQLRegExpType;
