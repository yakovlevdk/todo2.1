import { useState } from "react";

export const useChangeTodo = ({ setRefresh, refresh }) => {
  const [changeValue, setChangeValue] = useState({});

  const handleChangeInput = (id, value) => {
    setChangeValue((preValue) => ({
      ...preValue,
      [id]: value,
    }));
  };

  const changeTodo = (id, value) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        title: value,
      }),
    });
    setRefresh(!refresh);
  };

  return { changeValue, handleChangeInput, changeTodo };
};
