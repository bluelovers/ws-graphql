/**
 * Created by user on 2020/3/20.
 */

import { ValueNode } from 'graphql/language/ast';
import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql';
import { inspect } from "util";
import { parseRegularExpressionString } from 'regexp-cjk/lib/getSource';
import valueOfValueNode, { IVariables } from '@graphql-lazy/parse-value-node';

export type IRegExpObjectLike = {
	source: string,
	flags?: string,
};

export type IOptions = {
	createRegExp?(value: RegExp | string | IRegExpObjectLike): RegExp
};

export function serialize<T extends RegExp>(value: T)
{
	return value.toString();
}

export function createRegExp(value: RegExp | string | IRegExpObjectLike)
{
	if (value instanceof RegExp)
	{
		return value
	}
	else if (typeof value === 'string')
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
}

export function parseValue(value: RegExp | string | IRegExpObjectLike, options?: IOptions)
{
	let re: RegExp = (options?.createRegExp ?? createRegExp)(value);
	if (re instanceof RegExp)
	{
		return re
	}

	const msg = `Can't create new RegExp from: ${inspect(value)}`

	throw new GraphQLError(msg)
}

export function parseLiteral(ast: ValueNode, variables?: IVariables, options?: IOptions)
{
	switch (ast.kind)
	{
		case Kind.OBJECT:
			let map = valueOfValueNode<IRegExpObjectLike>(ast, variables);
			return parseValue(map, options);
		case Kind.STRING:
			return parseValue(ast.value, options);
		case Kind.VARIABLE:
			const name = ast.name.value
			return variables ? parseValue(variables[name], options) : undefined
		default:
			throw new GraphQLError(`Can't handle type ${inspect(ast.kind)}, ast: ${inspect(ast)}`);
	}
}
