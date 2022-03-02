import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
function LinkBtn(props) {
  if (!!props.link) {
    return (
      <Link href={props.link} passHref>
        <Button
          className={props.className}
          variant="contained"
          sx={{ color: "white" }}
        >
          {props.text}
        </Button>
      </Link>
    );
  } else {
    return (
      <Button
        className={props.className}
        variant="contained"
        sx={{ color: "white" }}
      >
        {props.text}
      </Button>
    );
  }
}

export default LinkBtn;
