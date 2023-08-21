import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import {BrowserRouter} from "react-router-dom"
import Search from "./components/Search";
import  styled  from 'styled-components'
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi'
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav>
          <LogoFlex>
          <GiKnifeFork />
          <Logo to={'/'}>deliousss recipes</Logo>
          </LogoFlex>
          <button>Login</button>
        </Nav>
        <Hero />
        <Search />
        <Categories />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 1.5rem;
  font-family: 'Lobster Two', cursive;
  cursor: pointer;
`
const Nav = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 

  svg{
    font-size: 2rem;
    cursor: pointer;
    color: #6A9635;
  }
  button{
    padding: .7rem 2rem;
  color: #6A9635;
  background: white;
  border: 2px solid #6A9635;
  font-weight: 600; 
  cursor: pointer;
  transition: all .3s ease-in-out;
  }
  button:hover{
    background: #6A9635;
    color: white;
  }

  @media screen and (max-width: 36rem){
    padding: 1rem 1rem;
  }
`
const LogoFlex = styled.div`
  display: flex;
  align-items: center;

`
 export default App;
