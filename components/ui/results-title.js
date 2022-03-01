import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Link from "next/link";
import CustomBtn from "./LinkBtn";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <Typography variant="h3">Events in {humanReadableDate}</Typography>
      <CustomBtn link="/events" text="Show All Events" />
    </section>
  );
}

export default ResultsTitle;
