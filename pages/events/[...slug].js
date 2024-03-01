
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../helpers/api-util.js';
import EventList from '../../components//events/EventList.js'


const FilteredEventsPage = (props) => {
  const router = useRouter();

  if (props.hasError) {
    return <p className='text-center text-xl font-bold'>Invalid Filter. Please adjust your values</p>
  }


  const filteredEvents = props.events

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className='text-center font-bold text-xl'>No Events found</p>
  }


  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return {
      props: {
        hasError: true
      },
      // notFound: true
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  


  return {
    props: {
      events: filteredEvents
    }
  }
}

export default FilteredEventsPage