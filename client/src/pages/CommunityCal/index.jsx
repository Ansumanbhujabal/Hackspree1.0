
import Basic from "../../components/Calendar";
import EventCard from "../../components/EventCard";
import { useSelector } from "react-redux";

function CommunityCal () {
    const events = useSelector((store) => store.events.events);
    return (
        <>
        <h1>Chicago CommunityConnect</h1>
        <Basic />
        <div className="container-fluid">
    {/* <div className="event-stream">
    {events.map((event, index) => {
          return (
                <EventCard
                  event={event}
                  {...event}
                  key={index}
                />
              
          );
        })}
    </div> */}
        </div>
        </>
    )
}

export default CommunityCal;