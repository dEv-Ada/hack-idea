import React from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import AddNewModal from "./addNewModal";

const SearchIdea = ({ searchIdea, sortIdeas }) => {
  return (
    <div>
      <Form className="d-flex">
        <Form.Group
          className="mb-3 me-3 w-78"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Search with Title or Creator Name"
            onChange={(e) => searchIdea(e.target.value)}
          />
        </Form.Group>
        <DropdownButton
          id="dropdown-button-drop"
          size="sm"
          variant="secondary"
          title="Sort By"
          className="me-5"
        >
          <Dropdown.Item id="all" onClick={(e) => sortIdeas(e.target.id)}>
            All
          </Dropdown.Item>
          <hr />
          <Dropdown.Item id="vote_high" onClick={(e) => sortIdeas(e.target.id)}>
            Vote - High to Low
          </Dropdown.Item>
          <Dropdown.Item id="vote_low" onClick={(e) => sortIdeas(e.target.id)}>
            Vote - Low to High
          </Dropdown.Item>
          <hr />
          <Dropdown.Item id="date_new" onClick={(e) => sortIdeas(e.target.id)}>
            Date - New to Old
          </Dropdown.Item>
          <Dropdown.Item id="date_old" onClick={(e) => sortIdeas(e.target.id)}>
            Date - Old to New
          </Dropdown.Item>
        </DropdownButton>

        <AddNewModal />
      </Form>
    </div>
  );
};

export default SearchIdea;
