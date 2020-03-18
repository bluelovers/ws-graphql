"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateISOStringType = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.DateISOStringType = new graphql_1.GraphQLScalarType({
    name: 'DateISOString',
    description: 'Date type',
    parseValue(value) {
        // value comes from the client
        return new Date(value); // sent to resolvers
    },
    serialize(value) {
        // value comes from resolvers
        return value.toISOString(); // sent to the client
    },
    parseLiteral(ast) {
        // ast comes from parsing the query
        // this is where you can validate and transform
        if (ast.kind !== language_1.Kind.STRING) {
            throw new graphql_1.GraphQLError(`Query error: Can only parse dates strings, got a: ${ast.kind}`, [ast]);
        }
        if (isNaN(Date.parse(ast.value))) {
            throw new graphql_1.GraphQLError(`Query error: not a valid date`, [ast]);
        }
        return new Date(ast.value);
    },
});
exports.default = exports.DateISOStringType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZUlTT1N0cmluZ1R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEYXRlSVNPU3RyaW5nVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBMEQ7QUFDMUQsK0NBQXdDO0FBRTNCLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSwyQkFBaUIsQ0FBQztJQUN0RCxJQUFJLEVBQUUsZUFBZTtJQUNyQixXQUFXLEVBQUUsV0FBVztJQUN4QixVQUFVLENBQUMsS0FBc0I7UUFFaEMsOEJBQThCO1FBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7SUFDN0MsQ0FBQztJQUNELFNBQVMsQ0FBQyxLQUFXO1FBRXBCLDZCQUE2QjtRQUM3QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtJQUNsRCxDQUFDO0lBQ0QsWUFBWSxDQUFDLEdBQUc7UUFFZixtQ0FBbUM7UUFDbkMsK0NBQStDO1FBQy9DLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxlQUFJLENBQUMsTUFBTSxFQUM1QjtZQUNDLE1BQU0sSUFBSSxzQkFBWSxDQUNyQixxREFBcUQsR0FBRyxDQUFDLElBQUksRUFBRSxFQUMvRCxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUM7U0FDRjtRQUNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ2hDO1lBQ0MsTUFBTSxJQUFJLHNCQUFZLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVILGtCQUFlLHlCQUFpQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUsIEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuXG5leHBvcnQgY29uc3QgRGF0ZUlTT1N0cmluZ1R5cGUgPSBuZXcgR3JhcGhRTFNjYWxhclR5cGUoe1xuXHRuYW1lOiAnRGF0ZUlTT1N0cmluZycsXG5cdGRlc2NyaXB0aW9uOiAnRGF0ZSB0eXBlJyxcblx0cGFyc2VWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKVxuXHR7XG5cdFx0Ly8gdmFsdWUgY29tZXMgZnJvbSB0aGUgY2xpZW50XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHZhbHVlKTsgLy8gc2VudCB0byByZXNvbHZlcnNcblx0fSxcblx0c2VyaWFsaXplKHZhbHVlOiBEYXRlKVxuXHR7XG5cdFx0Ly8gdmFsdWUgY29tZXMgZnJvbSByZXNvbHZlcnNcblx0XHRyZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTsgLy8gc2VudCB0byB0aGUgY2xpZW50XG5cdH0sXG5cdHBhcnNlTGl0ZXJhbChhc3QpXG5cdHtcblx0XHQvLyBhc3QgY29tZXMgZnJvbSBwYXJzaW5nIHRoZSBxdWVyeVxuXHRcdC8vIHRoaXMgaXMgd2hlcmUgeW91IGNhbiB2YWxpZGF0ZSBhbmQgdHJhbnNmb3JtXG5cdFx0aWYgKGFzdC5raW5kICE9PSBLaW5kLlNUUklORylcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgR3JhcGhRTEVycm9yKFxuXHRcdFx0XHRgUXVlcnkgZXJyb3I6IENhbiBvbmx5IHBhcnNlIGRhdGVzIHN0cmluZ3MsIGdvdCBhOiAke2FzdC5raW5kfWAsXG5cdFx0XHRcdFthc3RdLFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKGlzTmFOKERhdGUucGFyc2UoYXN0LnZhbHVlKSkpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IEdyYXBoUUxFcnJvcihgUXVlcnkgZXJyb3I6IG5vdCBhIHZhbGlkIGRhdGVgLCBbYXN0XSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgRGF0ZShhc3QudmFsdWUpO1xuXHR9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVJU09TdHJpbmdUeXBlXG4iXX0=