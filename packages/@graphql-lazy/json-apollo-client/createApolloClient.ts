import { ApolloClient } from 'apollo-client';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import getSchemaFromData from 'lazy-json-graphql/lib/introspection/getSchemaFromData';
import { ISourceDataRoot } from 'lazy-json-graphql/lib/types';

export function createApolloClient(data: ISourceDataRoot)
{
	const schema = getSchemaFromData(data);
	const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

	const client = new ApolloClient({
		// @ts-ignore
		networkInterface: mockNetworkInterface,
	});

	return client;
}

export default createApolloClient
