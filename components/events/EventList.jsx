import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";
function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((event) => (
        <EventItem key={event._id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
