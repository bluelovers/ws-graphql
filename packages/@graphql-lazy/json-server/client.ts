import JsonGraphqlServer from './lib/graphQLClientServer';
import jsonSchemaBuilder from 'lazy-json-graphql';

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
