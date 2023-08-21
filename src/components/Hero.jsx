import React from 'react'
import styled from "styled-components";
import hero from '../images/food hero.jpg'

function Hero() {
  return (
    <Wrapper>
        
        <Flex>
        <HeroTextInfo>
            <HeroText>
                Get the best <span>dishes</span> over the world
            </HeroText>
            <HeroBtn>Get Started</HeroBtn>
        </HeroTextInfo>
        <img src={hero} alt="hero" />
        </Flex>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 2rem auto;
  padding: 0 2rem;
`
const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  img{
    max-width: 100%;
  }

  @media screen and (max-width: 62rem ) {
    grid-template-columns: 1fr;

    img{
      margin: 0 auto;
    }
  }
`
const HeroTextInfo = styled.div`
    margin-left: 2rem;

  @media screen and (max-width: 62rem ) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 48rem ) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 36rem ) {
    padding: 0rem;
    margin-left: 0rem;
  }
`
const HeroText = styled.h3`
    font-size: 3.6rem;
    color: #6A9635;
    line-height: 1.1;
    margin-bottom: 2rem;

    span{
      color: gold;
    }

  @media screen and (max-width: 36rem ) {
    font-size: 2rem;
  }
`
const HeroBtn = styled.button`
  padding: 1rem 2rem;
  color: #6A9635;
  background: white;
  border: 2px solid #6A9635;
  font-weight: 600; 
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover{
    background: #6A9635;
    color: white;
  }
`
export default Hero