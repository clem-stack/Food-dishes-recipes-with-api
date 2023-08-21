import {FaPizzaSlice, FaHamburger} from "react-icons/fa"
import {GiNoodles, GiChopsticks} from "react-icons/gi"
import {LuSoup} from "react-icons/lu"
import styled from "styled-components";
import {NavLink} from "react-router-dom"


function Categories() {
  return (
    <List>
        <SLink to={'/cuisine/Nigerian'}>
            <LuSoup />
            <h4>Nigerian</h4>
        </SLink>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiChopsticks />
            <h4>Chinese</h4>
        </SLink>

    </List>
  )
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0rem;
    gap: 1rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(35deg, #83c039, #6A9635);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    
    &.active, &:hover{
        background: linear-gradient(to right, #f27121, #e94057);
        transition: all .3s ease-in-out;

        svg{
            color: white;
        }
        h4{
            color: white;
        }

        @media screen and (max-width: 36rem){
            width: 3rem;
            height: 3rem;
            transform: scale(0);
        }
    }

  
`

export default Categories