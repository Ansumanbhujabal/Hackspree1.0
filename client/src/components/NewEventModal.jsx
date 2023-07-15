import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewEventForm from './NewEventForm';

function NewEventModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id='new-event-click' onClick={handleShow}>
        Create Event
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewEventForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewEventModal;