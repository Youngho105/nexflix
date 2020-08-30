import React from "react";
import Styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = Styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top:0;
  left:0;
  background-color: rgba(20,20,20,0.8);
  color:white;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const List = Styled.ul`
  display: flex;
`;

const Item = Styled.li`
  width: 80px;
  height: 50px;
  border-bottom: 5px solid ${props => props.current ? "#2980b9" : "transparent"};
  transition: border-bottom 500ms ease-in-out;
`;

const SLink = Styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default withRouter(
  ({ location: { pathname } }) => (
    <Header>
      <List>
        <Item current={pathname==="/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname==="/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname==="/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  ))