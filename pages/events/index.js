import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { eventsSearch } from "../api/_utils";
import { useRouter } from "next/router";
import Head from "next/head";
function AllEvents(props) {
  const { events } = props;
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="All upcoming events!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const events = await eventsSearch({});
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEvents;
