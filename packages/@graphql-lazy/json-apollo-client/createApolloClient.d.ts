import { ApolloClient } from 'apollo-client';
import { ISourceDataRoot } from 'lazy-json-graphql/lib/types';
export declare function createApolloClient(data: ISourceDataRoot): ApolloClient<unknown>;
export default createApolloClient;
