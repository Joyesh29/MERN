import React from "react";
import MainScreen from "../../Components/Header/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import notes from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // TODO document why this block is empty
    }
  };
  return (
    <MainScreen title="Welcome Back Joyesh Mondal.">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: "1",
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: "18",
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - Date{" "}
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Accordion.Toggle as={Card.Text} variant="link" eventKey="1">
            {note.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">test</Accordion.Collapse>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
