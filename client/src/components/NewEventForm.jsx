import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import moment from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createEvent } from "../features/eventsGlobal/eventsGlobalSlice";
import { postUserEvent } from "../features/userEvents/userEventsSlice";

function NewEventForm(props) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventHeader, setEventHeader] = useState("");
  const [ageRanges, setAgeRanges] = useState([]);
  const [eventDescription, setEventDescription] = useState("");
  const [admissionType, setAdmissionType] = useState("");
  const [admissionPrice, setAdmissionPrice] = useState("");
  const [admissionProceeds, setAdmissionProceeds] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [joinedUsers, setJoinedUsers] = useState([]);

  console.log(eventTitle);
  console.log(eventType);
  console.log(eventHeader);
  console.log(eventDescription);
  console.log(admissionType);
  console.log(ageRanges);

  const startDateSend = startDate.toString();
  const endDateSend = endDate.toString();

  console.log(startDateSend, startDate);
  console.log(endDateSend, endDate);

  const { handleClose } = props;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/api/user/email`)
  //     .then((response) => {
  //       setUserEmail(response.data.email);
  //       console.log(response.data.email);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user email:", error);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    var admission = {
      type: admissionType,
      cost: admissionPrice,
      proceeds: admissionProceeds,
    };

    // setJoinedUsers([...joinedUsers, userEmail]);

    const newEvent = {
      title: eventTitle,
      eventType: eventType,
      header: eventHeader,
      ageRanges: ageRanges,
      description: eventDescription,
      admission: admission,
      start: startDateSend,
      end: endDateSend,
      location: location,
      // userEmail: userEmail,
      // joinedUsers: joinedUsers,

    };

    console.log(newEvent);
    dispatch(createEvent(newEvent));
    dispatch(postUserEvent(newEvent));

    setEventTitle("");
    setEventType("");
    setEventHeader("");
    setAgeRanges([]);
    setEventDescription("");
    setAdmissionType("");
    setAdmissionPrice("");
    setAdmissionProceeds("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Event Title</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Event Type</Form.Label>
        <Form.Select
          required
          aria-label="Default select example"
          onChange={(e) => setEventType(e.target.value)}
        >
          <option>Select an Event Type</option>
          <option value="Donation Drive">Donation Drive</option>
          <option value="Fundraiser">Fundraiser</option>
          <option value="Heritage Celebration">Heritage Celebration</option>
          <option value="Farmers Market">Farmer's Market</option>
          <option value="Food PantryHot Meals">Food Pantry/Hot Meals</option>
          <option value="Festival">Festival</option>
          <option value="Skill Share">Skill Share</option>
          <option value="Service Project">Service Project</option>
          <option value="Action Event">Action Event</option>
          <option value="Entertainment">Entertainment</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age Ranges</Form.Label>
        {["For Kids", "Family-friendly", "Ages 13-18", "Adults"].map(
          (age, index) => (
            <div key={index}>
              <Form.Check
                label={age}
                name="group1"
                type="checkbox"
                value={age}
                checked={ageRanges.includes(age)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setAgeRanges([...ageRanges, age]);
                  } else {
                    setAgeRanges(
                      ageRanges.filter((selectedAge) => selectedAge !== age)
                    );
                  }
                }}
              />
            </div>
          )
        )}
        <Form.Text>
          Please indicate the age ranges appropriate for this event. Select all
          that apply.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Event Description</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows={3}
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Event Price</Form.Label>
        <Form.Select
          required
          aria-label="Default select example"
          onChange={(e) => setAdmissionType(e.target.value)}
        >
          <option>Price Type</option>
          <option value="Free">Free</option>
          <option value="Suggested Donation">Suggested Donation</option>
          <option value="Entry Fee">Entry Fee</option>
        </Form.Select>
      </Form.Group>

      {admissionType === "Suggested Donation" ||
      admissionType === "Entry Fee" ? (
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Cost</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                aria-label="Amount (to the nearest dollar)"
                value={admissionPrice}
                onChange={(e) => setAdmissionPrice(e.target.value)}
              />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Proceeds</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              value={admissionProceeds}
              onChange={(e) => setAdmissionProceeds(e.target.value)}
            />
            <Form.Text>
              Optional: Let attendees know where the proceeds are going.
            </Form.Text>
          </Form.Group>
        </div>
      ) : null}

      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <br />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            label="Select start date & time"
            disablePast={true}
            onChange={(date) => setStartDate(date)}
          />
        </LocalizationProvider>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>End Date</Form.Label>
        <br />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            label="Select end date & time"
            disablePast={true}
            onChange={(date) => setEndDate(date)}
          />
        </LocalizationProvider>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewEventForm;
