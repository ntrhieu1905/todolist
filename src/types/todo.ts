export enum ActionTypes {
  ASSIGN = 'ADD',
  COMPLETE = 'COMPLETE',
  DELETE = 'DELETE',
  FILTER = 'FILTER'
}

export enum Status {
  assinged = 0,
  completed = 1,
  deleted = 2,
}

export interface ITodoMain {
  id: string;
  title: string;
  content: string;
  status?: Status;
  startDate: Date | string;
  endDate: Date | string;
}

export type AssingedTodoType = ITodoMain;
export type CompletedTodoType = Pick<ITodoMain, 'id' | 'status'>;
export type DeletedTodoType = Pick<ITodoMain, 'id' | 'status'>;

export interface ITodoAction {
  type: string;
  payload: ITodoMain;
}
export type TodoActionType = ITodoAction;