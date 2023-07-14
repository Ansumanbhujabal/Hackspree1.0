import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/FormCheckLabel'
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';


function NewEventForm() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventHeader, setEventheader] = useState("");
  const [ageRanges, setAgeRanges] = useState([]);
  const [eventDiscription, setEventDescription] = useState("");
  const [admission, setAdmission] = useState({});
  const [admissionType, setAdmissionType] = useState("");
  const [admissionPrice, setAdmissionPrice] = useState("");
  const [admissionProceeds, setAdmissionProceeds] = useState("");
  const [startDate, setStartDate] = useState({});
  const [endDate, setEndDate] = useState({});
  const [location, setLocation] = useState({});

  console.log(eventTitle);


  
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Event Title</Form.Label>
        <Form.Control required type="text" placeholder="Event Title" value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
      <Form.Label>Event Type</Form.Label>
      <Form.Select required aria-label="Default select example">
      <option>Select an Event Type</option>
      <option value="1">Donation Drive</option>
      <option value="2">Fundraiser</option>
      <option value="3">Heritage Celebration</option>
      <option value="4">Farmer's Market</option>
      <option value="5">Food Pantry/Hot Meals</option>
      <option value="6">Festival</option>
      <option value="7">Skill Share</option>
      <option value="8">Service Project</option>
      <option value="9">Action Event</option>
      <option value="10">Entertainment</option>
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
        <Form.Control type="text" as="textarea" rows={3} value={eventDiscription} onChange={(e) => setEventDescription(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Event Price</Form.Label>
        <Form.Select required aria-label="Default select example">
      <option>Price Type</option>
      <option value="1">Free</option>
      <option value="2">Suggested Donation</option>
      <option value="3">Entry Fee</option>
    </Form.Select>
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Cost</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control required aria-label="Amount (to the nearest dollar)" value={admissionPrice} onChange={(e) => setAdmissionPrice(e.target.value)} />
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
      <DateTimePicker label="Select start date & time" />
    </LocalizationProvider>
    </Form.Group>
    <Form.Group className="mb-3">
    <Form.Label>End Date</Form.Label>
    <br></br>

      <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker label="Select end date & time" />
    </LocalizationProvider>
    </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
     

    </Form>
    
  );
}

export default NewEventForm;