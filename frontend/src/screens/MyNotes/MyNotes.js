import React from "react";
import MainScreen from "../../Components/Header/MainScreen";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back Joyesh Mondal.">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
