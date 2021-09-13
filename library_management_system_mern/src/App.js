import React from "react";
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";

import { Main, Footer, Header } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/navbar";

import { Dashboard } from "./containers/Dashboard";
function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "# 0086c3",
      textColor: "#000",
    },
    secondary: {
      main: "#fff",
    },
    spacing: (factor) => `${factor * 8}px`,
  };
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href="#">
              <BsBookHalf></BsBookHalf>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
        </NavBar>
      </Header>
      <Main>
        <Dashboard></Dashboard>
      </Main>
      <Footer>Copyright {new Date().getFullYear}@ Spark Academy </Footer>
    </ThemeProvider>
  );
}

export default App;
