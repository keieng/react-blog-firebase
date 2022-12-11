import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    // Googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <Container>
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={logout}>
            <FontAwesomeIcon icon={faArrowRightToBracket} className="me-1" />
            Logout
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Logout;
