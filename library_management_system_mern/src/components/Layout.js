import styled from "styled-components";
export const Header = styled.header`
  height: 5vh;
`;
export const Main = styled.main`
  min-height: 95vh;
  padding: ${(props) => props.theme.spacing(1)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;
