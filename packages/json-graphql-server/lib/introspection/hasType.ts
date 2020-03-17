import getFilterTypesFromData from './getFilterTypesFromData';
import { ISourceDataRoot } from '../types';

export default function hasType(name: string, data: ISourceDataRoot): boolean
{
	return Object
		.values(getFilterTypesFromData(data))
		.some((type) =>
		{
			return Object.values(type.getFields())
				.some((field) =>
				{
					// @ts-ignore
					return (field.type.name == name);
				});

		})
};
