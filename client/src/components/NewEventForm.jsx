import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState, useEffect } from 'react';
import { InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createEvent } from '../features/eventsGlobal/eventsGlobalSlice'
import { postUserEvent } from '../features/userEvents/userEventsSlice';


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
  const [userId, setUserId] = useState("");
  const [joinedUsers, setJoinedUsers] = useState([]);

  const { handleClose } = props;

  console.log(eventTitle);
  console.log(eventType);
  console.log(eventHeader);
  console.log(eventDescription);
  console.log(admissionType);
  console.log(admissionPrice);
  console.log(admissionProceeds);


  console.log(ageRanges);

  // console.log(startDate);
  // console.log(endDate);

 const startDateSend = startDate.toString();
 const endDateSend = endDate.toString();

 const eventTypeFnc = () => {
  if (eventHeader === "donation-drive") {
    setEventType("Donation Drive");
  } else if (eventHeader === "fundraiser") {
    setEventType("Fundraiser");
  } else if (eventHeader === "heritage-celebration") {
    setEventType("Heritage Celebration");
  } else if (eventHeader === "farmers-market") {
    setEventType("Farmer's Market");
  } else if (eventHeader === "food-pantry-hot-meals") {
    setEventType("Food Pantry/Hot Meals");
  } else if (eventHeader === "festival") {
    setEventType("Festival");
  } else if (eventHeader === "skill-share") {
    setEventType("Skill Share");
  } else if (eventHeader === "service-project") {
    setEventType("Service Project");
  } else if (eventHeader === "action-event") {
    setEventType("Action Event");
  } else if (eventHeader === "entertainment") {
    setEventType("Entertainment");
  } else {
    setEventType("");
  }

 }




  console.log(eventHeader);
  console.log(eventType);
 

 console.log(startDateSend, startDate);
 console.log(endDateSend, endDate);

//  console.log(moment(startDate).format("dddd, MMMM Do YYYY, h:mm:ss a"))



  const dispatch = useDispatch();




  const handleSubmit = (e) => {

    e.preventDefault();
    // setUserId
    setJoinedUsers([...joinedUsers, userId]);
    var admission = {type: admissionType, cost: admissionPrice, proceeds: admissionProceeds}
    eventTypeFnc();
    // need to turn the date object into string that can be parsed
    //need to set the header and type simultaneously
  
    // Construct the event object using the form values
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
      userId: userId,
      joinedUsers: joinedUsers,

    };

    console.log(newEvent);
    dispatch(createEvent(newEvent));
    dispatch(postUserEvent(newEvent));
  
    // Perform any necessary form validation here
  
    // Call the appropriate function to handle the form submission (e.g., pass the event object to an API function, dispatch an action, etc.)
  
    // Reset the form values
    setEventTitle("");
    setEventType("");
    setEventHeader("");
    setAgeRanges([]);
    setEventDescription("");
    setAdmissionType("");
    setAdmissionPrice(0);
    setAdmissionProceeds("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setUserId("");
    setJoinedUsers([]);
    handleClose();
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Event Title</Form.Label>
        <Form.Control required type="text" placeholder="Event Title" value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
      <Form.Label>Event Type</Form.Label>
      <Form.Select required aria-label="Default select example" onChange={(e) => {setEventHeader(e.target.value);}}>
      <option>Select an Event Type</option>
      <option id='donation-drive' value="donation-drive" >Donation Drive</option>
      <option id='fundraiser' value="fundraiser">Fundraiser</option>
      <option id='heritage-celebration' value="heritage-celebration">Heritage Celebration</option>
      <option id='farmers-market' value="farmers-market">Farmer's Market</option>
      <option id='food-pantry-hot-meals' value="food-pantry-hot-meals">Food Pantry/Hot Meals</option>
      <option id='festival' value="festival">Festival</option>
      <option id='skill-share' value="skill-share">Skill Share</option>
      <option id='service-project' value="service-project">Service Project</option>
      <option id='action-event' value="action-event">Action Event</option>
      <option id='entertainment' value="entertainment">Entertainment</option>
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Age Ranges</Form.Label>
      
      {["For Kids", "Family-friendly", "Ages 13-18", "Adults"].map((age, index) => (
        <div>
          <Form.Check
            label={age}
            name="group1"
            type="checkbox"
            value={age}
            key={index}
            {...age}
            onChange={(e) => {
              if (e.target.checked) {
                setAgeRanges([...ageRanges, age]);
              } else {
                setAgeRanges(ageRanges.filter((selectedAge) => selectedAge !== age));
              }
            }}
            onClick={(e) => console.log("You just clicked", e.target.value)}
          />
          </div>
          

      ))}
      <Form.Text>Please indicate the age ranges appropriate for this event. Select all that apply.</Form.Text>
      </Form.Group>
    <Form.Group>
      
    </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Event Description</Form.Label>
        <Form.Control type="text" as="textarea" rows={3} value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Event Price</Form.Label>
        <Form.Select required aria-label="Default select example" onChange={(e) => setAdmissionType(e.target.value)}>
      <option>Price Type</option>
      <option value="Free">Free</option>
      <option value="Suggested Donation">Suggested Donation</option>
      <option value="Entry Fee">Entry Fee</option>
    </Form.Select>
      </Form.Group>
             <Form.Group className="mb-3">
        <Form.Label>Cost</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" value={admissionPrice} onChange={(e) => setAdmissionPrice(e.target.value)} />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Proceeds</Form.Label>
        <Form.Control type="text" as="textarea" rows={3} value={admissionProceeds} onChange={(e) => setAdmissionProceeds(e.target.value)}/>
        <Form.Text>Optional: Let attendees know where the proceeds are going.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <br></br>

      <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker label="Select start date & time" disablePast={true} onChange={(date) => setStartDate(date)}/>
    </LocalizationProvider>
    </Form.Group>
    <Form.Group className="mb-3">
    <Form.Label>End Date</Form.Label>
    <br></br>

      <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker label="Select end date & time" disablePast={true} onChange={(date) => setEndDate(date)}/>
    </LocalizationProvider>
    </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
     

    </Form>
    
  );
}

export default NewEventForm;