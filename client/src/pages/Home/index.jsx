import EventCard from "../../components/EventCard";
import { useSelector } from "react-redux";

function Home() {
const events = useSelector((store) => store.userdata.joinedEvents);

  return (
    <>
    <h1 className="display">Your Upcoming Events:</h1>
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

export default Home;
