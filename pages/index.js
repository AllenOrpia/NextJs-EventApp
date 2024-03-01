

import { getFeaturedEvents } from '../helpers/api-util.js';
import EventList from '../components/events/EventList.js';
const index = (props) => {

  return (
    <div className='container mx-auto'>
      <h1 className="text-5xl font-bold text-center mt-3">The Homepage</h1>
      <EventList items={props.featuredEvents} />

    </div>
  )
}


export async function getStaticProps() {

  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents
      },
      revalidate: 1800,
  }
}

export default index