import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() =>{
        getPopular();
    },[])

    const getPopular = async () =>{
        const check = localStorage.getItem('setPopular');

        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
            const data = await api.json();

            localStorage.setItem('setPopular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes)
        }

        
    }

  return <div>
    
            <Wrapper>
                
                <Heading>Popular Dishes</Heading>
                
                <Splide options={{
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem',
                    trimSpace: false,
                    padding: '10%',
                    breakpoints: {
                        1400:{
                            perPage: 4,
                        },
                        1200:{
                            perPage: 4,
                        },
                        992: {
                            perPage: 3,
                        },
                        768: {
                            perPage: 2,
                        },
                        576: {
                            perPage: 2,
                        },
                        483: {
                            perPage: 1,
                        }
                    }
                    }}>
                    {popular.map((recipe) =>{
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                < Gradient />
                                </Link>
                            </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        

    </div>
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
    padding: 1rem 4rem;

       @media screen and (max-width: 36rem ) {
        padding: 1rem;
  }
`
const Heading = styled.h3`
    position: relative;
    margin-bottom: 2rem;
    &::after{
        content: '';
        height: 4px;
        width: 5%;
        background: #6A9635;
        position: absolute;
        bottom: -10px;
        left: 0;
    }

    @media screen and (max-width: 48rem ) {
        &::after{
            width: 10%;
        }
    }

`

const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    margin-top: 1rem;

    img{
        border-radius: 2rem;
        width: 100%;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 10%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: .8rem;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }
`
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, 0.7))
`

export default Popular