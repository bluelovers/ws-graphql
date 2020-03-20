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
const graphql_type_regexp2_1 = __importDefault(require("graphql-type-regexp2"));
function getQueryResolvers(entityName, entityData, options = {}) {
    const _key = pluralize_1.default(entityName);
    return {
        [`all${_key}`]: all_1.default(entityData, options),
        [`_all${_key}Meta`]: meta_1.default(entityData, options),
        [entityName]: single_1.default(entityData, options),
    };
}
exports.getQueryResolvers = getQueryResolvers;
function getMutationResolvers(entityName, entityData, options = {}) {
    return {
        [`create${entityName}`]: create_1.default(entityData, options),
        [`update${entityName}`]: update_1.default(entityData, options),
        [`remove${entityName}`]: remove_1.default(entityData, options),
    };
}
exports.getMutationResolvers = getMutationResolvers;
function createResolversFromData(data, cb, options = {}) {
    return Object.keys(data)
        .reduce((resolvers, key) => Object.assign(
    //{},
    resolvers, cb(key, data, options)), {});
}
exports.createResolversFromData = createResolversFromData;
function resolver(data, options = {}) {
    var _a, _b, _c, _d;
    const resolvers = Object.assign({}, {
        Query: createResolversFromData(data, (key, data) => getQueryResolvers(nameConverter_1.getTypeFromKey(key), data[key]), options),
        Mutation: createResolversFromData(data, (key, data) => getMutationResolvers(nameConverter_1.getTypeFromKey(key), data[key]), options),
    }, createResolversFromData(data, (key, data) => {
        return {
            [nameConverter_1.getTypeFromKey(key)]: index_1.default(key, data),
        };
    }, options));
    /**
     * required because makeExecutableSchema strips resolvers from typeDefs
     */
    if (!resolvers[DateType_1.DateType.name] && hasType_1.default(DateType_1.DateType, data, options)) {
        resolvers[DateType_1.DateType.name] = DateType_1.DateType;
    }
    /**
     * required because makeExecutableSchema strips resolvers from typeDefs
     */
    if (!resolvers[graphql_type_json_1.default.name] && hasType_1.default(graphql_type_json_1.default, data, options)) {
        resolvers[graphql_type_json_1.default.name] = graphql_type_json_1.default;
    }
    if (!resolvers[graphql_type_regexp2_1.default.name] && hasType_1.default(graphql_type_regexp2_1.default, data, options)) {
        resolvers[graphql_type_regexp2_1.default.name] = graphql_type_regexp2_1.default;
    }
    return (_d = (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.after) === null || _a === void 0 ? void 0 : _a.resolver) === null || _b === void 0 ? void 0 : _b.call(_a, {
        resolvers,
    }, data)) === null || _c === void 0 ? void 0 : _c.resolvers) !== null && _d !== void 0 ? _d : resolvers;
}
exports.default = resolver;
//# sourceMappingURL=index.js.map