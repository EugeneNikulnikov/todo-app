import { Button } from "@mui/material";

const style = {
  margin: "15px 20px",
};
export const CustomButton = ({ text, clickHandler, color, ...restProps }) => {
  return (
    <Button
      className="button"
      style={style}
      variant="contained"
      color={color}
      onClick={clickHandler}
      {...restProps}
    >
      {text}
    </Button>
  );
};
