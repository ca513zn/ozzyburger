import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const ButtonStyles = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 24,
    padding: "4px 24px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    ":hover": {
      outline: "none",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const StyledButton = () => {
  return (
    <ButtonStyles color="primary" variant="outlined">
      Add
    </ButtonStyles>
  );
};

export default StyledButton;
