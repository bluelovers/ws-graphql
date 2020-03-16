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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyYXBocWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdFO0FBRXhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUMsTUFBTTtJQUUxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLDJCQUFpQixDQUFDO1FBQ3RDLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTTtLQUNOLENBQUMsQ0FBQztJQUVILE1BQU0sU0FBUyxHQUFHLElBQUksMkJBQWlCLENBQUM7UUFDdkMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUU7WUFDUCxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1NBQ3ZCO0tBQ0QsQ0FBQyxDQUFDO0lBRUgsTUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDdkQsT0FBTyxxQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFoQkQsb0RBZ0JDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsS0FBSztJQUV4QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO1FBRWpELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsTUFBTSxTQUFTLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQztRQUN2QyxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO1lBRXJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUM3QixPQUFPLE1BQU0sQ0FBQztRQUNmLENBQUMsRUFBRSxFQUFFLENBQUM7S0FDTixDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sR0FBRyxJQUFJLHVCQUFhLENBQUMsRUFBRSxHQUFHLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN2RSxPQUFPLHFCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQWxCRCxrREFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmludFNjaGVtYSwgR3JhcGhRTFNjaGVtYSwgR3JhcGhRTE9iamVjdFR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuLyoqXG4gKiBSZXR1cm4gYSBzY2hlbWEgc3RyaW5nIHdpdGggYSBNYWluIHR5cGUgdXNpbmcgdGhlIGZpZWxkc1xuICpcbiAqIEBwYXJhbSB7KmFycmF5fSBmaWVsZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogcHJpbnRTY2hlbWFGb3JGaWVsZHMoe1xuICogICAgIGlkOiB7IHR5cGU6IGdyYXBocWwuR3JhcGhRTFN0cmluZyB9LFxuICogICAgIHRpdGxlOiB7IHR5cGU6IGdyYXBocWwuR3JhcGhRTFN0cmluZyB9LFxuICogICAgIHZpZXdzOiB7IHR5cGU6IGdyYXBocWwuR3JhcGhRTEludCB9LFxuICogICAgIHVzZXJfaWQ6IHsgdHlwZTogZ3JhcGhxbC5HcmFwaFFMU3RyaW5nIH0sXG4gKiB9KTtcbiAqIC8vIHR5cGUgTWFpbiB7XG4gKiAvLyAgIGlkOiBTdHJpbmdcbiAqIC8vICAgdGl0bGU6IFN0cmluZ1xuICogLy8gICB2aWV3czogU3RyaW5nXG4gKiAvLyAgIHVzZXJfaWQ6IFN0cmluZ1xuICogLy8gfVxuICogLy9cbiAqIC8vIHR5cGUgUXVlcnkge1xuICogLy8gICBmb286IE1haW5cbiAqIC8vIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW50U2NoZW1hRm9yRmllbGRzKGZpZWxkcylcbntcblx0Y29uc3QgbWFpblR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuXHRcdG5hbWU6ICdNYWluJyxcblx0XHRmaWVsZHMsXG5cdH0pO1xuXG5cdGNvbnN0IHF1ZXJ5VHlwZSA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG5cdFx0bmFtZTogJ1F1ZXJ5Jyxcblx0XHRmaWVsZHM6IHtcblx0XHRcdGZvbzogeyB0eXBlOiBtYWluVHlwZSB9LFxuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IHNjaGVtYSA9IG5ldyBHcmFwaFFMU2NoZW1hKHsgcXVlcnk6IHF1ZXJ5VHlwZSB9KTtcblx0cmV0dXJuIHByaW50U2NoZW1hKHNjaGVtYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFNjaGVtYUZvclR5cGVzKHR5cGVzKVxue1xuXHRjb25zdCB0eXBlc1NjaGVtYSA9IHR5cGVzLnJlZHVjZSgoc2NoZW1hLCB0eXBlKSA9PlxuXHR7XG5cdFx0c2NoZW1hW3R5cGUubmFtZV0gPSB0eXBlO1xuXHRcdHJldHVybiBzY2hlbWE7XG5cdH0sIHt9KTtcblx0Y29uc3QgcXVlcnlUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcblx0XHRuYW1lOiAnUXVlcnknLFxuXHRcdGZpZWxkczogdHlwZXMucmVkdWNlKChmaWVsZHMsIHR5cGUpID0+XG5cdFx0e1xuXHRcdFx0ZmllbGRzW3R5cGUubmFtZV0gPSB7IHR5cGUgfTtcblx0XHRcdHJldHVybiBmaWVsZHM7XG5cdFx0fSwge30pLFxuXHR9KTtcblxuXHRjb25zdCBzY2hlbWEgPSBuZXcgR3JhcGhRTFNjaGVtYSh7IC4uLnR5cGVzU2NoZW1hLCBxdWVyeTogcXVlcnlUeXBlIH0pO1xuXHRyZXR1cm4gcHJpbnRTY2hlbWEoc2NoZW1hKTtcbn1cbiJdfQ==