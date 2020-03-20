"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypeFromValues = exports.scalarTypeFromEnum = exports.EnumTypeFromValues = void 0;
const graphql_1 = require("graphql");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const DateType_1 = __importDefault(require("../type/DateType"));
const typeOf_1 = require("../../utils/typeOf");
const graphql_type_regexp2_1 = __importDefault(require("graphql-type-regexp2"));
const relationships_1 = require("../../utils/relationships");
const requiredTypeOrNormal_1 = require("../../utils/requiredTypeOrNormal");
var EnumTypeFromValues;
(function (EnumTypeFromValues) {
    EnumTypeFromValues[EnumTypeFromValues["NONE"] = 0] = "NONE";
    EnumTypeFromValues[EnumTypeFromValues["Boolean"] = 1] = "Boolean";
    EnumTypeFromValues[EnumTypeFromValues["Date"] = 2] = "Date";
    EnumTypeFromValues[EnumTypeFromValues["String"] = 3] = "String";
    EnumTypeFromValues[EnumTypeFromValues["Integer"] = 4] = "Integer";
    EnumTypeFromValues[EnumTypeFromValues["Numeric"] = 5] = "Numeric";
    EnumTypeFromValues[EnumTypeFromValues["RegExp"] = 6] = "RegExp";
    EnumTypeFromValues[EnumTypeFromValues["Object"] = 7] = "Object";
})(EnumTypeFromValues = exports.EnumTypeFromValues || (exports.EnumTypeFromValues = {}));
/**
 * 自動檢測內容對應的 ScalarType
 */
function getTypeFromValues(fieldName, values = [], isRequired = false) {
    if (relationships_1.checkFieldNameIsID(fieldName)) {
        return requiredTypeOrNormal_1.requiredTypeOrNormal(graphql_1.GraphQLID, isRequired);
    }
    if (values.length > 0) {
        if (typeOf_1.valuesAreArray(values)) {
            const leafValues = values.reduce((agg, arr) => {
                arr.forEach(value => agg.push(value));
                return agg;
            }, []);
            let _type = checkTypeFromValues(leafValues);
            if (_type) {
                let scalarType = scalarTypeFromEnum(_type);
                if (_type !== 7 /* Object */) {
                    scalarType = new graphql_1.GraphQLList(scalarType);
                }
                return requiredTypeOrNormal_1.requiredTypeOrNormal(scalarType, isRequired);
            }
            return requiredTypeOrNormal_1.requiredTypeOrNormal(new graphql_1.GraphQLList(graphql_1.GraphQLString), isRequired); // FIXME introspect further
        }
        else {
            let _type = checkTypeFromValues(values);
            if (_type) {
                let scalarType = scalarTypeFromEnum(_type);
                return requiredTypeOrNormal_1.requiredTypeOrNormal(scalarType, isRequired);
            }
        }
    }
    return requiredTypeOrNormal_1.requiredTypeOrNormal(graphql_1.GraphQLString, isRequired); // FIXME introspect further
}
exports.default = getTypeFromValues;
;
function scalarTypeFromEnum(_type) {
    let scalarType;
    switch (_type) {
        case 1 /* Boolean */:
            scalarType = graphql_1.GraphQLBoolean;
            break;
        case 2 /* Date */:
            scalarType = DateType_1.default;
            break;
        case 3 /* String */:
            scalarType = graphql_1.GraphQLString;
            break;
        case 4 /* Integer */:
            scalarType = graphql_1.GraphQLInt;
            break;
        case 5 /* Numeric */:
            scalarType = graphql_1.GraphQLFloat;
            break;
        case 6 /* RegExp */:
            scalarType = graphql_type_regexp2_1.default;
            break;
        case 7 /* Object */:
            scalarType = graphql_type_json_1.default;
            break;
        default:
            throw new TypeError(`unknown type ${_type}`);
    }
    return scalarType;
}
exports.scalarTypeFromEnum = scalarTypeFromEnum;
function checkTypeFromValues(values) {
    let _type = null;
    for (const value of values) {
        let _cur = 0 /* NONE */;
        if (typeOf_1.valuesAreBoolean(values)) {
            _cur = 1 /* Boolean */;
        }
        else if (typeOf_1.valuesAreString(values)) {
            _cur = 3 /* String */;
        }
        else if (typeOf_1.valuesAreInteger(values)) {
            _cur = 4 /* Integer */;
        }
        else if (typeOf_1.valuesAreRegExp(values)) {
            _cur = 6 /* RegExp */;
        }
        else if (typeOf_1.valuesAreDate(values)) {
            _cur = 2 /* Date */;
        }
        if (!_cur || (_type !== null && _cur !== _type)) {
            _type = null;
            break;
        }
        else {
            _type = _cur;
        }
    }
    if (_type === null) {
        _type = null;
        for (const value of values) {
            let _cur = 0 /* NONE */;
            if (typeOf_1.valuesAreNumeric(values)) {
                _cur = 5 /* Numeric */;
            }
            else if (typeOf_1.valuesAreObject(values)) {
                _cur = 7 /* Object */;
            }
            if (!_cur || (_type !== null && _cur !== _type)) {
                _type = null;
                break;
            }
            else {
                _type = _cur;
            }
        }
    }
    return _type || null;
}
exports.checkTypeFromValues = checkTypeFromValues;
//# sourceMappingURL=getTypeFromValues.js.map