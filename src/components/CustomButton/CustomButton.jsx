import React from "react";
import { Button } from "@mui/material";

import { customButton } from "./CustomButton.styles";

export const CustomButton = ({ text, clickHandler, color, ...restProps }) => (
  <Button sx={customButton} variant="contained" color={color} onClick={clickHandler} {...restProps}>
    {text}
  </Button>
);
