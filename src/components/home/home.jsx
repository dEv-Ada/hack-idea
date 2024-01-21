import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Form, Row } from "react-bootstrap";
import { fetchAllIdea } from "../../service/action/action";
import { trimParagraph } from "../../service/utils/commonFunctions";
import { useNavigate } from "react-router";
import SearchIdea from "./searchIdea";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import AddNewModal from "./addNewModal";

const Home = () => {
  const [allIdeas, setAllIdeas] = useState([]);
  const [filterIdeas, setFilterIdeas] = useState([]);
  const [show, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fecthIdea() {
      const data = await fetchAllIdea();
      setAllIdeas(data);
      setFilterIdeas(data);
    }
    fecthIdea();
  }, [show]);

  const searchIdea = (item) => {
    if (item === "") {
      setFilterIdeas(allIdeas);
    } else {
      const filterData = allIdeas.filter(
        (el) =>
          el.title.toLowerCase().includes(item.toLowerCase()) ||
          el.created_by.toLowerCase().includes(item.toLowerCase())
      );
      setFilterIdeas(filterData);
    }
  };

  const sortIdeas = (param) => {
    if (param === "all") {
      setFilterIdeas(allIdeas);
    } else if (param === "vote_high") {
      const sortData = [...filterIdeas].sort((a, b) => b.votes - a.votes);
      setFilterIdeas(sortData);
    } else if (param === "vote_low") {
      const sortData = [...filterIdeas].sort((a, b) => a.votes - b.votes);
      setFilterIdeas(sortData);
    } else if (param === "date_new") {
      const sortData = [...filterIdeas].sort((a, b) => {
        const aDate = new Date(a.created_at);
        const bDate = new Date(b.created_at);
        return bDate - aDate;
      });
      setFilterIdeas(sortData);
    } else if (param === "date_old") {
      const sortData = [...filterIdeas].sort((a, b) => {
        const aDate = new Date(a.created_at);
        const bDate = new Date(b.created_at);
        return aDate - bDate;
      });
      setFilterIdeas(sortData);
    }
  };

  const handleClick = (id) => {
    navigate("/idea/" + id);
  };

  return (
    <div>
      <div>
        <Form className="d-flex">
          <SearchIdea searchIdea={searchIdea} sortIdeas={sortIdeas} />
          <AddNewModal data={show} setShowModal={setShowModal} />
        </Form>
      </div>
      <Row className="item-row">
        {filterIdeas.map((item, index) => (
          <Col
            lg={3}
            md={3}
            sm={12}
            xs={12}
            className="mb-3 cursor-pointer"
            key={index}
          >
            <Card
              style={{ width: "20 rem" }}
              onClick={() => handleClick(item.id)}
            >
              <Card.Body>
                <Card.Title>
                  {item.title}{" "}
                  <Badge className="tag" pill bg="warning" text="dark">
                    {item.tag}
                  </Badge>
                  <span className="pe-3 fs-14px float-end">
                    <FontAwesomeIcon className="red-col" icon={faHeart} />{" "}
                    {item.votes}
                  </span>
                </Card.Title>
                <Card.Text>
                  <div className="mb-2">
                    <span className="pe-3 fs-14px">
                      <FontAwesomeIcon icon={faUser} /> {item.created_by}
                    </span>
                    <span className="pe-3 fs-14px">
                      <FontAwesomeIcon icon={faCalendarAlt} /> {item.created_at}
                    </span>
                  </div>
                </Card.Text>
                <Card.Text>{trimParagraph(item.description)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
