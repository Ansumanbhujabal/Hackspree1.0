import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { postJoinedEvent } from "../features/joinedEvents/joinedEventsSlice";

function JoinModal(props) {
  const { event } = props;
  const { title } = event;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleJoinEvent = async () => {
    try {
      // Make the API call to join the event
      const response = await dispatch(postJoinedEvent(event));

      // Handle the response if needed

      // Close the modal
      handleClose();
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  return (
    <>
      <div onClick={handleShow}>Join Event</div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h6 style={{ color: "green" }}>Join an Event</h6>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to attend this event?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleJoinEvent}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JoinModal;
