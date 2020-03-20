import { GraphQLScalarType, GraphQLList, GraphQLNonNull, GraphQLType } from 'graphql';

export function isNumeric(value): value is number
{
	return !isNaN(parseFloat(value)) && isFinite(value);
}

export function valuesAreNumeric(values: any[]): values is number[]
{
	return values.every(isNumeric)
}

export function isInteger(value): value is number
{
	return Number.isInteger(value);
}

export function valuesAreInteger(values: any[]): values is number[]
{
	return values.every(isInteger)
}

export function isBoolean(value): value is boolean
{
	return typeof value === 'boolean';
}

export function valuesAreBoolean(values: any[]): values is boolean[]
{
	return values.every(isBoolean)
}

export function isString(value): value is string
{
	return typeof value === 'string';
}

export function valuesAreString(values: any[]): values is string[]
{
	return values.every(isString)
}

export function isArray(value): value is any[]
{
	return Array.isArray(value);
}

export function valuesAreArray(values: any[]): values is any[][]
{
	return values.every(isArray)
}

export function isDate(value): value is Date
{
	return value instanceof Date;
}

export function valuesAreDate(values: any[]): values is Date[]
{
	return values.every(isDate)
}

export function isObject(value)
{
	return Object.prototype.toString.call(value) === '[object Object]';
}

export function valuesAreObject(values: any[])
{
	return values.every(isObject)
}

export function isRegExp(value): value is Date
{
	return value instanceof RegExp;
}

export function valuesAreRegExp(values: any[]): values is RegExp[]
{
	return values.every(isRegExp)
}

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
