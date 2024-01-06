import React from "react";
import AddNewModal from "../home/addNewModal";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const MyIdeas = () => {
  return (
    <div className="m-4">
      <div className="d-flex float-end">
        <AddNewModal />
      </div>
      <div>
        <h4 className="text-light">Idea List</h4>
        <div className="my-idea-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Tag</th>
                <th>Vote</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className="w-9">
                  <FontAwesomeIcon icon={faPenAlt} className="pe-4" />
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyIdeas;
