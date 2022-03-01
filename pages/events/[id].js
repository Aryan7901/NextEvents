import { useRouter } from "next/router";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import EventLogistics from "../../components/eventDetails/event-logistics";
import EventSummary from "../../components/eventDetails/event-summary";
import { getEventById } from "../../dummydata";
import EventContent from "../../components/eventDetails/event-content";
import { Typography } from "@mui/material";
import ErrorAlert from "../../components/ui/error-alert";
import CustomBtn from "../../components/ui/customBtn";
function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const event = getEventById(id);
  if (!event) {
    return (
      <ErrorAlert>
        <Typography variant="body1">No event found!</Typography>
        <CustomBtn link="/events" text="Show All Events" />
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <Typography variant="h6" component="p">
          {event.description}
        </Typography>
      </EventContent>
    </Fragment>
  );
}

export default EventDetails;
