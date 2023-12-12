import { Titles } from "./components/Title";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./contexts/TotoProvider";
import { useTodos } from "./hooks/useTodos";

export const Todo = () => {
  return (
    <TodoProvider>
      <Titles />
      <TodoList />
    </TodoProvider>
  );
};
