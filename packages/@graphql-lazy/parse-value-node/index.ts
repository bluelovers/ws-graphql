/**
 * Created by user on 2020/3/20.
 */

import { ValueNode, VariableNode, ASTNode, ObjectValueNode, NameNode } from 'graphql/language/ast';
import { Kind } from 'graphql/language';
import { GraphQLError } from 'graphql';
import { inspect } from "util";
import Maybe from 'graphql/tsutils/Maybe';

export type IVariables = Maybe<{ [key: string]: any }>;

export function valueOfObjectValueNode<T extends { [key: string]: any }>(ast: ObjectValueNode, variables?: IVariables): T
{
	return Object.values(ast.fields)
		.reduce((a, b) =>
		{
			a[b.name.value as keyof T] = valueOfValueNode(b.value, variables);

			return a;
		}, {} as T)
}

export function valueOfVariableNode<T extends any>(ast: VariableNode, variables?: IVariables): Maybe<T>
{
	const name = ast.name.value;
	return variables?.[name]
}

export function valueOfAstNode<T extends any>(ast: ValueNode | ASTNode, variables?: IVariables): Maybe<T>
{
	return valueOfValueNode(ast as ValueNode, variables)
}

export function valueOfValueNode<T extends any>(ast: ValueNode, variables?: IVariables): Maybe<T>
{
	switch (ast.kind)
	{
		case Kind.STRING:
		case Kind.INT:
		case Kind.FLOAT:
		case Kind.ENUM:
			return ast.value as T;
		case Kind.BOOLEAN:
			return ast.value as T;
		case Kind.NULL:
			break;
		case Kind.VARIABLE:
			return valueOfVariableNode<T>(ast, variables);
		case Kind.OBJECT:
			return valueOfObjectValueNode<T>(ast, variables);
		default:
			throw new GraphQLError(`not support parse ${inspect(ast.kind)}, got ${inspect(ast)}`);
	}

	return void 0 as Maybe<T>
}

export default valueOfValueNode
