import { useTodos } from "../hooks/useTodos";

export const Titles = () => {
  const { pendingTodos } = useTodos();
  return <h1>Todos: {pendingTodos}</h1>;
};
