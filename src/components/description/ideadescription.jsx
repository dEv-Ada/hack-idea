import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { editIdea, fetchIdeaById } from "../../service/action/action";
import { faCalendarAlt, faHeart } from "@fortawesome/free-regular-svg-icons";
import SimilarIdea from "../similar/similarIdea";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

const Ideadescription = () => {
  const param = useParams();
  const [idea, setIdea] = useState([]);
  const [selfVoting, setSelfVoting] = useState(false);
  const user = sessionStorage.getItem("user_id");
  useEffect(() => {
    async function fetchIdea() {
      const data = await fetchIdeaById(Number(param.id));
      setIdea(data);
      setSelfVoting(false);
    }
    fetchIdea();
  }, [param, selfVoting]);

  const handleClick = () => {
    editIdea(idea[0].id, {
      ...idea[0],
      votes: !idea[0]?.selfVote?.includes(user)
        ? idea[0].votes + 1
        : idea[0].votes - 1,
      selfVote: idea[0]?.selfVote?.includes(user)
        ? idea[0].selfVote.filter((el) => el !== user)
        : [...idea[0].selfVote, user],
    });
    setSelfVoting(true);
  };

  return (
    <div className="m-2">
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
              <FontAwesomeIcon
                icon={
                  idea[0].selfVote.includes(user)
                    ? ["fas", "heart"]
                    : ["far", "heart"]
                }
                className={idea[0].selfVote.includes(user) ? "red-col" : ""}
                onClick={handleClick}
              />{" "}
              {idea[0].votes + " votes"}
            </span>
            <span className="pe-3">
              <FontAwesomeIcon icon={faUser} /> {idea[0].created_by}
            </span>
            <span className="pe-3">
              <FontAwesomeIcon icon={faCalendarAlt} /> {idea[0].created_at}
            </span>
          </div>
          <hr />
          <h5>Description</h5>
          <div className="idea-desc">{idea[0].description}</div>
          <SimilarIdea tag={idea[0].tag} id={Number(param.id)} />
        </Card>
      )}
    </div>
  );
};

export default Ideadescription;
