import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { auth, provider } from "../firebase";

const Login = () => {
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider);
  };
  return (
    <Container>
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body></Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={loginInWithGoogle}>
            <FontAwesomeIcon icon={faArrowRightToBracket} className="me-1" />
            Login
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Login;
