import { ISourceDataRowBaseCore, ISourceDataRowBase } from '../../types';
import { GraphQLFieldConfigMap } from 'graphql/type/definition';
/**
 * 對數字類型的屬性增加 _lt _lte _gt _gte
 */
export declare function getRangeFiltersFromEntities<T extends ISourceDataRowBaseCore = ISourceDataRowBase>(keyNames: string[], entities: T[]): GraphQLFieldConfigMap<any, any, {
    [key: string]: any;
}>;
export default getRangeFiltersFromEntities;
