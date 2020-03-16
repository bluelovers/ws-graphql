"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.default = new graphql_1.GraphQLScalarType({
    name: 'Date',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEYXRlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUEwRDtBQUMxRCwrQ0FBd0M7QUFFeEMsa0JBQWUsSUFBSSwyQkFBaUIsQ0FBQztJQUNwQyxJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLFVBQVUsQ0FBQyxLQUFLO1FBRWYsOEJBQThCO1FBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7SUFDN0MsQ0FBQztJQUNELFNBQVMsQ0FBQyxLQUFLO1FBRWQsNkJBQTZCO1FBQzdCLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMscUJBQXFCO0lBQ2xELENBQUM7SUFDRCxZQUFZLENBQUMsR0FBRztRQUVmLG1DQUFtQztRQUNuQywrQ0FBK0M7UUFDL0MsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLGVBQUksQ0FBQyxNQUFNLEVBQzVCO1lBQ0MsTUFBTSxJQUFJLHNCQUFZLENBQ3JCLHFEQUFxRCxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQy9ELENBQUMsR0FBRyxDQUFDLENBQ0wsQ0FBQztTQUNGO1FBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDaEM7WUFDQyxNQUFNLElBQUksc0JBQVksQ0FBQywrQkFBK0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTFNjYWxhclR5cGUsIEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgS2luZCB9IGZyb20gJ2dyYXBocWwvbGFuZ3VhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgR3JhcGhRTFNjYWxhclR5cGUoe1xuXHRuYW1lOiAnRGF0ZScsXG5cdGRlc2NyaXB0aW9uOiAnRGF0ZSB0eXBlJyxcblx0cGFyc2VWYWx1ZSh2YWx1ZSlcblx0e1xuXHRcdC8vIHZhbHVlIGNvbWVzIGZyb20gdGhlIGNsaWVudFxuXHRcdHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7IC8vIHNlbnQgdG8gcmVzb2x2ZXJzXG5cdH0sXG5cdHNlcmlhbGl6ZSh2YWx1ZSlcblx0e1xuXHRcdC8vIHZhbHVlIGNvbWVzIGZyb20gcmVzb2x2ZXJzXG5cdFx0cmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7IC8vIHNlbnQgdG8gdGhlIGNsaWVudFxuXHR9LFxuXHRwYXJzZUxpdGVyYWwoYXN0KVxuXHR7XG5cdFx0Ly8gYXN0IGNvbWVzIGZyb20gcGFyc2luZyB0aGUgcXVlcnlcblx0XHQvLyB0aGlzIGlzIHdoZXJlIHlvdSBjYW4gdmFsaWRhdGUgYW5kIHRyYW5zZm9ybVxuXHRcdGlmIChhc3Qua2luZCAhPT0gS2luZC5TVFJJTkcpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IEdyYXBoUUxFcnJvcihcblx0XHRcdFx0YFF1ZXJ5IGVycm9yOiBDYW4gb25seSBwYXJzZSBkYXRlcyBzdHJpbmdzLCBnb3QgYTogJHthc3Qua2luZH1gLFxuXHRcdFx0XHRbYXN0XSxcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChpc05hTihEYXRlLnBhcnNlKGFzdC52YWx1ZSkpKVxuXHRcdHtcblx0XHRcdHRocm93IG5ldyBHcmFwaFFMRXJyb3IoYFF1ZXJ5IGVycm9yOiBub3QgYSB2YWxpZCBkYXRlYCwgW2FzdF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IERhdGUoYXN0LnZhbHVlKTtcblx0fSxcbn0pO1xuIl19