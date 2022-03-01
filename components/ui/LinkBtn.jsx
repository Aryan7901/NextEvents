import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
function LinkBtn(props) {
  const router = useRouter();
  if (!!props.link) {
    return (
      <Button
        className={props.className}
        variant="contained"
        sx={{ color: "white" }}
        onClick={() => router.push(props.link)}
      >
        {props.text}
      </Button>
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
