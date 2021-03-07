/* eslint-disable @typescript-eslint/no-unused-vars */
import * as todoFactory from './master/todo';

export namespace todo {
  export import Attr = todoFactory.ITodoAttr;
  export import Add = todoFactory.AddTodoParams;
  export import Edit = todoFactory.EditTodoParams;
  export import Del = todoFactory.DelTodoParams;
}