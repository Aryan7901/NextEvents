import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import EventLogistics from "../../components/eventDetails/EventLogistics";
import EventSummary from "../../components/eventDetails/EventSummary";
import { MongoClient, ObjectId } from "mongodb";
import EventContent from "../../components/eventDetails/EventContent";
import { Typography } from "@mui/material";
import ErrorAlert from "../../components/ui/ErrorAlert";
import CustomBtn from "../../components/ui/LinkBtn";
import Head from "next/head";
import Comments from "../../components/input/Comments";
import { eventsSearch } from "../api/_utils";
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
      <Comments eventId={event._id} />
    </Fragment>
  );
}
export default EventDetails;
export async function getStaticProps(context) {
  const { id } = context.params;
  let client;
  let event;
  try {
    client = await MongoClient.connect(process.env.DB);
    const db = client.db();
    const _id = ObjectId.createFromHexString(id);
    event = await db.collection("events").findOne({ _id });
    event._id = event._id.toHexString();
    // console.log(event);

    client.close();
  } catch (err) {
    console.log(err.message);
    client.close();
  }
  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await eventsSearch({ isFeatured: true });
  const paths = events.map((event) => ({
    params: { id: event._id.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
