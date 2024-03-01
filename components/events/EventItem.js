
import Button from "../ui/Button";
import Image from "next/image";


const EventItem = (props) => {

    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formatAddress = location.replace(',', "\n");

    const exploreLink = `/events/${id}`;


    return (
        <li className="my-5 p-4 lg:my-10 flex flex-col lg:flex-row w-full lg:w-3/4 gap-3 mx-auto lg:shadow-xl">
            <Image src={'/' + image} alt={title} className=" self-center lg:self-start" width={384} height={384} />
            {/* <img src={'/' + image} alt={title} className=" self-center lg:self-start w-96 h-96" /> */}
            <div className="flex flex-col justify-center items-center gap-2 flex-1">
                <h2>{title}</h2>
                <div>
                    <next-route-announcer>…</next-route-announcer>                    <time>{humanReadableDate}</time>
                </div>
                <div>
                    <address>{formatAddress}</address>
                </div>
                <div >
                    <Button link={exploreLink} children={title}> Explore Event </Button>
                </div>

            </div>
        </li>
    )
}

export default EventItem