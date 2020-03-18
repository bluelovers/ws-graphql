"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSchemaForTypes = exports.printSchemaForFields = void 0;
const graphql_1 = require("graphql");
/**
 * Return a schema string with a Main type using the fields
 *
 * @param {*array} fields
 *
 * @example
 * printSchemaForFields({
 *     id: { type: graphql.GraphQLString },
 *     title: { type: graphql.GraphQLString },
 *     views: { type: graphql.GraphQLInt },
 *     user_id: { type: graphql.GraphQLString },
 * });
 * // type Main {
 * //   id: String
 * //   title: String
 * //   views: String
 * //   user_id: String
 * // }
 * //
 * // type Query {
 * //   foo: Main
 * // }
 */
function printSchemaForFields(fields) {
    const mainType = new graphql_1.GraphQLObjectType({
        name: 'Main',
        fields,
    });
    const queryType = new graphql_1.GraphQLObjectType({
        name: 'Query',
        fields: {
            foo: { type: mainType },
        },
    });
    const schema = new graphql_1.GraphQLSchema({ query: queryType });
    return graphql_1.printSchema(schema);
}
exports.printSchemaForFields = printSchemaForFields;
function printSchemaForTypes(types) {
    const typesSchema = types.reduce((schema, type) => {
        schema[type.name] = type;
        return schema;
    }, {});
    const queryType = new graphql_1.GraphQLObjectType({
        name: 'Query',
        fields: types.reduce((fields, type) => {
            fields[type.name] = { type };
            return fields;
        }, {}),
    });
    const schema = new graphql_1.GraphQLSchema({ ...typesSchema, query: queryType });
    return graphql_1.printSchema(schema);
}
exports.printSchemaForTypes = printSchemaForTypes;
//# sourceMappingURL=graphql.js.map