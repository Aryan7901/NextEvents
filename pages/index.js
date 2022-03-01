import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fetchData } from "../utils";
import EventList from "../components/events/EventList";
export default function Home(props) {
  const { featuredEvents } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="Featured events!" />
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
