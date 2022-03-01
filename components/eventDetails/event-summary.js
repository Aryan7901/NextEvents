import { Typography } from "@mui/material";
import classes from "./event-summary.module.css";

function EventSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <Typography variant="h2">{title}</Typography>
    </section>
  );
}

export default EventSummary;
