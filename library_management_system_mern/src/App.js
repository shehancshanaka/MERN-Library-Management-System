import React from "react";
import { ThemeProvider } from "styled-components";
import { Header, Main, Footer } from "./components/Layout"
import {NavBar,NavItem,NavLink} from './components/navbar'
function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "# 0086c3",
      textColor : "#000"
    },
    secondary: {
      main: "#fff"
    },
  };
  return (
    <ThemeProvider theme = {theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href='#'>Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Dashboard</NavLink>
          </NavItem>
        </NavBar>
      </Header>
      <Main>This is Main</Main>
      <Footer>This is Footer</Footer>
    </ThemeProvider>
  );
}

export default App;
