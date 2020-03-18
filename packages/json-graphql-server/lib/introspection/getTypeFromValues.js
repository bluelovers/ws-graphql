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
//# sourceMappingURL=getTypeFromValues.js.map