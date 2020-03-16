export function isRelationshipField(fieldName: string)
{
	return fieldName.endsWith('_id');
}
