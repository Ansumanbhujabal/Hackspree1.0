import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EventDetails from './EventDetails';

function EventModal(props) {

  const {event} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" size="sm"onClick={handleShow}>
          More Info
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventDetails event={event}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventModal;