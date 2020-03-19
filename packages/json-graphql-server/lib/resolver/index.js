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
function getQueryResolvers(entityName, entityData) {
    let _key = pluralize_1.default(entityName);
    return {
        [`all${_key}`]: all_1.default(entityData),
        [`_all${_key}Meta`]: meta_1.default(entityData),
        [entityName]: single_1.default(entityData),
    };
}
exports.getQueryResolvers = getQueryResolvers;
function getMutationResolvers(entityName, entityData) {
    return {
        [`create${entityName}`]: create_1.default(entityData),
        [`update${entityName}`]: update_1.default(entityData),
        [`remove${entityName}`]: remove_1.default(entityData),
    };
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
    var _a, _b, _c, _d;
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
    hasType_1.default(DateType_1.DateType, data, options) ? {
        [DateType_1.DateType.name]: DateType_1.DateType,
    } : {}, 
    /**
     * required because makeExecutableSchema strips resolvers from typeDefs
     */
    hasType_1.default(graphql_type_json_1.default, data, options) ? {
        JSON: graphql_type_json_1.default
    } : {});
    return (_d = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.after) === null || _a === void 0 ? void 0 : _a.resolver) === null || _b === void 0 ? void 0 : _b.call(_a, {
        resolvers,
    }, data)) === null || _c === void 0 ? void 0 : _c.resolvers) !== null && _d !== void 0 ? _d : resolvers;
}
exports.default = resolver;
//# sourceMappingURL=index.js.map