import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLID } from 'graphql';

export default function createMutationType({
	types,
	typesByName,
})
{
	const mutationType = new GraphQLObjectType({
		name: 'Mutation',
		fields: types.reduce((fields, type) =>
		{
			const typeFields = typesByName[type.name].getFields();
			const nullableTypeFields = Object.keys(
				typeFields,
			).reduce((f, fieldName) =>
			{
				f[fieldName] = Object.assign({}, typeFields[fieldName], {
					type:
						fieldName !== 'id' &&
						typeFields[fieldName].type instanceof GraphQLNonNull
							? typeFields[fieldName].type.ofType
							: typeFields[fieldName].type,
				});
				return f;
			}, {});
			fields[`create${type.name}`] = {
				type: typesByName[type.name],
				args: typeFields,
			};
			fields[`update${type.name}`] = {
				type: typesByName[type.name],
				args: nullableTypeFields,
			};
			fields[`remove${type.name}`] = {
				type: GraphQLBoolean,
				args: {
					id: { type: new GraphQLNonNull(GraphQLID) },
				},
			};
			return fields;
		}, {}),
	});

	return mutationType
}
