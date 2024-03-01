
import { getAllEvents } from "../../helpers/api-util.js";
import EventList from '../../components/events/EventList.js'
import EventsSearch from "../../components/events/EventsSearch.js";
import { useRouter } from "next/router.js";
import Head from "next/head";
import { Fragment } from "react";

const index = (props) => {
  const { events } = props
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content='Explore and find many events' />
      </Head>

      <div className="container mx-auto">
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
      </div>

    </Fragment>
  )
}


export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events
    },
    revalidate: 60,
  }
}

export default index