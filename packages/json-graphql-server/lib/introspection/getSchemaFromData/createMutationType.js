"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
function createMutationType({ types, typesByName, }) {
    const mutationType = new graphql_1.GraphQLObjectType({
        name: 'Mutation',
        fields: types.reduce((fields, type) => {
            const typeFields = typesByName[type.name].getFields();
            const nullableTypeFields = Object.keys(typeFields).reduce((f, fieldName) => {
                f[fieldName] = Object.assign({}, typeFields[fieldName], {
                    type: fieldName !== 'id' &&
                        typeFields[fieldName].type instanceof graphql_1.GraphQLNonNull
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTXV0YXRpb25UeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlTXV0YXRpb25UeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVGO0FBRXZGLFNBQXdCLGtCQUFrQixDQUFDLEVBQzFDLEtBQUssRUFDTCxXQUFXLEdBQ1g7SUFFQSxNQUFNLFlBQVksR0FBRyxJQUFJLDJCQUFpQixDQUFDO1FBQzFDLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO1lBRXJDLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDdEQsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUNyQyxVQUFVLENBQ1YsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUU7Z0JBRXpCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ3ZELElBQUksRUFDSCxTQUFTLEtBQUssSUFBSTt3QkFDbEIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksWUFBWSx3QkFBYzt3QkFDbkQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTt3QkFDbkMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJO2lCQUM5QixDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLENBQUM7WUFDVixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRztnQkFDOUIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsVUFBVTthQUNoQixDQUFDO1lBQ0YsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUc7Z0JBQzlCLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDNUIsSUFBSSxFQUFFLGtCQUFrQjthQUN4QixDQUFDO1lBQ0YsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUc7Z0JBQzlCLElBQUksRUFBRSx3QkFBYztnQkFDcEIsSUFBSSxFQUFFO29CQUNMLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLHdCQUFjLENBQUMsbUJBQVMsQ0FBQyxFQUFFO2lCQUMzQzthQUNELENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztRQUNmLENBQUMsRUFBRSxFQUFFLENBQUM7S0FDTixDQUFDLENBQUM7SUFFSCxPQUFPLFlBQVksQ0FBQTtBQUNwQixDQUFDO0FBMUNELHFDQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTEJvb2xlYW4sIEdyYXBoUUxJRCB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNdXRhdGlvblR5cGUoe1xuXHR0eXBlcyxcblx0dHlwZXNCeU5hbWUsXG59KVxue1xuXHRjb25zdCBtdXRhdGlvblR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuXHRcdG5hbWU6ICdNdXRhdGlvbicsXG5cdFx0ZmllbGRzOiB0eXBlcy5yZWR1Y2UoKGZpZWxkcywgdHlwZSkgPT5cblx0XHR7XG5cdFx0XHRjb25zdCB0eXBlRmllbGRzID0gdHlwZXNCeU5hbWVbdHlwZS5uYW1lXS5nZXRGaWVsZHMoKTtcblx0XHRcdGNvbnN0IG51bGxhYmxlVHlwZUZpZWxkcyA9IE9iamVjdC5rZXlzKFxuXHRcdFx0XHR0eXBlRmllbGRzLFxuXHRcdFx0KS5yZWR1Y2UoKGYsIGZpZWxkTmFtZSkgPT5cblx0XHRcdHtcblx0XHRcdFx0ZltmaWVsZE5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgdHlwZUZpZWxkc1tmaWVsZE5hbWVdLCB7XG5cdFx0XHRcdFx0dHlwZTpcblx0XHRcdFx0XHRcdGZpZWxkTmFtZSAhPT0gJ2lkJyAmJlxuXHRcdFx0XHRcdFx0dHlwZUZpZWxkc1tmaWVsZE5hbWVdLnR5cGUgaW5zdGFuY2VvZiBHcmFwaFFMTm9uTnVsbFxuXHRcdFx0XHRcdFx0XHQ/IHR5cGVGaWVsZHNbZmllbGROYW1lXS50eXBlLm9mVHlwZVxuXHRcdFx0XHRcdFx0XHQ6IHR5cGVGaWVsZHNbZmllbGROYW1lXS50eXBlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGY7XG5cdFx0XHR9LCB7fSk7XG5cdFx0XHRmaWVsZHNbYGNyZWF0ZSR7dHlwZS5uYW1lfWBdID0ge1xuXHRcdFx0XHR0eXBlOiB0eXBlc0J5TmFtZVt0eXBlLm5hbWVdLFxuXHRcdFx0XHRhcmdzOiB0eXBlRmllbGRzLFxuXHRcdFx0fTtcblx0XHRcdGZpZWxkc1tgdXBkYXRlJHt0eXBlLm5hbWV9YF0gPSB7XG5cdFx0XHRcdHR5cGU6IHR5cGVzQnlOYW1lW3R5cGUubmFtZV0sXG5cdFx0XHRcdGFyZ3M6IG51bGxhYmxlVHlwZUZpZWxkcyxcblx0XHRcdH07XG5cdFx0XHRmaWVsZHNbYHJlbW92ZSR7dHlwZS5uYW1lfWBdID0ge1xuXHRcdFx0XHR0eXBlOiBHcmFwaFFMQm9vbGVhbixcblx0XHRcdFx0YXJnczoge1xuXHRcdFx0XHRcdGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSUQpIH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGZpZWxkcztcblx0XHR9LCB7fSksXG5cdH0pO1xuXG5cdHJldHVybiBtdXRhdGlvblR5cGVcbn1cbiJdfQ==