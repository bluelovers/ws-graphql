import { ApolloClient } from 'apollo-client';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import getSchemaFromData from 'json-graphql-server/lib/introspection/getSchemaFromData';

export default data =>
{
	const schema = getSchemaFromData(data);
	const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

	const client = new ApolloClient({
		// @ts-ignore
		networkInterface: mockNetworkInterface,
	});

	return client;
};