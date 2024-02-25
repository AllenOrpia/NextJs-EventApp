
import { getAllEvents } from "../../data/dummy-data";
import EventList from '../../components/events/EventList.js'
const index = () => {
  const events = getAllEvents();
  return (
    <div>
        <EventList items={events}/>
    </div>
  )
}

export default index