import Head from "next/head";
import styles from "../styles/Home.module.css";

import EventList from "../components/events/EventList";
import NewsLetterRegistration from "../components/input/NewsletterRegistration";
import { eventsSearch } from "./api/_utils";
export default function Home(props) {
  const { featuredEvents } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="Featured events!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsLetterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await eventsSearch({ isFeatured: true });
  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 1800,
  };
}
