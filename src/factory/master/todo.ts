import { commonField } from './common';
export enum Status {
  new = 0,
  pending = 1,
  completed = 2,
}

export interface ITodoAttr extends commonField {
  title: string;
  content: string;
  status?: Status;
  startDate: Date | string;
  endDate: Date | string;
}

export type AddTodoParams = Pick<ITodoAttr,
  'title' |
  'content' |
  'status' |
  'startDate' |
  'endDate' |
  'createdAt'
>;
export type EditTodoParams = Pick<ITodoAttr, 'id' | 'title' | 'status' | 'updatedAt'>;
export type DelTodoParams = Pick<ITodoAttr, 'id' | 'delFlg' | 'deletedAt'>;
