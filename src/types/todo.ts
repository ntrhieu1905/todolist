import { commonField } from './common';

export enum ActionTypes {
  ADD = 'ADD',
  ADD_ERROR = 'ADD_ERROR',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  FILTER = 'FILTER'
}

export enum Status {
  new = 0,
  pending = 1,
  completed = 2,
}

export interface ITodoMain extends commonField {
  title: string;
  content: string;
  status?: Status;
  startDate: Date | string;
  endDate: Date | string;
}

export type AddTodoType = Pick<ITodoMain,
  'id' |
  'title' |
  'content' |
  'status' |
  'startDate' |
  'endDate' |
  'createdAt'
>;
export type EditTodoType = Pick<ITodoMain, 'id' | 'title' | 'status' | 'updatedAt'>;
export type DeleteTodoType = Pick<ITodoMain, 'id' | 'delFlg' | 'deletedAt'>;

export interface IAddTodoAction {
  type: ActionTypes.ADD;
  payload: AddTodoType
}
export type AddTodoActionType = IAddTodoAction;