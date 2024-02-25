

import { getFeaturedEvents } from '../data/dummy-data.js';
import EventList from '../components/events/EventList.js';
const index = () => {

  const featuredEvents = getFeaturedEvents();

  return (
    <div className='container mx-auto'>
      <h1 className="text-5xl font-bold text-center mt-3">The Homepage</h1>
      <EventList items={featuredEvents}/>

    </div>
  )
}

export default index