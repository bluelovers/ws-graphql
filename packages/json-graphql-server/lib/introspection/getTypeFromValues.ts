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
import DateType from './DateType';
import {
	requiredTypeOrNormal,
	valuesAreObject,
	valuesAreDate,
	valuesAreArray,
	valuesAreString,
	valuesAreBoolean,
	valuesAreInteger,
	valuesAreNumeric,
} from './util';

export default function getTypeFromValues(name: string, values = [], isRequired = false)
{
	if (name === 'id' || name.substr(name.length - 3) === '_id')
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
			if (valuesAreBoolean(leafValues))
			{
				return requiredTypeOrNormal(
					new GraphQLList(GraphQLBoolean),
					isRequired,
				);
			}
			if (valuesAreString(leafValues))
			{
				return requiredTypeOrNormal(
					new GraphQLList(GraphQLString),
					isRequired,
				);
			}
			if (valuesAreInteger(leafValues))
			{
				return requiredTypeOrNormal(
					new GraphQLList(GraphQLInt),
					isRequired,
				);
			}
			if (valuesAreNumeric(leafValues))
			{
				return requiredTypeOrNormal(
					new GraphQLList(GraphQLFloat),
					isRequired,
				);
			}
			if (valuesAreObject(leafValues))
			{
				return requiredTypeOrNormal(GraphQLJSON, isRequired);
			}
			return requiredTypeOrNormal(
				new GraphQLList(GraphQLString),
				isRequired,
			); // FIXME introspect further
		}
		if (valuesAreBoolean(values))
		{
			return requiredTypeOrNormal(GraphQLBoolean, isRequired);
		}
		if (valuesAreDate(values))
		{
			return requiredTypeOrNormal(DateType, isRequired);
		}
		if (valuesAreString(values))
		{
			return requiredTypeOrNormal(GraphQLString, isRequired);
		}
		if (valuesAreInteger(values))
		{
			return requiredTypeOrNormal(GraphQLInt, isRequired);
		}
		if (valuesAreNumeric(values))
		{
			return requiredTypeOrNormal(GraphQLFloat, isRequired);
		}
		if (valuesAreObject(values))
		{
			return requiredTypeOrNormal(GraphQLJSON, isRequired);
		}
	}
	return requiredTypeOrNormal(GraphQLString, isRequired); // FIXME introspect further
};
