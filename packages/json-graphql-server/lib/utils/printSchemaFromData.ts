import { printSchema } from 'graphql';
import getSchemaFromData from '../introspection/getSchemaFromData';
import { ISourceDataRoot, IOptions } from '../types';

export default function (data: ISourceDataRoot, options: IOptions = {})
{
	return printSchema(getSchemaFromData(data, options))
}
