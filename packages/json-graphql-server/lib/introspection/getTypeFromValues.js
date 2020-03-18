"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const DateType_1 = __importDefault(require("./type/DateType"));
const util_1 = require("./util");
function getTypeFromValues(name, values = [], isRequired = false) {
    if (name === 'id' || name.substr(name.length - 3) === '_id') {
        return util_1.requiredTypeOrNormal(graphql_1.GraphQLID, isRequired);
    }
    if (values.length > 0) {
        if (util_1.valuesAreArray(values)) {
            const leafValues = values.reduce((agg, arr) => {
                arr.forEach(value => agg.push(value));
                return agg;
            }, []);
            if (util_1.valuesAreBoolean(leafValues)) {
                return util_1.requiredTypeOrNormal(new graphql_1.GraphQLList(graphql_1.GraphQLBoolean), isRequired);
            }
            if (util_1.valuesAreString(leafValues)) {
                return util_1.requiredTypeOrNormal(new graphql_1.GraphQLList(graphql_1.GraphQLString), isRequired);
            }
            if (util_1.valuesAreInteger(leafValues)) {
                return util_1.requiredTypeOrNormal(new graphql_1.GraphQLList(graphql_1.GraphQLInt), isRequired);
            }
            if (util_1.valuesAreNumeric(leafValues)) {
                return util_1.requiredTypeOrNormal(new graphql_1.GraphQLList(graphql_1.GraphQLFloat), isRequired);
            }
            if (util_1.valuesAreObject(leafValues)) {
                return util_1.requiredTypeOrNormal(graphql_type_json_1.default, isRequired);
            }
            return util_1.requiredTypeOrNormal(new graphql_1.GraphQLList(graphql_1.GraphQLString), isRequired); // FIXME introspect further
        }
        if (util_1.valuesAreBoolean(values)) {
            return util_1.requiredTypeOrNormal(graphql_1.GraphQLBoolean, isRequired);
        }
        if (util_1.valuesAreDate(values)) {
            return util_1.requiredTypeOrNormal(DateType_1.default, isRequired);
        }
        if (util_1.valuesAreString(values)) {
            return util_1.requiredTypeOrNormal(graphql_1.GraphQLString, isRequired);
        }
        if (util_1.valuesAreInteger(values)) {
            return util_1.requiredTypeOrNormal(graphql_1.GraphQLInt, isRequired);
        }
        if (util_1.valuesAreNumeric(values)) {
            return util_1.requiredTypeOrNormal(graphql_1.GraphQLFloat, isRequired);
        }
        if (util_1.valuesAreObject(values)) {
            return util_1.requiredTypeOrNormal(graphql_type_json_1.default, isRequired);
        }
    }
    return util_1.requiredTypeOrNormal(graphql_1.GraphQLString, isRequired); // FIXME introspect further
}
exports.default = getTypeFromValues;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VHlwZUZyb21WYWx1ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRUeXBlRnJvbVZhbHVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQVNpQjtBQUNqQiwwRUFBNEM7QUFDNUMsK0RBQXVDO0FBQ3ZDLGlDQVNnQjtBQUVoQixTQUF3QixpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxVQUFVLEdBQUcsS0FBSztJQUV0RixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFDM0Q7UUFDQyxPQUFPLDJCQUFvQixDQUFDLG1CQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDbkQ7SUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQjtRQUNDLElBQUkscUJBQWMsQ0FBQyxNQUFNLENBQUMsRUFDMUI7WUFDQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUU3QyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEdBQUcsQ0FBQztZQUNaLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNQLElBQUksdUJBQWdCLENBQUMsVUFBVSxDQUFDLEVBQ2hDO2dCQUNDLE9BQU8sMkJBQW9CLENBQzFCLElBQUkscUJBQVcsQ0FBQyx3QkFBYyxDQUFDLEVBQy9CLFVBQVUsQ0FDVixDQUFDO2FBQ0Y7WUFDRCxJQUFJLHNCQUFlLENBQUMsVUFBVSxDQUFDLEVBQy9CO2dCQUNDLE9BQU8sMkJBQW9CLENBQzFCLElBQUkscUJBQVcsQ0FBQyx1QkFBYSxDQUFDLEVBQzlCLFVBQVUsQ0FDVixDQUFDO2FBQ0Y7WUFDRCxJQUFJLHVCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUNoQztnQkFDQyxPQUFPLDJCQUFvQixDQUMxQixJQUFJLHFCQUFXLENBQUMsb0JBQVUsQ0FBQyxFQUMzQixVQUFVLENBQ1YsQ0FBQzthQUNGO1lBQ0QsSUFBSSx1QkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFDaEM7Z0JBQ0MsT0FBTywyQkFBb0IsQ0FDMUIsSUFBSSxxQkFBVyxDQUFDLHNCQUFZLENBQUMsRUFDN0IsVUFBVSxDQUNWLENBQUM7YUFDRjtZQUNELElBQUksc0JBQWUsQ0FBQyxVQUFVLENBQUMsRUFDL0I7Z0JBQ0MsT0FBTywyQkFBb0IsQ0FBQywyQkFBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsT0FBTywyQkFBb0IsQ0FDMUIsSUFBSSxxQkFBVyxDQUFDLHVCQUFhLENBQUMsRUFDOUIsVUFBVSxDQUNWLENBQUMsQ0FBQywyQkFBMkI7U0FDOUI7UUFDRCxJQUFJLHVCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUM1QjtZQUNDLE9BQU8sMkJBQW9CLENBQUMsd0JBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksb0JBQWEsQ0FBQyxNQUFNLENBQUMsRUFDekI7WUFDQyxPQUFPLDJCQUFvQixDQUFDLGtCQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLHNCQUFlLENBQUMsTUFBTSxDQUFDLEVBQzNCO1lBQ0MsT0FBTywyQkFBb0IsQ0FBQyx1QkFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSx1QkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFDNUI7WUFDQyxPQUFPLDJCQUFvQixDQUFDLG9CQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLHVCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUM1QjtZQUNDLE9BQU8sMkJBQW9CLENBQUMsc0JBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksc0JBQWUsQ0FBQyxNQUFNLENBQUMsRUFDM0I7WUFDQyxPQUFPLDJCQUFvQixDQUFDLDJCQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDckQ7S0FDRDtJQUNELE9BQU8sMkJBQW9CLENBQUMsdUJBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtBQUNwRixDQUFDO0FBOUVELG9DQThFQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRHcmFwaFFMQm9vbGVhbixcblx0R3JhcGhRTEZsb2F0LFxuXHRHcmFwaFFMSUQsXG5cdEdyYXBoUUxJbnQsXG5cdEdyYXBoUUxMaXN0LFxuXHRHcmFwaFFMU3RyaW5nLFxuXHRHcmFwaFFMU2NhbGFyVHlwZSxcblx0R3JhcGhRTFR5cGUsXG59IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IEdyYXBoUUxKU09OIGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcbmltcG9ydCBEYXRlVHlwZSBmcm9tICcuL3R5cGUvRGF0ZVR5cGUnO1xuaW1wb3J0IHtcblx0cmVxdWlyZWRUeXBlT3JOb3JtYWwsXG5cdHZhbHVlc0FyZU9iamVjdCxcblx0dmFsdWVzQXJlRGF0ZSxcblx0dmFsdWVzQXJlQXJyYXksXG5cdHZhbHVlc0FyZVN0cmluZyxcblx0dmFsdWVzQXJlQm9vbGVhbixcblx0dmFsdWVzQXJlSW50ZWdlcixcblx0dmFsdWVzQXJlTnVtZXJpYyxcbn0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VHlwZUZyb21WYWx1ZXMobmFtZTogc3RyaW5nLCB2YWx1ZXMgPSBbXSwgaXNSZXF1aXJlZCA9IGZhbHNlKVxue1xuXHRpZiAobmFtZSA9PT0gJ2lkJyB8fCBuYW1lLnN1YnN0cihuYW1lLmxlbmd0aCAtIDMpID09PSAnX2lkJylcblx0e1xuXHRcdHJldHVybiByZXF1aXJlZFR5cGVPck5vcm1hbChHcmFwaFFMSUQsIGlzUmVxdWlyZWQpO1xuXHR9XG5cdGlmICh2YWx1ZXMubGVuZ3RoID4gMClcblx0e1xuXHRcdGlmICh2YWx1ZXNBcmVBcnJheSh2YWx1ZXMpKVxuXHRcdHtcblx0XHRcdGNvbnN0IGxlYWZWYWx1ZXMgPSB2YWx1ZXMucmVkdWNlKChhZ2csIGFycikgPT5cblx0XHRcdHtcblx0XHRcdFx0YXJyLmZvckVhY2godmFsdWUgPT4gYWdnLnB1c2godmFsdWUpKTtcblx0XHRcdFx0cmV0dXJuIGFnZztcblx0XHRcdH0sIFtdKTtcblx0XHRcdGlmICh2YWx1ZXNBcmVCb29sZWFuKGxlYWZWYWx1ZXMpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoXG5cdFx0XHRcdFx0bmV3IEdyYXBoUUxMaXN0KEdyYXBoUUxCb29sZWFuKSxcblx0XHRcdFx0XHRpc1JlcXVpcmVkLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlc0FyZVN0cmluZyhsZWFmVmFsdWVzKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKFxuXHRcdFx0XHRcdG5ldyBHcmFwaFFMTGlzdChHcmFwaFFMU3RyaW5nKSxcblx0XHRcdFx0XHRpc1JlcXVpcmVkLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlc0FyZUludGVnZXIobGVhZlZhbHVlcykpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlZFR5cGVPck5vcm1hbChcblx0XHRcdFx0XHRuZXcgR3JhcGhRTExpc3QoR3JhcGhRTEludCksXG5cdFx0XHRcdFx0aXNSZXF1aXJlZCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZXNBcmVOdW1lcmljKGxlYWZWYWx1ZXMpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoXG5cdFx0XHRcdFx0bmV3IEdyYXBoUUxMaXN0KEdyYXBoUUxGbG9hdCksXG5cdFx0XHRcdFx0aXNSZXF1aXJlZCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZXNBcmVPYmplY3QobGVhZlZhbHVlcykpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlZFR5cGVPck5vcm1hbChHcmFwaFFMSlNPTiwgaXNSZXF1aXJlZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoXG5cdFx0XHRcdG5ldyBHcmFwaFFMTGlzdChHcmFwaFFMU3RyaW5nKSxcblx0XHRcdFx0aXNSZXF1aXJlZCxcblx0XHRcdCk7IC8vIEZJWE1FIGludHJvc3BlY3QgZnVydGhlclxuXHRcdH1cblx0XHRpZiAodmFsdWVzQXJlQm9vbGVhbih2YWx1ZXMpKVxuXHRcdHtcblx0XHRcdHJldHVybiByZXF1aXJlZFR5cGVPck5vcm1hbChHcmFwaFFMQm9vbGVhbiwgaXNSZXF1aXJlZCk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZXNBcmVEYXRlKHZhbHVlcykpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKERhdGVUeXBlLCBpc1JlcXVpcmVkKTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlc0FyZVN0cmluZyh2YWx1ZXMpKVxuXHRcdHtcblx0XHRcdHJldHVybiByZXF1aXJlZFR5cGVPck5vcm1hbChHcmFwaFFMU3RyaW5nLCBpc1JlcXVpcmVkKTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlc0FyZUludGVnZXIodmFsdWVzKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoR3JhcGhRTEludCwgaXNSZXF1aXJlZCk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZXNBcmVOdW1lcmljKHZhbHVlcykpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKEdyYXBoUUxGbG9hdCwgaXNSZXF1aXJlZCk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZXNBcmVPYmplY3QodmFsdWVzKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoR3JhcGhRTEpTT04sIGlzUmVxdWlyZWQpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoR3JhcGhRTFN0cmluZywgaXNSZXF1aXJlZCk7IC8vIEZJWE1FIGludHJvc3BlY3QgZnVydGhlclxufTtcbiJdfQ==