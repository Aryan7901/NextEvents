import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummydata";
import { useRouter } from "next/router";
import ErrorAlert from "../../components/ui/error-alert";
import ResultsTitle from "../../components/ui/results-title";
import CustomBtn from "../../components/ui/LinkBtn";

function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return (
      <ErrorAlert>
        <Typography className="center">Loading...</Typography>
        <CustomBtn link="/events" text="Show All Events" />
      </ErrorAlert>
    );
  }
  const year = +filterData[0];
  const month = +filterData[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <ErrorAlert>
        <Typography className="center">
          Invalid Filter,please adjust your values!
        </Typography>
        <CustomBtn link="/events" text="Show All Events" />
      </ErrorAlert>
    );
  }
  const filteredEvents = getFilteredEvents({ year, month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        {" "}
        <Typography className="center">
          No events found for the chosen filter
        </Typography>
        <CustomBtn link="/events" text="Show All Events" />
      </ErrorAlert>
    );
  }
  const date = new Date(year, month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEvents;
