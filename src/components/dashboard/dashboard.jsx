import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../home/home";
import { Container } from "react-bootstrap";
import AddNewModal from "../home/addNewModal";

const Dashboard = () => {
  const loginFlag = sessionStorage.getItem("loginFlag");
  const navigate = useNavigate();
  useEffect(() => {
    if (loginFlag === null || loginFlag === undefined) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Container className="mt-3">
        <div className="d-flex float-end">
          <AddNewModal />
        </div>
        <div className="float-end">
          <Home />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
