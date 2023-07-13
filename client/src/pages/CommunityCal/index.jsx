import EventCard from "../../components/EventCard";
import { useSelector } from "react-redux";
import CalendarTest from "../../components/CalendarTest";

function CommunityCal () {
    const events = useSelector(
        (store) => store.events.events
      );
    return (
        <>
        <h1 className="display">Calendar Events:</h1>
        <div className="event-stream">
        {events.map((event, index) => {
              return (
                    <CalendarTest
                      event={event}
                      {...event}
                      key={index}
                    />
                  
              );
            })}
        </div>
        </>
    )
}

export default CommunityCal;