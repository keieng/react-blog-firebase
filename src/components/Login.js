import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
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
