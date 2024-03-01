

import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util.js";
const EventDetailPage = (props) => {

    const event = props.event

    if (!event) {
        return (
            <div className="text-center">
                <p>No event Found!</p>

            </div>
        )
    }
    return (
        <div className="container mx-auto flex flex-col gap-5 justify-center min-h-screen">
            <h1 className="text-5xl font-bold text-center ">{event.title}</h1>
            <div className=" flex flex-col lg:flex-row w-full  lg:w-3/4 gap-3 lg:shadow-2xl mx-auto ">
                <img src={`/${event.image}`} className="w-96 h-96 self-center" />
                <div className="p-3 flex flex-col justify-center ">
                    <p className="mt-3 text-xl font-semibold">Location: {event.location}</p>
                    <p className="mt-3 text-xl font-semibold">Date: {event.date}</p>
                </div>

            </div>
            <p className="text-xl font-semibold text-center ">{event.description}</p>
        </div>
    )
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId);
    return {
        props: {
            event: event
        },
        revalidate: 30,
    }


};

export async function getStaticPaths() {
    const events = await getFeaturedEvents();

    const paths = events.map(event => ({ params: { eventId: event.id } }))

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export default EventDetailPage