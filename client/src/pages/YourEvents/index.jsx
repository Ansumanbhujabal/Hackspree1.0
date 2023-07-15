import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserEvents } from "../../features/userEvents/userEventsSlice";
import EventCard from "../../components/EventCard";

function YourEvents() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.userEvents.events);

  useEffect(() => {
    dispatch(getUserEvents());
  }, [dispatch]);

  return (
    <>
      <h1 className="display">Your Events:</h1>
      <div className="event-stream">
        {events && events.length > 0 ? (
          events.map((event) => <EventCard event={event} key={event.id} />)
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </>
  );
}

export default YourEvents;
