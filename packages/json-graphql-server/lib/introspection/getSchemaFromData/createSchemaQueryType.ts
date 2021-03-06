import getFilterTypesFromData from '../getFilterTypesFromData';
import { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { ISourceDataRowBase, ISourceDataRowBaseCore, ISourceDataRoot, IOptions } from '../../types';
import { IRuntime } from '../getSchemaFromData';
import { getTypeFromKey, camelizePluralize } from '../../utils/nameConverter';

export default function createSchemaQueryType<T extends ISourceDataRowBaseCore = ISourceDataRowBase>({
	data,
	types,
	typesByName,
}: IRuntime<T>, options: IOptions = {})
{
	const filterTypesByName = getFilterTypesFromData(data, options);

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
