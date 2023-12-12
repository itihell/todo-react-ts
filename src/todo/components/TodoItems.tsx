import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTodos";

interface props {
  todo: Todo;
}
export const TodoItems = ({ todo }: props) => {
  const { toggleTodo } = useTodos();

  const handlerDbClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handlerDbClick}
    >
      {todo.descripcion}
    </li>
  );
};
