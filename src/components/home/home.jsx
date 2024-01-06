import { faCalendar, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/idea/" + id);
  };

  return (
    <div>
      <Row>
        <Col lg={3} md={3} sm={12} xs={12} className="mb-3 cursor-pointer">
          <Card style={{ width: "17rem" }} onClick={() => handleClick(1)}>
            <Card.Body>
              <Card.Title>
                Title I{" "}
                <Badge className="tag" pill bg="warning" text="dark">
                  Tech
                </Badge>
                <span className="pe-3 fs-14px float-end">
                  <FontAwesomeIcon icon={faHeart} /> 34
                </span>
              </Card.Title>
              <Card.Text>
                <div className="mb-2">
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faUser} /> Dip
                  </span>
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faCalendar} /> 2nd Jan, 2024
                  </span>
                </div>
              </Card.Text>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="mb-3 cursor-pointer">
          <Card style={{ width: "17rem" }} onClick={() => handleClick(1)}>
            <Card.Body>
              <Card.Title>
                Title I{" "}
                <Badge className="tag" pill bg="warning" text="dark">
                  Tech
                </Badge>
                <span className="pe-3 fs-14px float-end">
                  <FontAwesomeIcon icon={faHeart} /> 34
                </span>
              </Card.Title>
              <Card.Text>
                <div className="mb-2">
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faUser} /> Dip
                  </span>
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faCalendar} /> 2nd Jan, 2024
                  </span>
                </div>
              </Card.Text>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="mb-3 cursor-pointer">
          <Card style={{ width: "17rem" }} onClick={() => handleClick(1)}>
            <Card.Body>
              <Card.Title>
                Title I{" "}
                <Badge className="tag" pill bg="warning" text="dark">
                  Tech
                </Badge>
                <span className="pe-3 fs-14px float-end">
                  <FontAwesomeIcon icon={faHeart} /> 34
                </span>
              </Card.Title>
              <Card.Text>
                <div className="mb-2">
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faUser} /> Dip
                  </span>
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faCalendar} /> 2nd Jan, 2024
                  </span>
                </div>
              </Card.Text>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="mb-3 cursor-pointer">
          <Card style={{ width: "17rem" }} onClick={() => handleClick(1)}>
            <Card.Body>
              <Card.Title>
                Title I{" "}
                <Badge className="tag" pill bg="warning" text="dark">
                  Tech
                </Badge>
                <span className="pe-3 fs-14px float-end">
                  <FontAwesomeIcon icon={faHeart} /> 34
                </span>
              </Card.Title>
              <Card.Text>
                <div className="mb-2">
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faUser} /> Dip
                  </span>
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faCalendar} /> 2nd Jan, 2024
                  </span>
                </div>
              </Card.Text>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="mb-3 cursor-pointer">
          <Card style={{ width: "17rem" }} onClick={() => handleClick(1)}>
            <Card.Body>
              <Card.Title>
                Title I{" "}
                <Badge className="tag" pill bg="warning" text="dark">
                  Tech
                </Badge>
                <span className="pe-3 fs-14px float-end">
                  <FontAwesomeIcon icon={faHeart} /> 34
                </span>
              </Card.Title>
              <Card.Text>
                <div className="mb-2">
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faUser} /> Dip
                  </span>
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faCalendar} /> 2nd Jan, 2024
                  </span>
                </div>
              </Card.Text>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="mb-3 cursor-pointer">
          <Card style={{ width: "17rem" }} onClick={() => handleClick(1)}>
            <Card.Body>
              <Card.Title>
                Title I{" "}
                <Badge className="tag" pill bg="warning" text="dark">
                  Tech
                </Badge>
                <span className="pe-3 fs-14px float-end">
                  <FontAwesomeIcon icon={faHeart} /> 34
                </span>
              </Card.Title>
              <Card.Text>
                <div className="mb-2">
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faUser} /> Dip
                  </span>
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faCalendar} /> 2nd Jan, 2024
                  </span>
                </div>
              </Card.Text>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={3} sm={12} xs={12} className="mb-3 cursor-pointer">
          <Card style={{ width: "17rem" }} onClick={() => handleClick(1)}>
            <Card.Body>
              <Card.Title>
                Title I{" "}
                <Badge className="tag" pill bg="warning" text="dark">
                  Tech
                </Badge>
                <span className="pe-3 fs-14px float-end">
                  <FontAwesomeIcon icon={faHeart} /> 34
                </span>
              </Card.Title>
              <Card.Text>
                <div className="mb-2">
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faUser} /> Dip
                  </span>
                  <span className="pe-3 fs-14px">
                    <FontAwesomeIcon icon={faCalendar} /> 2nd Jan, 2024
                  </span>
                </div>
              </Card.Text>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
