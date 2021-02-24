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
}

export type AddTodoParams = Pick<ITodoAttr, 'title' | 'content' | 'status' | 'createdAt'>;
export type EditTodoParams = Pick<ITodoAttr, 'id' | 'title' | 'status' | 'updatedAt'>;
export type DelTodoParams = Pick<ITodoAttr, 'id' | 'delFlg' | 'deletedAt'>;
