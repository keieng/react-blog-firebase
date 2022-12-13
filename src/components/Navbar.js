import {
  faArrowRightToBracket,
  faFilePen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";

const Navbar = ({ isAuth, setIsAuth }) => {
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
    <Nav
      className="justify-content-center bg-light mb-3"
      /* defaultActiveKey="/home" */ as="ul"
    >
      <Nav.Item as="li">
        <Nav.Link href="/home">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="me-1" /> ホーム
          </Link>
        </Nav.Link>
      </Nav.Item>

      {isAuth ? (
        <>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">
              <Link to="/createpost">
                <FontAwesomeIcon icon={faFilePen} className="me-1" />
                記事投稿
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">
              <Link to="/logout">
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="me-1"
                />
                ログアウト
              </Link>
            </Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2" onClick={loginInWithGoogle}>
              {/* <Link to="/login"> */}
              <FontAwesomeIcon icon={faArrowRightToBracket} className="me-1" />
              ログイン
              {/* </Link> */}
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
