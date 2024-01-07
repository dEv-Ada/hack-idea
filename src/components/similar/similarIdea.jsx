import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Badge, Card, Carousel, Col, Row } from "react-bootstrap";
import { trimParagraph } from "../../service/utils/commonFunctions";
import { useNavigate } from "react-router";
import { fetchIdeaByTag } from "../../service/action/action";

const SimilarIdea = ({ tag, id }) => {
  const [dataArr, setDataArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fecthIdea() {
      const data = await fetchIdeaByTag(tag);
      const filterData = data.filter((el) => el.id !== id);
      setDataArr(arrStruct(filterData));
    }
    fecthIdea();
  }, [tag]);

  const handleClick = (id) => {
    navigate("/idea/" + id);
  };

  const arrStruct = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 4) {
      result.push(arr.slice(i, i + 4));
    }
    return result;
  };
  return (
    <div>
      <h5>Similar Ideas</h5>
      <Carousel interval={100000} variant="dark">
        {dataArr.map((item, index) => (
          <Carousel.Item key={index}>
            <Row>
              {item.map((el, ind) => (
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className="mb-3 cursor-pointer"
                  key={ind}
                >
                  <Card
                    style={{ width: "20 rem" }}
                    onClick={() => handleClick(el.id)}
                  >
                    <Card.Body>
                      <Card.Title>
                        {el.title}{" "}
                        <Badge className="tag" pill bg="warning" text="dark">
                          {el.tag}
                        </Badge>
                        <span className="pe-3 fs-14px float-end">
                          <FontAwesomeIcon className="red-col" icon={faHeart} />{" "}
                          {el.votes}
                        </span>
                      </Card.Title>
                      <Card.Text>
                        <div className="mb-2">
                          <span className="pe-3 fs-14px">
                            <FontAwesomeIcon icon={faUser} /> {el.created_by}
                          </span>
                          <span className="pe-3 fs-14px">
                            <FontAwesomeIcon icon={faCalendarAlt} />{" "}
                            {el.created_at}
                          </span>
                        </div>
                      </Card.Text>
                      <Card.Text>{trimParagraph(el.description)}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SimilarIdea;
