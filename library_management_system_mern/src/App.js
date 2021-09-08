
import { Header, Main, Footer } from "./components/Layout"
import {NavBar,NavItem,NavLink} from './components/navbar'
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
