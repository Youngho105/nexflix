import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";

const Container = Styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = Styled.h3`
  font-size : 20px;
  margin-bottom: 20px;
`;

const Grid = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 125px);
  gap: 25px;
  @media (max-width:768px) {
    grid-template-columns: repeat(auto-fit, 140px);
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
)


Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Section;