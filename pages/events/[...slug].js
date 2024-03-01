
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../helpers/api-util.js';
import EventList from '../../components//events/EventList.js'
import Head from 'next/head.js';
import { Fragment } from 'react';


const FilteredEventsPage = (props) => {
  const router = useRouter();

  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content='All events for filtered data' />
    </Head>
  )

  if (props.hasError) {
    return (
      <Fragment>
        { pageHeadData }
        < p className = 'text-center text-xl font-bold' > Invalid Filter.Please adjust your values</p >
      </Fragment>
    )
  }


const filteredEvents = props.events

if (!filteredEvents || filteredEvents.length === 0) {
  return (
    <Fragment>
      {pageHeadData}
      <p className='text-center font-bold text-xl'>No Events found</p>
    </Fragment>
  )
}





return (
  <div>
    {pageHeadData}
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