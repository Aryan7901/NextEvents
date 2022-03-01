import { Typography } from "@mui/material";
import CustomBtn from "./LinkBtn";
import classes from "./ResultsTitle.module.css";

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
