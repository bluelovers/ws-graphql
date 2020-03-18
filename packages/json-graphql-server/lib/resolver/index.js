"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResolversFromData = exports.getMutationResolvers = exports.getQueryResolvers = void 0;
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
const all_1 = __importDefault(require("./Query/all"));
const meta_1 = __importDefault(require("./Query/meta"));
const single_1 = __importDefault(require("./Query/single"));
const create_1 = __importDefault(require("./Mutation/create"));
const update_1 = __importDefault(require("./Mutation/update"));
const remove_1 = __importDefault(require("./Mutation/remove"));
const index_1 = __importDefault(require("./Entity/index"));
const nameConverter_1 = require("../utils/nameConverter");
const hasType_1 = __importDefault(require("../introspection/hasType"));
const DateType_1 = require("../introspection/type/DateType");
const pluralize_1 = __importDefault(require("inflection2/pluralize"));
function getQueryResolvers(entityName, data) {
    let _key = pluralize_1.default(entityName);
    return ({
        [`all${_key}`]: all_1.default(data),
        [`_all${_key}Meta`]: meta_1.default(data),
        [entityName]: single_1.default(data),
    });
}
exports.getQueryResolvers = getQueryResolvers;
function getMutationResolvers(entityName, data) {
    return ({
        [`create${entityName}`]: create_1.default(data),
        [`update${entityName}`]: update_1.default(data),
        [`remove${entityName}`]: remove_1.default(data),
    });
}
exports.getMutationResolvers = getMutationResolvers;
function createResolversFromData(data, cb) {
    return Object.keys(data)
        .reduce((resolvers, key) => Object.assign(
    //{},
    resolvers, cb(key, data)), {});
}
exports.createResolversFromData = createResolversFromData;
function resolver(data, options = {}) {
    const resolvers = Object.assign({}, {
        Query: createResolversFromData(data, (key, data) => getQueryResolvers(nameConverter_1.getTypeFromKey(key), data[key])),
        Mutation: createResolversFromData(data, (key, data) => getMutationResolvers(nameConverter_1.getTypeFromKey(key), data[key])),
    }, createResolversFromData(data, (key, data) => {
        return {
            [nameConverter_1.getTypeFromKey(key)]: index_1.default(key, data),
        };
    }), 
    /**
     * required because makeExecutableSchema strips resolvers from typeDefs
     */
    hasType_1.default(DateType_1.DateType, data) ? {
        [DateType_1.DateType.name]: DateType_1.DateType,
    } : {}, 
    /**
     * required because makeExecutableSchema strips resolvers from typeDefs
     */
    hasType_1.default(graphql_type_json_1.default, data) ? {
        JSON: graphql_type_json_1.default
    } : {});
    return resolvers;
}
exports.default = resolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwRUFBNEM7QUFFNUMsc0RBQThCO0FBQzlCLHdEQUFnQztBQUNoQyw0REFBb0M7QUFDcEMsK0RBQXVDO0FBQ3ZDLCtEQUF1QztBQUN2QywrREFBdUM7QUFDdkMsMkRBQTRDO0FBQzVDLDBEQUF3RDtBQUN4RCx1RUFBK0M7QUFHL0MsNkRBQTBEO0FBQzFELHNFQUE4QztBQUU5QyxTQUFnQixpQkFBaUIsQ0FBd0QsVUFBa0IsRUFBRSxJQUFTO0lBRXJILElBQUksSUFBSSxHQUFHLG1CQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFakMsT0FBTyxDQUFDO1FBQ1AsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBRyxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLENBQUMsVUFBVSxDQUFDLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUM7S0FDMUIsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQVRELDhDQVNDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQXdELFVBQWtCLEVBQzdHLElBQVM7SUFHVCxPQUFPLENBQUM7UUFDUCxDQUFDLFNBQVMsVUFBVSxFQUFFLENBQUMsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQztRQUNyQyxDQUFDLFNBQVMsVUFBVSxFQUFFLENBQUMsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQztRQUNyQyxDQUFDLFNBQVMsVUFBVSxFQUFFLENBQUMsRUFBRSxnQkFBTSxDQUFDLElBQUksQ0FBQztLQUNyQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBVEQsb0RBU0M7QUFFRCxTQUFnQix1QkFBdUIsQ0FBd0QsSUFBd0IsRUFDdEgsRUFBa0Q7SUFHbEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN0QixNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FDekIsTUFBTSxDQUFDLE1BQU07SUFDWixLQUFLO0lBQ0wsU0FBUyxFQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQ2IsRUFDRixFQUFnQixDQUNoQixDQUFBO0FBQ0gsQ0FBQztBQWJELDBEQWFDO0FBRUQsU0FBd0IsUUFBUSxDQUF3RCxJQUF3QixFQUFFLFVBQW9CLEVBQUU7SUFFdkksTUFBTSxTQUFTLEdBQW1CLE1BQU0sQ0FBQyxNQUFNLENBQzlDLEVBQWdCLEVBRWhCO1FBRUMsS0FBSyxFQUFFLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLDhCQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEcsUUFBUSxFQUFFLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLDhCQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FFNUcsRUFFRCx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFFM0MsT0FBTztZQUNOLENBQUMsOEJBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGVBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1NBQ2hELENBQUE7SUFDRixDQUFDLENBQUM7SUFFRjs7T0FFRztJQUNILGlCQUFPLENBQUMsbUJBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLG1CQUFRO0tBQ3pCLENBQUMsQ0FBQyxDQUFDLEVBQWdCO0lBRXBCOztPQUVHO0lBQ0gsaUJBQU8sQ0FBQywyQkFBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLEVBQUUsMkJBQVc7S0FDakIsQ0FBQyxDQUFDLENBQUMsRUFBZ0IsQ0FDcEIsQ0FBQztJQUVGLE9BQU8sU0FBUyxDQUFBO0FBQ2pCLENBQUM7QUFwQ0QsMkJBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyYXBoUUxKU09OIGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcblxuaW1wb3J0IGFsbCBmcm9tICcuL1F1ZXJ5L2FsbCc7XG5pbXBvcnQgbWV0YSBmcm9tICcuL1F1ZXJ5L21ldGEnO1xuaW1wb3J0IHNpbmdsZSBmcm9tICcuL1F1ZXJ5L3NpbmdsZSc7XG5pbXBvcnQgY3JlYXRlIGZyb20gJy4vTXV0YXRpb24vY3JlYXRlJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9NdXRhdGlvbi91cGRhdGUnO1xuaW1wb3J0IHJlbW92ZSBmcm9tICcuL011dGF0aW9uL3JlbW92ZSc7XG5pbXBvcnQgZW50aXR5UmVzb2x2ZXIgZnJvbSAnLi9FbnRpdHkvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0VHlwZUZyb21LZXkgfSBmcm9tICcuLi91dGlscy9uYW1lQ29udmVydGVyJztcbmltcG9ydCBoYXNUeXBlIGZyb20gJy4uL2ludHJvc3BlY3Rpb24vaGFzVHlwZSc7XG5pbXBvcnQgeyBJU291cmNlRGF0YVJvb3QsIElTb3VyY2VEYXRhUm93QmFzZSwgSVNvdXJjZURhdGFSb3dCYXNlQ29yZSwgSU9wdGlvbnMsIElSZXNvbHZlcnNMYXp5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgSVJlc29sdmVycyB9IGZyb20gJ2dyYXBocWwtdG9vbHMnO1xuaW1wb3J0IHsgRGF0ZVR5cGUgfSBmcm9tICcuLi9pbnRyb3NwZWN0aW9uL3R5cGUvRGF0ZVR5cGUnO1xuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdpbmZsZWN0aW9uMi9wbHVyYWxpemUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlSZXNvbHZlcnM8VCBleHRlbmRzIElTb3VyY2VEYXRhUm93QmFzZUNvcmUgPSBJU291cmNlRGF0YVJvd0Jhc2U+KGVudGl0eU5hbWU6IHN0cmluZywgZGF0YTogVFtdKVxue1xuXHRsZXQgX2tleSA9IHBsdXJhbGl6ZShlbnRpdHlOYW1lKTtcblxuXHRyZXR1cm4gKHtcblx0XHRbYGFsbCR7X2tleX1gXTogYWxsKGRhdGEpLFxuXHRcdFtgX2FsbCR7X2tleX1NZXRhYF06IG1ldGEoZGF0YSksXG5cdFx0W2VudGl0eU5hbWVdOiBzaW5nbGUoZGF0YSksXG5cdH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNdXRhdGlvblJlc29sdmVyczxUIGV4dGVuZHMgSVNvdXJjZURhdGFSb3dCYXNlQ29yZSA9IElTb3VyY2VEYXRhUm93QmFzZT4oZW50aXR5TmFtZTogc3RyaW5nLFxuXHRkYXRhOiBUW10sXG4pXG57XG5cdHJldHVybiAoe1xuXHRcdFtgY3JlYXRlJHtlbnRpdHlOYW1lfWBdOiBjcmVhdGUoZGF0YSksXG5cdFx0W2B1cGRhdGUke2VudGl0eU5hbWV9YF06IHVwZGF0ZShkYXRhKSxcblx0XHRbYHJlbW92ZSR7ZW50aXR5TmFtZX1gXTogcmVtb3ZlKGRhdGEpLFxuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlc29sdmVyc0Zyb21EYXRhPFQgZXh0ZW5kcyBJU291cmNlRGF0YVJvd0Jhc2VDb3JlID0gSVNvdXJjZURhdGFSb3dCYXNlPihkYXRhOiBJU291cmNlRGF0YVJvb3Q8VD4sXG5cdGNiOiAoa2V5OiBzdHJpbmcsIGRhdGE6IElTb3VyY2VEYXRhUm9vdDxUPikgPT4gYW55LFxuKVxue1xuXHRyZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcblx0XHQucmVkdWNlKChyZXNvbHZlcnMsIGtleSkgPT5cblx0XHRcdFx0T2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHQvL3t9LFxuXHRcdFx0XHRcdHJlc29sdmVycyxcblx0XHRcdFx0XHRjYihrZXksIGRhdGEpLFxuXHRcdFx0XHQpLFxuXHRcdFx0e30gYXMgSVJlc29sdmVycyxcblx0XHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVyPFQgZXh0ZW5kcyBJU291cmNlRGF0YVJvd0Jhc2VDb3JlID0gSVNvdXJjZURhdGFSb3dCYXNlPihkYXRhOiBJU291cmNlRGF0YVJvb3Q8VD4sIG9wdGlvbnM6IElPcHRpb25zID0ge30pOiBJUmVzb2x2ZXJzTGF6eVxue1xuXHRjb25zdCByZXNvbHZlcnM6IElSZXNvbHZlcnNMYXp5ID0gT2JqZWN0LmFzc2lnbihcblx0XHR7fSBhcyBJUmVzb2x2ZXJzLFxuXG5cdFx0e1xuXG5cdFx0XHRRdWVyeTogY3JlYXRlUmVzb2x2ZXJzRnJvbURhdGEoZGF0YSwgKGtleSwgZGF0YSkgPT4gZ2V0UXVlcnlSZXNvbHZlcnMoZ2V0VHlwZUZyb21LZXkoa2V5KSwgZGF0YVtrZXldKSksXG5cblx0XHRcdE11dGF0aW9uOiBjcmVhdGVSZXNvbHZlcnNGcm9tRGF0YShkYXRhLCAoa2V5LCBkYXRhKSA9PiBnZXRNdXRhdGlvblJlc29sdmVycyhnZXRUeXBlRnJvbUtleShrZXkpLCBkYXRhW2tleV0pKSxcblxuXHRcdH0sXG5cblx0XHRjcmVhdGVSZXNvbHZlcnNGcm9tRGF0YShkYXRhLCAoa2V5LCBkYXRhKSA9PlxuXHRcdHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFtnZXRUeXBlRnJvbUtleShrZXkpXTogZW50aXR5UmVzb2x2ZXIoa2V5LCBkYXRhKSxcblx0XHRcdH1cblx0XHR9KSxcblxuXHRcdC8qKlxuXHRcdCAqIHJlcXVpcmVkIGJlY2F1c2UgbWFrZUV4ZWN1dGFibGVTY2hlbWEgc3RyaXBzIHJlc29sdmVycyBmcm9tIHR5cGVEZWZzXG5cdFx0ICovXG5cdFx0aGFzVHlwZShEYXRlVHlwZSwgZGF0YSkgPyB7XG5cdFx0XHRbRGF0ZVR5cGUubmFtZV06IERhdGVUeXBlLFxuXHRcdH0gOiB7fSBhcyBJUmVzb2x2ZXJzLFxuXG5cdFx0LyoqXG5cdFx0ICogcmVxdWlyZWQgYmVjYXVzZSBtYWtlRXhlY3V0YWJsZVNjaGVtYSBzdHJpcHMgcmVzb2x2ZXJzIGZyb20gdHlwZURlZnNcblx0XHQgKi9cblx0XHRoYXNUeXBlKEdyYXBoUUxKU09OLCBkYXRhKSA/IHtcblx0XHRcdEpTT046IEdyYXBoUUxKU09OXG5cdFx0fSA6IHt9IGFzIElSZXNvbHZlcnMsXG5cdCk7XG5cblx0cmV0dXJuIHJlc29sdmVyc1xufVxuIl19