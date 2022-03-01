import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchData, getFeaturedEvents, transformData } from "../utils";
import EventList from "../components/events/EventList";
export default function Home(props) {
  const { featuredEvents } = props;
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

export async function getStaticProps() {
  const events = await fetchData(
    process.env.BACKEND + '?orderBy="isFeatured"&equalTo=true'
  );
  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 1800,
  };
}
