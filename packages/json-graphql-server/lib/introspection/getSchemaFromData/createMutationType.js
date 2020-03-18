"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
function createMutationType({ data, types, typesByName, }) {
    const mutationType = new graphql_1.GraphQLObjectType({
        name: 'Mutation',
        fields: types.reduce((fields, type) => {
            const typeFields = typesByName[type.name].getFields();
            const nullableTypeFields = Object.keys(typeFields).reduce((f, fieldName) => {
                f[fieldName] = Object.assign({}, typeFields[fieldName], {
                    type: fieldName !== 'id' &&
                        typeFields[fieldName].type instanceof graphql_1.GraphQLNonNull
                        // @ts-ignore
                        ? typeFields[fieldName].type.ofType
                        : typeFields[fieldName].type,
                });
                return f;
            }, {});
            fields[`create${type.name}`] = {
                type: typesByName[type.name],
                args: typeFields,
            };
            fields[`update${type.name}`] = {
                type: typesByName[type.name],
                args: nullableTypeFields,
            };
            fields[`remove${type.name}`] = {
                type: graphql_1.GraphQLBoolean,
                args: {
                    id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                },
            };
            return fields;
        }, {}),
    });
    return mutationType;
}
exports.default = createMutationType;
//# sourceMappingURL=createMutationType.js.map