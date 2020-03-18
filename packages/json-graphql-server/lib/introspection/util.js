"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredTypeOrNormal = exports.valuesAreObject = exports.isObject = exports.valuesAreDate = exports.isDate = exports.valuesAreArray = exports.isArray = exports.valuesAreString = exports.isString = exports.valuesAreBoolean = exports.isBoolean = exports.valuesAreInteger = exports.isInteger = exports.valuesAreNumeric = exports.isNumeric = void 0;
const graphql_1 = require("graphql");
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
exports.isNumeric = isNumeric;
function valuesAreNumeric(values) {
    return values.every(isNumeric);
}
exports.valuesAreNumeric = valuesAreNumeric;
function isInteger(value) {
    return Number.isInteger(value);
}
exports.isInteger = isInteger;
function valuesAreInteger(values) {
    return values.every(isInteger);
}
exports.valuesAreInteger = valuesAreInteger;
function isBoolean(value) {
    return typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
function valuesAreBoolean(values) {
    return values.every(isBoolean);
}
exports.valuesAreBoolean = valuesAreBoolean;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function valuesAreString(values) {
    return values.every(isString);
}
exports.valuesAreString = valuesAreString;
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
function valuesAreArray(values) {
    return values.every(isArray);
}
exports.valuesAreArray = valuesAreArray;
function isDate(value) {
    return value instanceof Date;
}
exports.isDate = isDate;
function valuesAreDate(values) {
    return values.every(isDate);
}
exports.valuesAreDate = valuesAreDate;
function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
exports.isObject = isObject;
function valuesAreObject(values) {
    return values.every(isObject);
}
exports.valuesAreObject = valuesAreObject;
function requiredTypeOrNormal(type, isRequired) {
    return isRequired ? new graphql_1.GraphQLNonNull(type) : type;
}
exports.requiredTypeOrNormal = requiredTypeOrNormal;
//# sourceMappingURL=util.js.map