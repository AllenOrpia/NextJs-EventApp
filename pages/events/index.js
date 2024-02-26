
import { getAllEvents } from "../../data/dummy-data";
import EventList from '../../components/events/EventList.js'
import EventsSearch from "../../components/events/EventsSearch.js";
import { useRouter } from "next/router.js";
const index = () => {
  const events = getAllEvents();
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

export default index