import React, { useCallback } from "react";

import { TodoTable } from "../components/Table/TodoTable";

export const TableContainer = ({ todos, selectedTodo, setSelectedTodo }) => {
  const selectTodo = useCallback(
    (todo) => setSelectedTodo((prevState) => (prevState?.id === todo.id ? null : todo)),
    []
  );

  return <TodoTable todos={todos} selectedTodo={selectedTodo} selectTodo={selectTodo} />;
};
