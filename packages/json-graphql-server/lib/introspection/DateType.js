"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateType = void 0;
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.DateType = new graphql_1.GraphQLScalarType({
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
exports.default = exports.DateType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEYXRlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBMEQ7QUFDMUQsK0NBQXdDO0FBRTNCLFFBQUEsUUFBUSxHQUFHLElBQUksMkJBQWlCLENBQUM7SUFDN0MsSUFBSSxFQUFFLE1BQU07SUFDWixXQUFXLEVBQUUsV0FBVztJQUN4QixVQUFVLENBQUMsS0FBc0I7UUFFaEMsOEJBQThCO1FBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7SUFDN0MsQ0FBQztJQUNELFNBQVMsQ0FBQyxLQUFXO1FBRXBCLDZCQUE2QjtRQUM3QixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtJQUNsRCxDQUFDO0lBQ0QsWUFBWSxDQUFDLEdBQUc7UUFFZixtQ0FBbUM7UUFDbkMsK0NBQStDO1FBQy9DLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxlQUFJLENBQUMsTUFBTSxFQUM1QjtZQUNDLE1BQU0sSUFBSSxzQkFBWSxDQUNyQixxREFBcUQsR0FBRyxDQUFDLElBQUksRUFBRSxFQUMvRCxDQUFDLEdBQUcsQ0FBQyxDQUNMLENBQUM7U0FDRjtRQUNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ2hDO1lBQ0MsTUFBTSxJQUFJLHNCQUFZLENBQUMsK0JBQStCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNELENBQUMsQ0FBQztBQUVILGtCQUFlLGdCQUFRLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSwgR3JhcGhRTEVycm9yIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBLaW5kIH0gZnJvbSAnZ3JhcGhxbC9sYW5ndWFnZSc7XG5cbmV4cG9ydCBjb25zdCBEYXRlVHlwZSA9IG5ldyBHcmFwaFFMU2NhbGFyVHlwZSh7XG5cdG5hbWU6ICdEYXRlJyxcblx0ZGVzY3JpcHRpb246ICdEYXRlIHR5cGUnLFxuXHRwYXJzZVZhbHVlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpXG5cdHtcblx0XHQvLyB2YWx1ZSBjb21lcyBmcm9tIHRoZSBjbGllbnRcblx0XHRyZXR1cm4gbmV3IERhdGUodmFsdWUpOyAvLyBzZW50IHRvIHJlc29sdmVyc1xuXHR9LFxuXHRzZXJpYWxpemUodmFsdWU6IERhdGUpXG5cdHtcblx0XHQvLyB2YWx1ZSBjb21lcyBmcm9tIHJlc29sdmVyc1xuXHRcdHJldHVybiB2YWx1ZS50b0lTT1N0cmluZygpOyAvLyBzZW50IHRvIHRoZSBjbGllbnRcblx0fSxcblx0cGFyc2VMaXRlcmFsKGFzdClcblx0e1xuXHRcdC8vIGFzdCBjb21lcyBmcm9tIHBhcnNpbmcgdGhlIHF1ZXJ5XG5cdFx0Ly8gdGhpcyBpcyB3aGVyZSB5b3UgY2FuIHZhbGlkYXRlIGFuZCB0cmFuc2Zvcm1cblx0XHRpZiAoYXN0LmtpbmQgIT09IEtpbmQuU1RSSU5HKVxuXHRcdHtcblx0XHRcdHRocm93IG5ldyBHcmFwaFFMRXJyb3IoXG5cdFx0XHRcdGBRdWVyeSBlcnJvcjogQ2FuIG9ubHkgcGFyc2UgZGF0ZXMgc3RyaW5ncywgZ290IGE6ICR7YXN0LmtpbmR9YCxcblx0XHRcdFx0W2FzdF0sXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoaXNOYU4oRGF0ZS5wYXJzZShhc3QudmFsdWUpKSlcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgR3JhcGhRTEVycm9yKGBRdWVyeSBlcnJvcjogbm90IGEgdmFsaWQgZGF0ZWAsIFthc3RdKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBEYXRlKGFzdC52YWx1ZSk7XG5cdH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVR5cGVcbiJdfQ==