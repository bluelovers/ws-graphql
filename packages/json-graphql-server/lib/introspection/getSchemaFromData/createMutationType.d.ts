import { GraphQLObjectType } from 'graphql';
export default function createMutationType({ types, typesByName, }: {
    types: any;
    typesByName: any;
}): GraphQLObjectType<any, any, {
    [key: string]: any;
}>;
