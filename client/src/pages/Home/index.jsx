import EventCard from "../../components/EventCard";
import events from "../../data/events";

function Home(userDetails) {

  return (
    <>
    <h1 className="display">Your Upcoming Events:</h1>
    <div className="event-stream">
    <EventCard />
    <EventCard />
    <EventCard />
    <EventCard />
    </div>
    </>
  );
}

export default Home;
