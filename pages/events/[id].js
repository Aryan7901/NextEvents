import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import EventLogistics from "../../components/eventDetails/EventLogistics";
import EventSummary from "../../components/eventDetails/EventSummary";
import { fetchData } from "../../utils";
import EventContent from "../../components/eventDetails/EventContent";
import { Typography } from "@mui/material";
import ErrorAlert from "../../components/ui/ErrorAlert";
import CustomBtn from "../../components/ui/LinkBtn";
import Head from "next/head";
function EventDetails({ event }) {
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
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
export async function getStaticProps(context) {
  const { id } = context.params;
  const events = await fetchData(
    process.env.BACKEND + `?orderBy="$key"&equalTo="${id}"`
  );
  const event = events[0];
  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
}
export async function getStaticPaths() {
  const events = await fetchData(
    process.env.BACKEND + '?orderBy="isFeatured"&equalTo=true'
  );
  const paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetails;
