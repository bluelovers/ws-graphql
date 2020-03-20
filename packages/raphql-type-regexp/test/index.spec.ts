import { Kind, NameNode, ObjectValueNode } from 'graphql/language';
import GraphQLRegExpType, { serialize, parseValue, parseLiteral } from '../index';
import { ValueNode, StringValueNode } from 'graphql/language/ast';

describe('GraphQLRegExpType', () =>
{

	test(`serialize`, () =>
	{

		let actual;
		let expected = new RegExp(`g.*b`, 'i')

		actual = serialize(expected);
		expect(actual).toStrictEqual(expected.toString());
		expect(actual).toMatchSnapshot();

		actual = GraphQLRegExpType.serialize(expected);
		expect(actual).toStrictEqual(expected.toString());
		expect(actual).toMatchSnapshot();
	});

	test(`parseValue`, () =>
	{

		let actual;
		let expected = new RegExp(`g.*b`, 'i')

		actual = parseValue(expected.toString());

		expect(actual).toBeInstanceOf(RegExp);
		expect(actual).toEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = GraphQLRegExpType.parseValue(expected.toString());

		expect(actual).toBeInstanceOf(RegExp);
		expect(actual).toEqual(expected);
		expect(actual).toMatchSnapshot();

	});

	test(`parseLiteral`, () =>
	{

		let actual;
		let expected = new RegExp(`g.*b`, 'i')

		let ast: ValueNode = {
			kind: Kind.STRING,
			value: '/g.*b/i',
		}

		actual = parseLiteral(ast);

		expect(actual).toBeInstanceOf(RegExp);
		expect(actual).toEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = GraphQLRegExpType.parseLiteral(ast, null);

		expect(actual).toBeInstanceOf(RegExp);
		expect(actual).toEqual(expected);
		expect(actual).toMatchSnapshot();
	});

	test(`parseLiteral variables`, () =>
	{

		let actual;
		let expected = new RegExp(`g.*b`, 'i')

		let ast: ValueNode = {
			kind: Kind.VARIABLE,
			name: <NameNode>{
				value: 'regex',
			},
		}

		actual = parseLiteral(ast, {
			regex: '/g.*b/i',
		});

		expect(actual).toBeInstanceOf(RegExp);
		expect(actual).toEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = GraphQLRegExpType.parseLiteral(ast, {
			regex: '/g.*b/i',
		});

		expect(actual).toBeInstanceOf(RegExp);
		expect(actual).toEqual(expected);
		expect(actual).toMatchSnapshot();
	});

	test(`parseLiteral object`, () =>
	{

		let actual;
		let expected = new RegExp(`g.*b`, 'i')

		let ast: ObjectValueNode = {
			kind: Kind.OBJECT,
			fields: [
				{
					kind: 'ObjectField',
					name: <NameNode>{
						value: 'source',
					},
					value: <StringValueNode>{
						kind: Kind.STRING,
						value: 'g.*b',
					},
				},
				{
					kind: 'ObjectField',
					name: <NameNode>{
						value: 'flags',
					},
					value: <StringValueNode>{
						kind: Kind.STRING,
						value: 'i',
					},
				},
			],
		}

		actual = parseLiteral(ast, null);

		expect(actual).toBeInstanceOf(RegExp);
		expect(actual).toEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = GraphQLRegExpType.parseLiteral(ast, null);

		expect(actual).toBeInstanceOf(RegExp);
		expect(actual).toEqual(expected);
		expect(actual).toMatchSnapshot();
	});

})
