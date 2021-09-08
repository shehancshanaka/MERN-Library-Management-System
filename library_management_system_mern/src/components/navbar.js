import styled from "styled-components";

export const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const NavLink = styled.a`
  display: block;
  color: white;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;

  :hover {
    background-color: #4fc3f7;

    .active {
      background-color: #04aa6d;
    }
  }
`;

export const NavItem = styled.li`
  float: left;
`;
