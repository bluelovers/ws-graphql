import {
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLString, GraphQLScalarType,
} from 'graphql';
import targetScalarType from '../DateISOStringType';

describe(targetScalarType.inspect(), () => {

	const dateString = '2017-03-15';

	test('parseValue', () => {

		expect(targetScalarType.parseValue(dateString)).toBeInstanceOf(Date)

	});

	test('serialize', () => {

		let value = targetScalarType.serialize(new Date(dateString));

		expect(value).toMatch('2017')
		expect(typeof value).toBe('string')

	});

})
