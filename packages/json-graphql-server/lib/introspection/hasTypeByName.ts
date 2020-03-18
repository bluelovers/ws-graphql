import getFilterTypesFromData from './getFilterTypesFromData';
import { ISourceDataRoot, IOptions } from '../types';

export default function hasTypeByName(name: string, data: ISourceDataRoot, options: IOptions = {}): boolean
{
	return Object
		.values(getFilterTypesFromData(data, options))
		.some((type) =>
		{
			return Object.values(type.getFields())
				.some((field) =>
				{
					// @ts-ignore
					return (field.type.name === name);
				});
		})
}
