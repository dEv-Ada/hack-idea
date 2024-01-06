import React from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import AddNewModal from "./addNewModal";

const SearchIdea = () => {
  return (
    <div>
      <Form className="d-flex">
        <Form.Group
          className="mb-3 me-3 w-75"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Search with Title or Creator Name"
          />
        </Form.Group>
        <DropdownButton
          id="dropdown-button-drop"
          size="sm"
          variant="secondary"
          title="Vote"
          className="me-2"
        >
          <Dropdown.Item eventKey="1">Ascending</Dropdown.Item>
          <Dropdown.Item eventKey="2">Descending</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-button-drop"
          size="sm"
          variant="secondary"
          title="Date"
          className="me-5"
        >
          <Dropdown.Item eventKey="1">Ascending</Dropdown.Item>
          <Dropdown.Item eventKey="2">Descending</Dropdown.Item>
        </DropdownButton>
        <AddNewModal />
      </Form>
    </div>
  );
};

export default SearchIdea;
