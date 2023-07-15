import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function UpdateProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p id='update-profile-button' onClick={handleShow}>
        Update Profile
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Change Username</Form.Label>
        <Form.Control type="text" placeholder="New username" />
        </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Change Profile Photo</Form.Label>
        <Form.Control type="text" placeholder="Image URL" />
        </Form.Group>
         </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateProfile;