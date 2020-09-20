import React from "react";
import Container from "@material-ui/core/Container";

import "./common/Utils.css";
import Users from "./users/Users";

function App() {
  return (
    <Container component="main">
      <Users />
    </Container>
  );
}

export default App;
