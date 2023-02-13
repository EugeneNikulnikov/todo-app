import React from "react";
import { CustomButton } from "./CustomButton";

const style = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  flex: "1 0 auto",
};

export const ButtonsWrapper = ({ createTodo, editTodo, removeTodo }) => {
  return (
    <div style={style}>
      <CustomButton text="Add To Do Item" clickHandler={createTodo} />
      <CustomButton text="Edit Selected Item" clickHandler={editTodo} />
      <CustomButton
        color="error"
        text="Delete Selected Item"
        clickHandler={removeTodo}
      />
    </div>
  );
};
