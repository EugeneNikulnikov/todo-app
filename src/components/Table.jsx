import React from "react";

import { Checkbox, Radio } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const tableStyle = {
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "1000px",
  margin: "20px 0",
};

export default function BasicTable({ todos, selectedTodo, setSelectedTodo }) {
  const selectTodo = (todo) =>
    setSelectedTodo((prevState) => (prevState?.id === todo.id ? null : todo));

  return (
    <TableContainer style={tableStyle} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Select</TableCell>
            <TableCell>To Do</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell>Done</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((item) => (
            <TableRow key={item.id} sx={{ " &:last-child td": { border: 0 } }}>
              <TableCell scope="row">
                <Radio
                  checked={item.id === selectedTodo?.id}
                  onClick={(e) => selectTodo(item, e.target)}
                />
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.deadline}</TableCell>
              <TableCell>
                <Checkbox id="set-item-done" color="primary" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
