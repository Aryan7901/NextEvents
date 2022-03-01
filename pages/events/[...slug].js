import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { fetchData } from "../../utils";
import ErrorAlert from "../../components/ui/error-alert";
import ResultsTitle from "../../components/ui/results-title";
import CustomBtn from "../../components/ui/LinkBtn";
import Head from "next/head";
function FilteredEvents(props) {
  const { hasError, filteredEvents, year, month } = props;
  // const router = useRouter();
  // const filterData = router.query.slug;
  // if (!filterData) {
  //   return (
  //     <ErrorAlert>
  //       <Typography className="center">Loading...</Typography>
  //       <CustomBtn link="/events" text="Show All Events" />
  //     </ErrorAlert>
  //   );
  // }

  if (hasError) {
    return (
      <ErrorAlert>
        <Typography className="center">
          Invalid Filter,please adjust your values!
        </Typography>
        <CustomBtn link="/events" text="Show All Events" />
      </ErrorAlert>
    );
  }
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
      <Head>
        <title>{`Events on ${month}/${year}`}</title>
        <meta
          name="description"
          content={`Filtered Events by ${month}/${year}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
export async function getServerSideProps(context) {
  const filterData = context.params.slug;
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
    return {
      props: {
        hasError: true,
      },
    };
  }
  const events = await fetchData(process.env.BACKEND);
  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return {
    props: {
      filteredEvents,
      year,
      month,
    },
  };
}
export default FilteredEvents;
