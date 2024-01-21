import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import {
  addNewIdea,
  editIdea,
  fetchIdeaById,
  fetchTag,
} from "../../service/action/action";

const AddNewModal = ({
  data = false,
  setShowModal = () => {},
  editId = null,
  setEditId = () => {},
}) => {
  const [show, setShow] = useState(false);
  const [tags, setTags] = useState([]);
  const [newIdea, setNewIdea] = useState();

  useEffect(() => {
    async function fetchTags() {
      const data = await fetchTag();
      setTags(data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    setShow(data);
    async function fetchIdea() {
      const data = await fetchIdeaById(editId);
      setNewIdea(data[0]);
    }
    fetchIdea();
  }, [data]);

  const handleChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setNewIdea((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value.trim(),
      }));
    }
  };

  const handleSubmit = () => {
    if (Object.keys(newIdea).length < 3) {
      alert("Please fill all the fields");
    } else {
      if (!editId) {
        addNewIdea(newIdea);
      } else {
        editIdea(editId, newIdea);
      }
      handleClose();
    }
  };

  const handleClose = () => {
    setShow(false);
    setShowModal(false);
    setEditId();
  };
  const handleShow = () => {
    setEditId();
    setNewIdea({});
    setShow(true);
    setShowModal(true);
  };
  return (
    <div>
      <Button variant="primary" className="float-end mb-2" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} /> Add New Idea
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{editId ? newIdea?.title : "New Idea"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a title for your idea"
                  id="title"
                  value={newIdea?.title}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <Form.Label>Tag</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  id="tag"
                  onChange={handleChange}
                  value={newIdea?.tag}
                >
                  <option value="" selected disabled>
                    Select Tag
                  </option>
                  {tags.map((item) => (
                    <option value={item.tag}>{item.tag}</option>
                  ))}
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                onChange={handleChange}
                value={newIdea?.description}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={
              newIdea !== undefined &&
              newIdea.title === "" &&
              newIdea.tag === "" &&
              newIdea.description === ""
            }
            variant="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNewModal;
