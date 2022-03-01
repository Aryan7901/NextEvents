import React, { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { fetchData, transformData } from "../../utils";
import { useRouter } from "next/router";
function AllEvents(props) {
  const { events } = props;
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const events = await fetchData(process.env.BACKEND);
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEvents;
