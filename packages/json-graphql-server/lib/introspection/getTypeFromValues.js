"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const DateType_1 = __importDefault(require("./DateType"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VHlwZUZyb21WYWx1ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRUeXBlRnJvbVZhbHVlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQVNpQjtBQUNqQiwwRUFBNEM7QUFDNUMsMERBQWtDO0FBQ2xDLGlDQVNnQjtBQUVoQixTQUF3QixpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxVQUFVLEdBQUcsS0FBSztJQUV0RixJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFDM0Q7UUFDQyxPQUFPLDJCQUFvQixDQUFDLG1CQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDbkQ7SUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQjtRQUNDLElBQUkscUJBQWMsQ0FBQyxNQUFNLENBQUMsRUFDMUI7WUFDQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUU3QyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLEdBQUcsQ0FBQztZQUNaLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNQLElBQUksdUJBQWdCLENBQUMsVUFBVSxDQUFDLEVBQ2hDO2dCQUNDLE9BQU8sMkJBQW9CLENBQzFCLElBQUkscUJBQVcsQ0FBQyx3QkFBYyxDQUFDLEVBQy9CLFVBQVUsQ0FDVixDQUFDO2FBQ0Y7WUFDRCxJQUFJLHNCQUFlLENBQUMsVUFBVSxDQUFDLEVBQy9CO2dCQUNDLE9BQU8sMkJBQW9CLENBQzFCLElBQUkscUJBQVcsQ0FBQyx1QkFBYSxDQUFDLEVBQzlCLFVBQVUsQ0FDVixDQUFDO2FBQ0Y7WUFDRCxJQUFJLHVCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUNoQztnQkFDQyxPQUFPLDJCQUFvQixDQUMxQixJQUFJLHFCQUFXLENBQUMsb0JBQVUsQ0FBQyxFQUMzQixVQUFVLENBQ1YsQ0FBQzthQUNGO1lBQ0QsSUFBSSx1QkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFDaEM7Z0JBQ0MsT0FBTywyQkFBb0IsQ0FDMUIsSUFBSSxxQkFBVyxDQUFDLHNCQUFZLENBQUMsRUFDN0IsVUFBVSxDQUNWLENBQUM7YUFDRjtZQUNELElBQUksc0JBQWUsQ0FBQyxVQUFVLENBQUMsRUFDL0I7Z0JBQ0MsT0FBTywyQkFBb0IsQ0FBQywyQkFBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsT0FBTywyQkFBb0IsQ0FDMUIsSUFBSSxxQkFBVyxDQUFDLHVCQUFhLENBQUMsRUFDOUIsVUFBVSxDQUNWLENBQUMsQ0FBQywyQkFBMkI7U0FDOUI7UUFDRCxJQUFJLHVCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUM1QjtZQUNDLE9BQU8sMkJBQW9CLENBQUMsd0JBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksb0JBQWEsQ0FBQyxNQUFNLENBQUMsRUFDekI7WUFDQyxPQUFPLDJCQUFvQixDQUFDLGtCQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLHNCQUFlLENBQUMsTUFBTSxDQUFDLEVBQzNCO1lBQ0MsT0FBTywyQkFBb0IsQ0FBQyx1QkFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSx1QkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFDNUI7WUFDQyxPQUFPLDJCQUFvQixDQUFDLG9CQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLHVCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUM1QjtZQUNDLE9BQU8sMkJBQW9CLENBQUMsc0JBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksc0JBQWUsQ0FBQyxNQUFNLENBQUMsRUFDM0I7WUFDQyxPQUFPLDJCQUFvQixDQUFDLDJCQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDckQ7S0FDRDtJQUNELE9BQU8sMkJBQW9CLENBQUMsdUJBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtBQUNwRixDQUFDO0FBOUVELG9DQThFQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRHcmFwaFFMQm9vbGVhbixcblx0R3JhcGhRTEZsb2F0LFxuXHRHcmFwaFFMSUQsXG5cdEdyYXBoUUxJbnQsXG5cdEdyYXBoUUxMaXN0LFxuXHRHcmFwaFFMU3RyaW5nLFxuXHRHcmFwaFFMU2NhbGFyVHlwZSxcblx0R3JhcGhRTFR5cGUsXG59IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IEdyYXBoUUxKU09OIGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcbmltcG9ydCBEYXRlVHlwZSBmcm9tICcuL0RhdGVUeXBlJztcbmltcG9ydCB7XG5cdHJlcXVpcmVkVHlwZU9yTm9ybWFsLFxuXHR2YWx1ZXNBcmVPYmplY3QsXG5cdHZhbHVlc0FyZURhdGUsXG5cdHZhbHVlc0FyZUFycmF5LFxuXHR2YWx1ZXNBcmVTdHJpbmcsXG5cdHZhbHVlc0FyZUJvb2xlYW4sXG5cdHZhbHVlc0FyZUludGVnZXIsXG5cdHZhbHVlc0FyZU51bWVyaWMsXG59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFR5cGVGcm9tVmFsdWVzKG5hbWU6IHN0cmluZywgdmFsdWVzID0gW10sIGlzUmVxdWlyZWQgPSBmYWxzZSlcbntcblx0aWYgKG5hbWUgPT09ICdpZCcgfHwgbmFtZS5zdWJzdHIobmFtZS5sZW5ndGggLSAzKSA9PT0gJ19pZCcpXG5cdHtcblx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoR3JhcGhRTElELCBpc1JlcXVpcmVkKTtcblx0fVxuXHRpZiAodmFsdWVzLmxlbmd0aCA+IDApXG5cdHtcblx0XHRpZiAodmFsdWVzQXJlQXJyYXkodmFsdWVzKSlcblx0XHR7XG5cdFx0XHRjb25zdCBsZWFmVmFsdWVzID0gdmFsdWVzLnJlZHVjZSgoYWdnLCBhcnIpID0+XG5cdFx0XHR7XG5cdFx0XHRcdGFyci5mb3JFYWNoKHZhbHVlID0+IGFnZy5wdXNoKHZhbHVlKSk7XG5cdFx0XHRcdHJldHVybiBhZ2c7XG5cdFx0XHR9LCBbXSk7XG5cdFx0XHRpZiAodmFsdWVzQXJlQm9vbGVhbihsZWFmVmFsdWVzKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKFxuXHRcdFx0XHRcdG5ldyBHcmFwaFFMTGlzdChHcmFwaFFMQm9vbGVhbiksXG5cdFx0XHRcdFx0aXNSZXF1aXJlZCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZXNBcmVTdHJpbmcobGVhZlZhbHVlcykpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlZFR5cGVPck5vcm1hbChcblx0XHRcdFx0XHRuZXcgR3JhcGhRTExpc3QoR3JhcGhRTFN0cmluZyksXG5cdFx0XHRcdFx0aXNSZXF1aXJlZCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZXNBcmVJbnRlZ2VyKGxlYWZWYWx1ZXMpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoXG5cdFx0XHRcdFx0bmV3IEdyYXBoUUxMaXN0KEdyYXBoUUxJbnQpLFxuXHRcdFx0XHRcdGlzUmVxdWlyZWQsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWVzQXJlTnVtZXJpYyhsZWFmVmFsdWVzKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKFxuXHRcdFx0XHRcdG5ldyBHcmFwaFFMTGlzdChHcmFwaFFMRmxvYXQpLFxuXHRcdFx0XHRcdGlzUmVxdWlyZWQsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWVzQXJlT2JqZWN0KGxlYWZWYWx1ZXMpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoR3JhcGhRTEpTT04sIGlzUmVxdWlyZWQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKFxuXHRcdFx0XHRuZXcgR3JhcGhRTExpc3QoR3JhcGhRTFN0cmluZyksXG5cdFx0XHRcdGlzUmVxdWlyZWQsXG5cdFx0XHQpOyAvLyBGSVhNRSBpbnRyb3NwZWN0IGZ1cnRoZXJcblx0XHR9XG5cdFx0aWYgKHZhbHVlc0FyZUJvb2xlYW4odmFsdWVzKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoR3JhcGhRTEJvb2xlYW4sIGlzUmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAodmFsdWVzQXJlRGF0ZSh2YWx1ZXMpKVxuXHRcdHtcblx0XHRcdHJldHVybiByZXF1aXJlZFR5cGVPck5vcm1hbChEYXRlVHlwZSwgaXNSZXF1aXJlZCk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZXNBcmVTdHJpbmcodmFsdWVzKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gcmVxdWlyZWRUeXBlT3JOb3JtYWwoR3JhcGhRTFN0cmluZywgaXNSZXF1aXJlZCk7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZXNBcmVJbnRlZ2VyKHZhbHVlcykpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKEdyYXBoUUxJbnQsIGlzUmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAodmFsdWVzQXJlTnVtZXJpYyh2YWx1ZXMpKVxuXHRcdHtcblx0XHRcdHJldHVybiByZXF1aXJlZFR5cGVPck5vcm1hbChHcmFwaFFMRmxvYXQsIGlzUmVxdWlyZWQpO1xuXHRcdH1cblx0XHRpZiAodmFsdWVzQXJlT2JqZWN0KHZhbHVlcykpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKEdyYXBoUUxKU09OLCBpc1JlcXVpcmVkKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlcXVpcmVkVHlwZU9yTm9ybWFsKEdyYXBoUUxTdHJpbmcsIGlzUmVxdWlyZWQpOyAvLyBGSVhNRSBpbnRyb3NwZWN0IGZ1cnRoZXJcbn07XG4iXX0=