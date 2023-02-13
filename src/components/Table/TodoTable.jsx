import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { todoTable } from "./TodoTable.styles";
import { THead } from "./components/THead";
import { TodoItem } from "./components/TodoItem/TodoItem";

export const TodoTable = ({ todos, selectedTodo, selectTodo }) => (
  <TableContainer sx={todoTable} component={Paper}>
    <Table aria-label="simple table">
      <THead />

      <TableBody>
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} selectedTodo={selectedTodo} selectTodo={selectTodo} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
