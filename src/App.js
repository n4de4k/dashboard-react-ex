import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

import Header from "containers/Header";
import Menu from "containers/Menu";
import Dashboard from "containers/Dashboard";

const Container = styled.div`
  height: 100vh;
  overflow: auto;
`;

const ContentContainer = styled.div`
  padding-left: 72px;
  padding-top: 72px;
  background: #f7f7f7;
  min-height: 100%;
`;

function App() {
  return (
    <Container>
      <Header />
      <Menu />
      <ContentContainer>
        <Dashboard />
      </ContentContainer>
    </Container>
  );
}

export default App;
