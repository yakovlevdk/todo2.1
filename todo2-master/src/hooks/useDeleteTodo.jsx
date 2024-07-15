
export const useDeleteTodo = ({ setRefresh, refresh }) => {
  const deleteTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((it) => it.json())
      .then((data) => {
        setRefresh(!refresh);
        console.log(data);
      });
  };

  return { deleteTodo };
};
