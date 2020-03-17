import { printSchema } from 'graphql';
import getSchemaFromData from '../introspection/getSchemaFromData';
import { ISourceDataRoot } from '../types';

export default function (data: ISourceDataRoot)
{
	return printSchema(getSchemaFromData(data))
}
