import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const deletePost = () => {};
  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    console.log(data);
    setPostList(data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      {postList.map((post) => {
        return (
          <Card className="mt-3" key={post.id}>
            <Card.Header
            /* className="bg-primary
        text-white" */
            >
              {post.title}
            </Card.Header>
            <Card.Body>{post.postText}</Card.Body>
            <Card.Footer className="text-end">
              <small className="text-muted">
                @{post.author.username} Last updated 3 mins ago
              </small>
              <Button variant="light" onClick={deletePost}>
                <FontAwesomeIcon icon={faTrash} className="me-1" />
                削除
              </Button>
            </Card.Footer>
          </Card>
        );
      })}
    </Container>
  );
};

export default Home;
