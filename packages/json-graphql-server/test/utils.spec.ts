/**
 * Created by user on 2020/3/18.
 */

import {
	getRelatedTypeUnsafe,
	getRelationshipFromKey,
	getTypeFromKey,
	camelizePluralize,
	getRelatedKey,
	getReverseRelatedField, getRelatedKeyFromType, getRelatedTypeWithValid,
} from '../lib/utils/nameConverter';
import { GraphQLObjectType } from 'graphql';
import sortOrderDirection, { EnumOrderDirection } from '../lib/utils/sortOrderDirection';
import { isRelationshipField } from '../lib/utils/relationships';

describe(`nameConverter`, () => {

	test(`getRelationshipFromKey('users')`, () => {

		let actual = getRelationshipFromKey('users');
		let expected = 'Users';

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date)
		expect(actual).toMatchSnapshot();

	});

	test(`getTypeFromKey('users')`, () => {

		let actual = getTypeFromKey('users');
		let expected = 'User';

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date)
		expect(actual).toMatchSnapshot();

	});

	test(`camelizePluralize('user')`, () => {

		let actual = camelizePluralize('user');
		let expected = 'Users';

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date)
		expect(actual).toMatchSnapshot();

	});

	test(`getRelatedKey('user_id')`, () => {

		let actual = getRelatedKey('user_id');
		let expected = 'users';

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date)
		expect(actual).toMatchSnapshot();

	});

	test(`getReverseRelatedField('users')`, () => {

		let actual = getReverseRelatedField('users');
		let expected = 'user_id';

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date)
		expect(actual).toMatchSnapshot();

	});

	test(`getRelatedTypeUnsafe('user_id')`, () => {

		let actual = getRelatedTypeUnsafe('user_id');
		let expected = 'User';

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date)
		expect(actual).toMatchSnapshot();

	});

	test(`getRelatedTypeWithValid`, () => {

		let actual = getRelatedTypeWithValid('user_id');
		let expected = 'User';

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date)
		expect(actual).toMatchSnapshot();

		actual = getRelatedTypeWithValid('_id');
		expect(actual).toStrictEqual('');
		expect(actual).toMatchSnapshot();

	});

	test(`getRelatedKeyFromType(User)`, () => {

		let actual = getRelatedKeyFromType({
			toString()
			{
				return 'User'
			}
		} as any as GraphQLObjectType);
		let expected = 'Users';

		expect(actual).toStrictEqual(expected);
		//expect(actual).toBeInstanceOf(Date)
		expect(actual).toMatchSnapshot();

	});

})

describe(`utils`, () => {

	test(`isRelationshipField`, () =>
	{

		let actual = isRelationshipField('user_id');
		let expected = true;

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = isRelationshipField('_id');
		expected = false;

		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();
	});

	test(`sortOrderDirection`, () => {

		let actual: EnumOrderDirection;
		let expected: EnumOrderDirection;

		expected = EnumOrderDirection.ASC;

		actual = sortOrderDirection('asc');
		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = sortOrderDirection('ASC');
		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = sortOrderDirection(true);
		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

		expected = EnumOrderDirection.DESC;

		actual = sortOrderDirection('desc');
		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = sortOrderDirection('DESC');
		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = sortOrderDirection(false);
		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = sortOrderDirection(null);
		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();

		actual = sortOrderDirection(void 0);
		expect(actual).toStrictEqual(expected);
		expect(actual).toMatchSnapshot();
	});

})
