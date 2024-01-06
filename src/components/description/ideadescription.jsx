import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Badge, Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { fetchIdeaById } from "../../service/action/action";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Ideadescription = () => {
  const param = useParams();
  const [idea, setIdea] = useState([]);
  useEffect(() => {
    async function fetchIdea() {
      const data = await fetchIdeaById(Number(param.id));
      console.log("data", param, data);
      setIdea(data);
    }
    fetchIdea();
  }, []);
  return (
    <div>
      <Container>
        {idea.length > 0 && (
          <Card className="shadow-lg bg-body rounded mt-4 p-3">
            <div className="mb-2">
              <span className="fs-3 fw-semibold">{idea[0].title}</span>{" "}
              <Badge pill bg="warning" text="dark">
                {idea[0].tag}
              </Badge>
            </div>
            <div className="mb-2">
              <span className="pe-3">
                <FontAwesomeIcon icon={faHeart} /> {idea[0].votes + " votes"}
              </span>
              <span className="pe-3">
                <FontAwesomeIcon icon={faUser} /> {idea[0].created_by}
              </span>
              <span className="pe-3">
                <FontAwesomeIcon icon={faClock} /> {idea[0].created_at}
              </span>
            </div>
            <hr />
            <h5>Description</h5>
            <div className="idea-desc">{idea[0].description}</div>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default Ideadescription;
