import getFilterTypesFromData from './getFilterTypesFromData';
import { ISourceDataRoot, IOptions } from '../types';
import { GraphQLScalarType } from 'graphql';

export default function hasType(scalarType: GraphQLScalarType, data: ISourceDataRoot, options: IOptions = {}): boolean
{
	return Object
		.values(getFilterTypesFromData(data, options))
		.some((type) =>
		{
			return Object.values(type.getFields())
				.some((field) =>
				{
					return (field.type == scalarType);
				});
		})
}
