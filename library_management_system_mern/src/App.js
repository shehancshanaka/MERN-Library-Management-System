import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Main, Footer, Header } from "./components/Layout";
import { NavBar, NavItem, NavLink } from "./components/Navbar";
import{DASHBOARD,CATALOG} from "./shared/routes"


//import { Dashboard,} from "./containers/Dashboard";
import Spinner from "./components/Spinner";


const dashboard = React.lazy(() => {
  
return import ("./containers/Dashboard")

});
const NotFound = React.lazy(() => {
  
return import ("./containers/404")

});


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

  let routes = (
    <Suspense fallback={<Spinner></Spinner>}>
      <Switch>
        <Route exact path={DASHBOARD} component={dashboard} />

        <Route exact path={"/"} component={dashboard} />
        <Route exact path={CATALOG} component={Spinner} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href={CATALOG}>
              <BsBookHalf></BsBookHalf>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={CATALOG}>Catalog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={DASHBOARD}>Dashboard</NavLink>
          </NavItem>
        </NavBar>
      </Header>
      <Main>
        <Router>
          {routes}
</Router>
      </Main>
   
      <Footer>Copyright {new Date().getFullYear()} @ Spark Academy </Footer>
    </ThemeProvider>
  );
}

export default App;
