import { ISourceDataRowBaseCore, ISourceDataRowBase } from '../../types';
import getValuesFromEntities from '../getTypesFromData/getValuesFromEntities';
import getTypeFromValues from '../getTypesFromData/getTypeFromValues';
import { GraphQLScalarType, GraphQLInt, GraphQLFloat } from 'graphql';
import DateType from '../type/DateType';
import { GraphQLFieldConfigMap } from 'graphql/type/definition';

/**
 * 對數字類型的屬性增加 _lt _lte _gt _gte
 */
export function getRangeFiltersFromEntities<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(keyNames: string[],
	entities: T[],
)
{
	const fieldValues = getValuesFromEntities(entities);
	return Object.keys(fieldValues).reduce((fields, fieldName) =>
	{
		const fieldType = getTypeFromValues(
			fieldName,
			fieldValues[fieldName],
			false,
		) as GraphQLScalarType;
		if (
			fieldType == GraphQLInt ||
			fieldType == GraphQLFloat ||
			fieldType == DateType ||
			// @ts-ignore
			fieldType.name == 'Date'
		)
		{
			fields[`${fieldName}_lt`] = { type: fieldType };
			fields[`${fieldName}_lte`] = { type: fieldType };
			fields[`${fieldName}_gt`] = { type: fieldType };
			fields[`${fieldName}_gte`] = { type: fieldType };
		}
		return fields;
	}, {} as GraphQLFieldConfigMap<any, any>);
}

export default getRangeFiltersFromEntities
