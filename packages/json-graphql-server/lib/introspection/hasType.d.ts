import { ISourceDataRoot, IOptions } from '../types';
import { GraphQLScalarType } from 'graphql';
export default function hasType(scalarType: GraphQLScalarType, data: ISourceDataRoot, options?: IOptions): boolean;
