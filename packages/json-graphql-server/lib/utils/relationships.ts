export function isRelationshipField(fieldName: string)
{
	return fieldName !== '_id' && fieldName.endsWith('_id');
}
