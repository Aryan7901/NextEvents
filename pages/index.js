import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummydata";
import EventList from "../components/events/EventList";
export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
      <Head>
        <title>Events</title>
        <meta name="description" content="All upcoming events!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}
