import { isRelationshipField } from '../../utils/relationships';
import { getRelatedType } from '../../utils/nameConverter';
import { pluralize } from 'inflection';
import { ISourceDataRowBase } from '../../types';
import { IRuntime } from '../getSchemaFromData';

export default function createSchemaExtension<T = ISourceDataRowBase>({
	data,
	types,
	typesByName,
}: IRuntime<T>)
{
	/**
	 * extend schema to add relationship fields
	 *
	 * @example
	 * If the `post` key contains a 'user_id' field, then
	 * add one-to-many and many-to-one type extensions:
	 *     extend type Post { User: User }
	 *     extend type User { Posts: [Post] }
	 */
	const schemaExtension = Object.values(typesByName).reduce((ext: string, type: any) =>
	{
		Object.keys(type.getFields())
			.filter(isRelationshipField)
			.map(fieldName =>
			{
				const relType = getRelatedType(fieldName);
				const rel = pluralize(type.toString());
				ext += `
extend type ${type} { ${relType}: ${relType} }
extend type ${relType} { ${rel}: [${type}] }`;
			});
		return ext;
	}, '');

	return schemaExtension
}
