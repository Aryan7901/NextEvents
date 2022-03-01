import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar
        variant="dense"
        sx={{ backgroundColor: "black", height: "4rem", display: "flex" }}
      >
        <Typography
          variant="h5"
          color="secondary"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          <Link href={"/"}>NextEvents</Link>
        </Typography>
        <Typography variant="h6" color="secondary" component="div">
          <Link href={"/events"}>All Events</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
