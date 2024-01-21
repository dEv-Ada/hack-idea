import React, { useEffect, useState } from "react";
import AddNewModal from "../home/addNewModal";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteIdea, fetchMyIdea } from "../../service/action/action";
import { useNavigate } from "react-router";

const MyIdeas = () => {
  const [show, setShowModal] = useState(false);
  const [editId, setEditId] = useState();
  const [myIdea, setMyIdea] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMyIdea();
      setMyIdea(data);
    }
    fetchData();
  }, [show || editId]);

  const handleEdit = (id) => {
    setShowModal(true);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    deleteIdea(id);
    setEditId(id);
  };

  const handleClick = (id) => {
    navigate("/idea/" + id);
  };

  return (
    <div className="m-4">
      <div className="d-flex float-end">
        <AddNewModal
          data={show}
          setShowModal={setShowModal}
          editId={editId}
          setEditId={setEditId}
        />
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
              {myIdea &&
                myIdea.map((item) => (
                  <tr key={item.id}>
                    <td onClick={() => handleClick(item.id)}>{item.id}</td>
                    <td onClick={() => handleClick(item.id)}>{item.title}</td>
                    <td>{item.tag}</td>
                    <td>{item.votes}</td>
                    <td>{item.created_at}</td>
                    <td className="w-6">
                      <FontAwesomeIcon
                        icon={faPenAlt}
                        className="pe-4 blue-col"
                        onClick={() => handleEdit(item.id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="ind-red-col"
                        onClick={() => handleDelete(item.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyIdeas;
