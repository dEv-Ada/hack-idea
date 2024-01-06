import { faCalendar, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { fetchAllIdea } from "../../service/action/action";
import { trimParagraph } from "../../service/utils/commonFunctions";
import { useNavigate } from "react-router";
import SearchIdea from "./searchIdea";
import AddNewModal from "./addNewModal";

const Home = () => {
  const [allIdeas, setAllIdeas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fecthIdea() {
      const data = await fetchAllIdea();
      setAllIdeas(data);
    }
    fecthIdea();
  }, []);

  const handleClick = (id) => {
    navigate("/idea/" + id);
  };

  return (
    <div>
      <div>
        <SearchIdea />
      </div>
      <Row className="float-end item-row">
        {allIdeas.map((item, index) => (
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
                    <FontAwesomeIcon icon={faHeart} /> {item.votes}
                  </span>
                </Card.Title>
                <Card.Text>
                  <div className="mb-2">
                    <span className="pe-3 fs-14px">
                      <FontAwesomeIcon icon={faUser} /> {item.created_by}
                    </span>
                    <span className="pe-3 fs-14px">
                      <FontAwesomeIcon icon={faCalendar} /> {item.created_at}
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
