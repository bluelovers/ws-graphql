import JsonGraphqlServer from './lib/graphQLClientServer';
import jsonSchemaBuilder from 'json-graphql-server/lib/schemaBuilder';

declare global
{
	interface Window
	{
		JsonGraphqlServer: typeof JsonGraphqlServer;
		jsonSchemaBuilder: typeof jsonSchemaBuilder
	}
}

if (typeof window !== 'undefined')
{
	window.JsonGraphqlServer = JsonGraphqlServer;
	window.jsonSchemaBuilder = jsonSchemaBuilder;
}

export { jsonSchemaBuilder };
export default JsonGraphqlServer;
