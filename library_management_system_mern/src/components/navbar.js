import styled from "styled-components";

export const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: ${(props) => props.theme.spacing(1)} 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.primary.main};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  max-height: 5vh;
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.primary.textColor};
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 1.25em;

  :hover {
    background-color: ${(props) => props.theme.primary.light};

    .active {
      background-color: ${(props) => props.theme.primary.dark};
    }
  }
`;

export const NavItem = styled.li`
  float: left;
`;
