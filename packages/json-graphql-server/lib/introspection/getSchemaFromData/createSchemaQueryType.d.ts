import { GraphQLObjectType } from 'graphql';
export default function createSchemaQueryType({ data, types, typesByName, }: {
    data: any;
    types: any;
    typesByName: any;
}): GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
