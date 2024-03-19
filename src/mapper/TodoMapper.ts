import { Todo } from '../entity/Todo';

export class TodoMapper {
  static toTodo(text: string): Todo {
    const todo = new Todo();
    todo.id = new Date().getMilliseconds().toString();
    todo.text = text;
    return todo;
  }
}
