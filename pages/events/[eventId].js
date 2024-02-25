

import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";
const EventDetailPage = () => {

    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>No event Found!</p>
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

export default EventDetailPage