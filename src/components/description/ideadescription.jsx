import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Badge, Card, Container } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Ideadescription = () => {
  return (
    <div>
      <Container>
        <Card className="shadow-lg bg-body rounded mt-4 p-3">
          <div className="mb-2">
            <span className="fs-3 fw-semibold">Title I</span>{" "}
            <Badge pill bg="warning" text="dark">
              Tech
            </Badge>
          </div>
          <div className="mb-2">
            <span className="pe-3">
              <FontAwesomeIcon icon={faHeart} /> 34 votes
            </span>
            <span className="pe-3">
              <FontAwesomeIcon icon={faUser} /> Dip Adhi
            </span>
            <span className="pe-3">
              <FontAwesomeIcon icon={faClock} /> 2nd Jan, 2024
            </span>
          </div>
          <hr />
          <h5>Description</h5>
          <div className="idea-desc">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Ideadescription;
