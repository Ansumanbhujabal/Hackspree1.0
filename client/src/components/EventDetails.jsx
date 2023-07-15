import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
import moment from "moment";

function EventDetails(props) {
  const { event } = props;
  const {
    title,
    start,
    end,
    eventType,
    ageRanges,
    description,
    admission,
    location,
  } = event;

  const startDate = moment(start).format("dddd, MMMM Do YYYY, h:mm a");
  const endDate = moment(end).format("dddd, MMMM Do YYYY, h:mm a");

  function getHeader(eventType) {
    let header = "";

    if (eventType === "Donation Drive") {
      header = "donation-drive";
    } else if (eventType === "Fundraiser") {
      header = "fundraiser";
    } else if (eventType === "Heritage Celebration") {
      header = "heritage-celebration";
    } else if (eventType === "Farmer's Market") {
      header = "farmers-market";
    } else if (eventType === "Food Pantry/Hot Meals") {
      header = "food-pantry-hot-meals";
    } else if (eventType === "Festival") {
      header = "festival";
    } else if (eventType === "Skill Share") {
      header = "skill-share";
    } else if (eventType === "Service Project") {
      header = "service-project";
    } else if (eventType === "Action Event") {
      header = "action-event";
    } else if (eventType === "Entertainment") {
      header = "entertainment";
    }

    return header;
  }

  const header = getHeader(eventType);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`./images/${header}.png`}
        id="event-card-header"
      />
      <Card.Header
        style={{
          background:
            eventType === "Donation Drive"
              ? "#85DAFF"
              : eventType === "Fundraiser"
              ? "#70E067"
              : eventType === "Heritage Celebration"
              ? "#F58D3C"
              : eventType === "Farmer's Market"
              ? "#45913E"
              : eventType === "Food Pantry/Hot Meals"
              ? "#DF3E08"
              : eventType === "Festival"
              ? "#FFDB21"
              : eventType === "Skill Share"
              ? "#B068A9"
              : eventType === "Service Project"
              ? "#3F4AAD"
              : eventType === "Action Event"
              ? "#FFAF07"
              : "#8700C3",
          color:
            eventType === "Heritage Celebration" ||
            eventType === "Farmer's Market" ||
            eventType === "Service Project" ||
            eventType === "Entertainment" ||
            eventType === "Food Pantry/Hot Meals"
              ? "white"
              : eventType === "Skill Share"
              ? "#4B1145"
              : eventType === "Donation Drive"
              ? "#046995"
              : eventType === "Festival"
              ? "#514124"
              : eventType === "Action Event"
              ? "#D56D00"
              : "black",
        }}
      >
        {eventType}
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="age-badges">
          {ageRanges.map((ageRange, index) => (
            <Badge
              bg={
                ageRange === "For Kids"
                  ? "info"
                  : ageRange === "Family-friendly"
                  ? "success"
                  : ageRange === "Ages 13-18"
                  ? "warning"
                  : "primary"
              }
              key={index}
              style={{ margin: "1em" }}
            >
              {ageRange}
            </Badge>
          ))}
        </div>
        <Card.Text>
          <span>
            <strong>Start Date:</strong>
          </span>{" "}
          {startDate}
          <br />
          <span>
            <strong>End Date:</strong>
          </span>{" "}
          {endDate}
          <br />
          <span>
            <strong>Price:</strong>
          </span>{" "}
          <Badge bg="secondary">{admission.type}</Badge>{" "}
          {admission.cost ? (
            <>
              ${admission.cost}
              <br />
            </>
          ) : (
            <br />
          )}
          <br />
          <span>
            <strong>Event Description: </strong>
          </span>{" "}
          {description}
          <br />
          {admission.proceeds ? (
            <p>
              <span>
                <strong>Proceeds:</strong>
              </span>{" "}
              {admission.proceeds}
            </p>
          ) : (
            ""
          )}
          <br />
          <span>
            <strong>Location:</strong>
          </span>{" "}
          {location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventDetails;
