import { printSchema } from 'graphql';
import getSchemaFromData from '../introspection/getSchemaFromData';
import { ISourceDataRoot, IOptions } from '../types';

export default function (data: ISourceDataRoot, options: IOptions = {}): string
{
	const typeDefs = printSchema(getSchemaFromData(data, options))

	return options?.after?.printSchema?.({
		typeDefs,
	}, data)?.typeDefs ?? typeDefs
}
