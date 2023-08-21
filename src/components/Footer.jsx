import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {GiKnifeFork} from 'react-icons/gi'
import styled  from 'styled-components'
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom"
import {BsFacebook, BsInstagram, BsTiktok} from "react-icons/bs"

function Footer() {

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
      e.preventDefault();
      navigate("/searched/" + input)
  }

  return (
    <Wrapper>
      <Grid>
        <Flex>
         <LogoFlex>
          <GiKnifeFork />
          <Logo to={'/'}>deliousss recipes</Logo>
          </LogoFlex>
          <Socials>
            <BsFacebook />
            <BsInstagram />
            <BsTiktok />
          </Socials>
        </Flex>

        <FooterSearch onSubmit={submitHandler}>
          <h3>Search your Dishes</h3>
            <div>
                <FaSearch/>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
            </div>
        </FooterSearch>

          <FooterLinks>
            <h3>Categories</h3>
              <ul>
                <SLink to={'/cuisine/Italian'}>
                  <h4>Italian</h4>
                </SLink>
                <SLink to={'/cuisine/American'}>
                  <h4>American</h4>
                </SLink>
                <SLink to={'/cuisine/Thai'}>
                  <h4>Thai</h4>
                </SLink>
                <SLink to={'/cuisine/Chinese'}>
                  <h4>Chinese</h4>
                </SLink>
              </ul>
          </FooterLinks>

          <FooterInput>
            <h3>Subscribe to Our Newsletter</h3>
            <InputDiv>
              <input type="text" placeholder='Enter your email'/>
              <button>Submit</button>
            </InputDiv>

          </FooterInput>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2rem 4rem;

  background: #6A9635;
  color: white;

  svg{
    font-size: 2rem;
  }
  @media screen and (max-width: 36rem){
    padding: 3rem 1rem;
  }
`
const Grid = styled.div`
   display: grid;
   grid-template-columns: 20% 30% 20% 30%;
   gap: 1rem;
   align-items: center;

   @media screen and (max-width: 62rem){
    grid-template-columns: 1fr;
    gap: 2rem;
   }
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 1.5rem;
  font-family: 'Lobster Two', cursive;
  cursor: pointer;
  color: white;
`
const LogoFlex = styled.div`
  display: flex;
  align-items: center;

`
const Socials = styled.div`
    display: flex;
    gap: 1rem;
    
    svg{
      font-size: 1.5rem;
    }
`
const FooterLinks = styled.div`
  h3{
    margin-bottom: 1rem;
    color: white;
  }
`
const SLink = styled(NavLink)`
    cursor: pointer;

    h4{
      font-size: 1rem;
      color: white;
      font-weight: 500;
    }

    h4:hover{
      color:  #f27121;
    }
`
const FooterSearch = styled.form`
    h3{
      color: white;
      margin-bottom: 1rem;
    }
    div{
        position: relative;
    }
    input{
        border: none;
        background: white;
        font-size: 1rem;
        color: black;
        padding: 1rem 3rem;
        border: none;
        outline: 1px solid #6A9635;
  
    }
 
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #6A9635;
        font-size: 1rem;
    }
`

const FooterInput = styled.div`
  h3{
    color: white;
    margin-bottom: 1rem;
  }
`
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  input{
    padding: 1rem 2rem;
    width: 100%;
    border: none;
    outline: none;
  }
  button{
    padding: 1rem 2rem;
    border: 1px solid white;
    background: transparent;
    color: white;
    cursor: pointer;
    font-weight: 600;
  }
  button:hover{
    background: white;
    color: #6A9635;
    transition: all .3s;
  }

  @media screen and (max-width: 36rem){
    flex-direction: column;
    align-items: flex-start;
  }
`
export default Footer