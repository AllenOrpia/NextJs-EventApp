
import { getAllEvents } from "../../helpers/api-util.js";
import EventList from '../../components/events/EventList.js'
import EventsSearch from "../../components/events/EventsSearch.js";
import { useRouter } from "next/router.js";

const index = (props) => {
  const { events } = props
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <div className="container mx-auto">
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
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