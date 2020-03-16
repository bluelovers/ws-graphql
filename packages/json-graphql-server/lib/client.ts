import JsonGraphqlServer from './graphQLClientServer';
import jsonSchemaBuilder from './schemaBuilder';

declare global {
    interface Window {
        JsonGraphqlServer: typeof JsonGraphqlServer;
        jsonSchemaBuilder: typeof jsonSchemaBuilder
    }
}

if (typeof window !== 'undefined') {
    window.JsonGraphqlServer = JsonGraphqlServer;
    window.jsonSchemaBuilder = jsonSchemaBuilder;
}

export { jsonSchemaBuilder };
export default JsonGraphqlServer;
