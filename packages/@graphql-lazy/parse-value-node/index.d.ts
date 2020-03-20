/**
 * Created by user on 2020/3/20.
 */
import { ValueNode, VariableNode, ASTNode, ObjectValueNode } from 'graphql/language/ast';
import Maybe from 'graphql/tsutils/Maybe';
export declare type IVariables = Maybe<{
    [key: string]: any;
}>;
export declare function valueOfObjectValueNode<T extends {
    [key: string]: any;
}>(ast: ObjectValueNode, variables?: IVariables): T;
export declare function valueOfVariableNode<T extends any>(ast: VariableNode, variables?: IVariables): Maybe<T>;
export declare function valueOfAstNode<T extends any>(ast: ValueNode | ASTNode, variables?: IVariables): Maybe<T>;
export declare function valueOfValueNode<T extends any>(ast: ValueNode, variables?: IVariables): Maybe<T>;
export default valueOfValueNode;
