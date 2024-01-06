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
    <div className="m-3">
      <Home />
    </div>
  );
};

export default Dashboard;
