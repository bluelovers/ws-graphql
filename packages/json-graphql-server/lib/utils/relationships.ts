
export function isRelationshipField(fieldName: string)
{
	return fieldName !== '_id' && fieldName.endsWith('_id');
}

export function checkFieldNameIsID(fieldName: string)
{
	return (fieldName === 'id' || isRelationshipField(fieldName))
}
