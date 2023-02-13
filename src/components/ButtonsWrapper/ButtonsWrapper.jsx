import React from "react";

import { CustomButton } from "../CustomButton/CustomButton";
import { buttonWrapper } from "./ButtonsWrapper.styles";

export const ButtonsWrapper = ({ createTodo, editTodo, removeTodo }) => (
  <div style={buttonWrapper}>
    <CustomButton text="Add To Do Item" clickHandler={createTodo} />

    <CustomButton text="Edit Selected Item" clickHandler={editTodo} />

    <CustomButton color="error" text="Delete Selected Item" clickHandler={removeTodo} />
  </div>
);
