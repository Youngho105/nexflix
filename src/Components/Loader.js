import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
  width: 100vw:
  height : 100vh;
  display: flex;
  justify-content: center;
  font-size : 30px;
`;

export default () => (
  <Container>
    <span>Loading</span>
  </Container>
);

