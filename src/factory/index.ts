import { types } from 'util';
import * as todoFactory from './todo';

namespace todo {
  export import Attr = todoFactory.ITodoAttr;
  export import Add = todoFactory.AddTodoParams;
  export import Edit = todoFactory.EditTodoParams;
  export import Del = todoFactory.DelTodoParams;
}

export import todo = todo;
