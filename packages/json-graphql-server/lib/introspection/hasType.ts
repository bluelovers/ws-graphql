import getFilterTypesFromData from './getFilterTypesFromData';

export default function hasType(name: string, data): boolean
{
	return Object.values(getFilterTypesFromData(data))
		.reduce((hasJSON, type: any) =>
		{
			if (hasJSON) return true;

			return Object.values(type.getFields())
				.reduce((hasJSONField, field) =>
				{
					if (hasJSONField) return true;
					// @ts-ignore
					return field.type.name == name;
				}, false) as any;

		}, false) as any
};
