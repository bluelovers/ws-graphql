import { isRelationshipField } from '../../utils/relationships';
import { getRelatedType, getRelatedKeyFromType } from '../../utils/nameConverter';
import { pluralize } from 'inflection';
import { ISourceDataRowBase, ISourceDataRowBaseCore } from '../../types';
import { IRuntime } from '../getSchemaFromData';
import { GraphQLObjectType } from 'graphql';
import createSchemaFragment from './createSchemaFragment';

export default function createSchemaExtension<T extends ISourceDataRowBaseCore = ISourceDataRowBase>({
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
	const schemaExtension = Object.values(typesByName)
		.reduce((ext: string, type: GraphQLObjectType) =>
		{
			//const fieldNames: string[] = [];
			const rel = getRelatedKeyFromType(type);

			for (const fieldName in type.getFields())
			{
				if (isRelationshipField(fieldName))
				{
					const relType = getRelatedType(fieldName);

					ext += `
extend type ${type} { ${relType}: ${relType} }
extend type ${relType} { ${rel}: [${type}] }`;
				}
				else
				{
					//fieldNames.push(fieldName)
				}
			}

			/*
			if (fieldNames.length)
			{
				// @FIXME: not work
				ext += createSchemaFragment(type, fieldNames);
			}
			 */

			return ext;
		}, '');

	return schemaExtension
}
