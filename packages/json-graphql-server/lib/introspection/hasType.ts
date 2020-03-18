import getFilterTypesFromData from './getFilterTypesFromData';
import { ISourceDataRoot } from '../types';
import { GraphQLScalarType } from 'graphql';

export default function hasType(scalarType: GraphQLScalarType, data: ISourceDataRoot): boolean
{
	return Object
		.values(getFilterTypesFromData(data))
		.some((type) =>
		{
			return Object.values(type.getFields())
				.some((field) =>
				{
					return (field.type == scalarType);
				});
		})
}
