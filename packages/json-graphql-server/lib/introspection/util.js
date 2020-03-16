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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNGO0FBRXRGLFNBQWdCLFNBQVMsQ0FBQyxLQUFLO0lBRTlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFIRCw4QkFHQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLE1BQWE7SUFFN0MsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQy9CLENBQUM7QUFIRCw0Q0FHQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxLQUFLO0lBRTlCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBSEQsOEJBR0M7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxNQUFhO0lBRTdDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUMvQixDQUFDO0FBSEQsNENBR0M7QUFFRCxTQUFnQixTQUFTLENBQUMsS0FBSztJQUU5QixPQUFPLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUNuQyxDQUFDO0FBSEQsOEJBR0M7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxNQUFhO0lBRTdDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUMvQixDQUFDO0FBSEQsNENBR0M7QUFFRCxTQUFnQixRQUFRLENBQUMsS0FBSztJQUU3QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUNsQyxDQUFDO0FBSEQsNEJBR0M7QUFFRCxTQUFnQixlQUFlLENBQUMsTUFBYTtJQUU1QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDOUIsQ0FBQztBQUhELDBDQUdDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEtBQUs7SUFFNUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFIRCwwQkFHQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxNQUFhO0lBRTNDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUM3QixDQUFDO0FBSEQsd0NBR0M7QUFFRCxTQUFnQixNQUFNLENBQUMsS0FBSztJQUUzQixPQUFPLEtBQUssWUFBWSxJQUFJLENBQUM7QUFDOUIsQ0FBQztBQUhELHdCQUdDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLE1BQWE7SUFFMUMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFIRCxzQ0FHQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxLQUFLO0lBRTdCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0FBQ3BFLENBQUM7QUFIRCw0QkFHQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxNQUFhO0lBRTVDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUM5QixDQUFDO0FBSEQsMENBR0M7QUFXRCxTQUFnQixvQkFBb0IsQ0FBQyxJQUFrRCxFQUFFLFVBQW1CO0lBRTNHLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLHdCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtBQUNwRCxDQUFDO0FBSEQsb0RBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMU2NhbGFyVHlwZSwgR3JhcGhRTExpc3QsIEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKTogdmFsdWUgaXMgbnVtYmVyXG57XG5cdHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0FyZU51bWVyaWModmFsdWVzOiBhbnlbXSk6IHZhbHVlcyBpcyBudW1iZXJbXVxue1xuXHRyZXR1cm4gdmFsdWVzLmV2ZXJ5KGlzTnVtZXJpYylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSk6IHZhbHVlIGlzIG51bWJlclxue1xuXHRyZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXNBcmVJbnRlZ2VyKHZhbHVlczogYW55W10pOiB2YWx1ZXMgaXMgbnVtYmVyW11cbntcblx0cmV0dXJuIHZhbHVlcy5ldmVyeShpc0ludGVnZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpOiB2YWx1ZSBpcyBib29sZWFuXG57XG5cdHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0FyZUJvb2xlYW4odmFsdWVzOiBhbnlbXSk6IHZhbHVlcyBpcyBib29sZWFuW11cbntcblx0cmV0dXJuIHZhbHVlcy5ldmVyeShpc0Jvb2xlYW4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSk6IHZhbHVlIGlzIHN0cmluZ1xue1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0FyZVN0cmluZyh2YWx1ZXM6IGFueVtdKTogdmFsdWVzIGlzIHN0cmluZ1tdXG57XG5cdHJldHVybiB2YWx1ZXMuZXZlcnkoaXNTdHJpbmcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKTogdmFsdWUgaXMgYW55W11cbntcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVzQXJlQXJyYXkodmFsdWVzOiBhbnlbXSk6IHZhbHVlcyBpcyBhbnlbXVtdXG57XG5cdHJldHVybiB2YWx1ZXMuZXZlcnkoaXNBcnJheSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSk6IHZhbHVlIGlzIERhdGVcbntcblx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlc0FyZURhdGUodmFsdWVzOiBhbnlbXSk6IHZhbHVlcyBpcyBEYXRlW11cbntcblx0cmV0dXJuIHZhbHVlcy5ldmVyeShpc0RhdGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSlcbntcblx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVzQXJlT2JqZWN0KHZhbHVlczogYW55W10pXG57XG5cdHJldHVybiB2YWx1ZXMuZXZlcnkoaXNPYmplY3QpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZFR5cGVPck5vcm1hbDxUIGV4dGVuZHMgR3JhcGhRTFNjYWxhclR5cGUgfCBHcmFwaFFMTGlzdDxHcmFwaFFMVHlwZT4+KHR5cGU6IFQsXG5cdGlzUmVxdWlyZWQ6IHRydWUsXG4pOiBHcmFwaFFMTm9uTnVsbDxUPlxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkVHlwZU9yTm9ybWFsPFQgZXh0ZW5kcyBHcmFwaFFMU2NhbGFyVHlwZSB8IEdyYXBoUUxMaXN0PEdyYXBoUUxUeXBlPj4odHlwZTogVCxcblx0aXNSZXF1aXJlZD86IGZhbHNlLFxuKTogVFxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkVHlwZU9yTm9ybWFsPFQgZXh0ZW5kcyBHcmFwaFFMU2NhbGFyVHlwZSB8IEdyYXBoUUxMaXN0PEdyYXBoUUxUeXBlPj4odHlwZTogVCxcblx0aXNSZXF1aXJlZDogYm9vbGVhbixcbik6IEdyYXBoUUxOb25OdWxsPFQ+IHwgVFxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkVHlwZU9yTm9ybWFsKHR5cGU6IEdyYXBoUUxTY2FsYXJUeXBlIHwgR3JhcGhRTExpc3Q8R3JhcGhRTFR5cGU+LCBpc1JlcXVpcmVkOiBib29sZWFuKVxue1xuXHRyZXR1cm4gaXNSZXF1aXJlZCA/IG5ldyBHcmFwaFFMTm9uTnVsbCh0eXBlKSA6IHR5cGVcbn1cbiJdfQ==