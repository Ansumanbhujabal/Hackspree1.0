import EventCard from "../../components/EventCard";
import { useSelector } from "react-redux";

function YourEvents() {
const events = useSelector((store) => store.userEvents.events);

  return (
    <>
    <h1 className="display">Your Events:</h1>
    <div className="event-stream">
    {events.map((event, index) => {
          return (
                <EventCard
                  event={event}
                  {...event}
                  key={index}
                />
              
          );
        })}
    </div>
    </>
  );
}

export default YourEvents;
