import { useTodos } from "../hooks/useTodos";
import { TodoItems } from "./TodoItems";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItems key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
