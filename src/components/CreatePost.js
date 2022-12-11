import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  return (
    <Container>
      <Form>
        <Card>
          <Card.Header>記事を投稿する</Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>タイトル</Form.Label>
              <Form.Control
                type="text"
                placeholder="タイトルを記入"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>投稿内容</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="投稿内容を記入"
                onChange={(e) => setPostText(e.target.value)}
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="primary" onClick={createPost}>
              <FontAwesomeIcon icon={faPaperPlane} className="me-1" />
              投稿
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </Container>
  );
};

export default CreatePost;
