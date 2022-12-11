import {
  faArrowRightToBracket,
  faFilePen,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = ({ isAuth }) => {
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
            <Nav.Link eventKey="link-2">
              <Link to="/login">
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="me-1"
                />
                ログイン
              </Link>
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
