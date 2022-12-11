import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const CreatePost = () => {
  return (
    <Container>
      <Form>
        <Card>
          <Card.Header>記事を投稿する</Card.Header>
          <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>タイトル</Form.Label>
              <Form.Control type="text" placeholder="タイトルを記入" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>投稿</Form.Label>
              <Form.Control as="textarea" placeholder="投稿内容を記入" />
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="primary" /* onClick={} */>
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
