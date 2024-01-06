import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    sessionStorage.setItem("user_id", userId);
    sessionStorage.setItem("loginFlag", true);
    navigate("/");
  };
  return (
    <div className="login">
      <Container>
        <Card className="login-card shadow-lg bg-body rounded">
          <div className="fs-3 fw-semibold text-center pt-1">Hack-Idea</div>
          <Form className="login-form">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="12">
                User Id
              </Form.Label>
              <Col sm="12">
                <Form.Control
                  onChange={(e) => setUserId(e.target.value)}
                  type="text"
                  placeholder="User Id"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="12">
                Password
              </Form.Label>
              <Col sm="12">
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            <Button
              variant="primary"
              disabled={userId === ""}
              onClick={handleLogin}
              className="float-end"
            >
              Login
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
