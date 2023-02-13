import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const THead = () => (
  <TableHead>
    <TableRow>
      <TableCell>Select</TableCell>
      <TableCell>To Do</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Deadline</TableCell>
      <TableCell>Done</TableCell>
    </TableRow>
  </TableHead>
);
