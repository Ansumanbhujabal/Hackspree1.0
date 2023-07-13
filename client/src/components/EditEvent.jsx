import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormCheckInput from 'react-bootstrap/FormCheckInput'
import FormCheckLabel from 'react-bootstrap/FormCheckLabel'
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function EditEvent() {
  
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Event Title</Form.Label>
        <Form.Control type="text" placeholder="Event Title" />
      </Form.Group>

      <Form.Group className="mb-3">
      <Form.Label>Event Type</Form.Label>
      <Form.Select aria-label="Default select example">
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
        
          <Form.Check
            label={age}
            name="group1"
            type="checkbox"
            value={age}
            key={index}
            {...age}
          />
      ))}
      <Form.Text>Please indicate the age ranges appropriate for this event. Select all that apply.</Form.Text>
      </Form.Group>
    <Form.Group>
      
    </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Event Description</Form.Label>
        <Form.Control type="text" as="textarea" rows={3} placeholder="Event Description" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Start Date</Form.Label>
        <br></br>

      <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker />
    </LocalizationProvider>
    </Form.Group>
    <Form.Group className="mb-3">
    <Form.Label>End Date</Form.Label>
    <br></br>

      <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker />
    </LocalizationProvider>
    </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>
     

    </Form>
    
  );
}

export default EditEvent;