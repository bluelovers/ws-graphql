import JsonGraphqlServer from './lib/graphQLClientServer';
import jsonSchemaBuilder from 'lazy-json-graphql';
declare global {
    interface Window {
        JsonGraphqlServer: typeof JsonGraphqlServer;
        jsonSchemaBuilder: typeof jsonSchemaBuilder;
    }
}
export { jsonSchemaBuilder };
export default JsonGraphqlServer;
