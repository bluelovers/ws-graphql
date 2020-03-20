import {
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLScalarType,
	GraphQLType,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import DateType from '../type/DateType';
import {
	valuesAreObject,
	valuesAreDate,
	valuesAreArray,
	valuesAreString,
	valuesAreBoolean,
	valuesAreInteger,
	valuesAreNumeric,
	valuesAreRegExp,
} from '../../utils/typeOf';
import GraphQLRegExpType from 'graphql-type-regexp2';
import { checkFieldNameIsID } from '../../utils/relationships';
import { requiredTypeOrNormal } from '../../utils/requiredTypeOrNormal';

export const enum EnumTypeFromValues
{
	NONE,
	Boolean,
	Date,
	String,
	Integer,
	Numeric,
	RegExp,
	Object,
}

/**
 * 自動檢測內容對應的 ScalarType
 */
export default function getTypeFromValues(fieldName: string, values = [], isRequired = false)
{
	if (checkFieldNameIsID(fieldName))
	{
		return requiredTypeOrNormal(GraphQLID, isRequired);
	}

	if (values.length > 0)
	{
		if (valuesAreArray(values))
		{
			const leafValues = values.reduce((agg, arr) =>
			{
				arr.forEach(value => agg.push(value));
				return agg;
			}, []);

			let _type = checkTypeFromValues(leafValues);

			if (_type)
			{
				let scalarType: GraphQLList<GraphQLType> | GraphQLScalarType = scalarTypeFromEnum(_type);

				if (_type !== EnumTypeFromValues.Object)
				{
					scalarType = new GraphQLList(scalarType)
				}

				return requiredTypeOrNormal(scalarType, isRequired);
			}

			return requiredTypeOrNormal(
				new GraphQLList(GraphQLString),
				isRequired,
			); // FIXME introspect further
		}
		else
		{
			let _type = checkTypeFromValues(values)

			if (_type)
			{
				let scalarType = scalarTypeFromEnum(_type);
				return requiredTypeOrNormal(scalarType, isRequired);
			}
		}
	}

	return requiredTypeOrNormal(GraphQLString, isRequired); // FIXME introspect further
};

export function scalarTypeFromEnum(_type: EnumTypeFromValues): GraphQLScalarType
{
	let scalarType: GraphQLScalarType;

	switch (_type)
	{
		case EnumTypeFromValues.Boolean:
			scalarType = GraphQLBoolean;
			break;
		case EnumTypeFromValues.Date:
			scalarType = DateType;
			break;
		case EnumTypeFromValues.String:
			scalarType = GraphQLString;
			break;
		case EnumTypeFromValues.Integer:
			scalarType = GraphQLInt;
			break;
		case EnumTypeFromValues.Numeric:
			scalarType = GraphQLFloat;
			break;
		case EnumTypeFromValues.RegExp:
			scalarType = GraphQLRegExpType;
			break;
		case EnumTypeFromValues.Object:
			scalarType = GraphQLJSON;
			break;
		default:
			throw new TypeError(`unknown type ${_type}`)
	}

	return scalarType
}

export function checkTypeFromValues(values: any[]): EnumTypeFromValues | null
{
	let _type: EnumTypeFromValues = null;
	for (const value of values)
	{
		let _cur: EnumTypeFromValues = EnumTypeFromValues.NONE;

		if (valuesAreBoolean(values))
		{
			_cur = EnumTypeFromValues.Boolean
		}
		else if (valuesAreString(values))
		{
			_cur = EnumTypeFromValues.String
		}
		else if (valuesAreInteger(values))
		{
			_cur = EnumTypeFromValues.Integer
		}
		else if (valuesAreRegExp(values))
		{
			_cur = EnumTypeFromValues.RegExp
		}
		else if (valuesAreDate(values))
		{
			_cur = EnumTypeFromValues.Date
		}

		if (!_cur || (_type !== null && _cur !== _type))
		{
			_type = null
			break;
		}
		else
		{
			_type = _cur;
		}
	}

	if (_type === null)
	{
		_type = null;
		for (const value of values)
		{
			let _cur: EnumTypeFromValues = EnumTypeFromValues.NONE;

			if (valuesAreNumeric(values))
			{
				_cur = EnumTypeFromValues.Numeric
			}
			else if (valuesAreObject(values))
			{
				_cur = EnumTypeFromValues.Object
			}

			if (!_cur || (_type !== null && _cur !== _type))
			{
				_type = null
				break;
			}
			else
			{
				_type = _cur;
			}
		}
	}

	return _type || null
}
