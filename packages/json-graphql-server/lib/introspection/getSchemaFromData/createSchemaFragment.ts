import { GraphQLObjectType } from 'graphql';

export default function createSchemaFragment(type: GraphQLObjectType, fieldNames: string[])
{
	if (fieldNames.length)
	{
		return `\nfragment ${type}Fragment on ${type} {
	${fieldNames.join("\n\t")}
}`
	}

	return '';
}
