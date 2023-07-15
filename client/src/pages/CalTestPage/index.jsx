import EventCard from "../../components/EventCard";
import { useSelector } from "react-redux";
// import events from '../../data/events';

function CalTestPage() {
const events = useSelector((store) => store.events.events);
console.log(events);

  return (
    <>
    <h1 className="display">Calendar Test:</h1>
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

export default CalTestPage;
