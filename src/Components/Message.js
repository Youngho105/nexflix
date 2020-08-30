import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";


const Container = Styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Text = Styled.h3`
  color: ${props => props.color};
  font-size: 20px;
`;


const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text:PropTypes.string.isRequired,
  color:PropTypes.string.isRequired
}

export default Message;