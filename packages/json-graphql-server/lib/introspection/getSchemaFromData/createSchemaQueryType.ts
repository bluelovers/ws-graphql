import getFilterTypesFromData from '../getFilterTypesFromData';
import { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { camelize, pluralize } from 'inflection';
import camelizePluralize from '../../utils/camelizePluralize';
import { ISourceDataRowBase } from '../../types';
import { IRuntime } from '../getSchemaFromData';

export default function createSchemaQueryType<T = ISourceDataRowBase>({
	data,
	types,
	typesByName,
}: IRuntime<T>)
{
	const filterTypesByName = getFilterTypesFromData(data);

	const listMetadataType = new GraphQLObjectType({
		name: 'ListMetadata',
		fields: {
			count: { type: GraphQLInt },
		},
	});

	let fields = types.reduce((fields, type) =>
	{
		const _key = camelizePluralize(type.name);

		fields[type.name] = {
			type: typesByName[type.name],
			args: {
				id: { type: new GraphQLNonNull(GraphQLID) },
			},
		};
		fields[`all${_key}`] = {
			type: new GraphQLList(typesByName[type.name]),
			args: {
				page: { type: GraphQLInt },
				perPage: { type: GraphQLInt },
				sortField: { type: GraphQLString },
				sortOrder: { type: GraphQLString },
				filter: { type: filterTypesByName[type.name] },
			},
		};
		fields[`_all${_key}Meta`] = {
			type: listMetadataType,
			args: {
				page: { type: GraphQLInt },
				perPage: { type: GraphQLInt },
				filter: { type: filterTypesByName[type.name] },
			},
		};
		return fields;
	}, {});

	//console.dir(fields)

	const queryType = new GraphQLObjectType({
		name: 'Query',
		fields,
	});

	return queryType
}
