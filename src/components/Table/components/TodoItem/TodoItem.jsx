import React from "react";

import TableCell from "@mui/material/TableCell";
import { Checkbox, Radio } from "@mui/material";
import TableRow from "@mui/material/TableRow";

import { tRow } from "./TodoItem.styles";

export const TodoItem = ({ todo, selectedTodo, selectTodo }) => (
  <TableRow sx={tRow}>
    <TableCell scope="row">
      <Radio checked={todo.id === selectedTodo?.id} onClick={(e) => selectTodo(todo, e.target)} />
    </TableCell>

    <TableCell>{todo.title}</TableCell>
    <TableCell>{todo.description}</TableCell>
    <TableCell>{todo.deadline}</TableCell>

    <TableCell>
      <Checkbox id="set-item-done" color="primary" />
    </TableCell>
  </TableRow>
);
