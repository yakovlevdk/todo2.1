import { useAddTodo } from "../hooks/useAddTodo";

export const AddTodoForm = ({ addTodo, setAddTodo, refresh, setRefresh }) => {
  const { addTodo: addTodoHandler } = useAddTodo({ refresh, setRefresh });

  return (
    <form>
      <input
        type="text"
        value={addTodo}
        onChange={(event) => setAddTodo(event.target.value)}
        placeholder="Добавить"
      />
      <button onClick={(event) => addTodoHandler(event, { addTodo })}>
        Добавить
      </button>
    </form>
  );
};
