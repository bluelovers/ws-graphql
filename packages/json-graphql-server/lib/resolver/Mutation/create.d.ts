import { ISourceDataRowBase, ISourceDataRowBaseCore2, IOptions } from '../../types';
export default function <T extends ISourceDataRowBase = ISourceDataRowBase>(entityData?: T[], options?: IOptions): <R extends ISourceDataRowBaseCore2 | Partial<T>>(_: any, entity: R, context?: any, info?: import("graphql").GraphQLResolveInfo & {
    mergeInfo: import("graphql-tools").MergeInfo;
}) => T & R;
