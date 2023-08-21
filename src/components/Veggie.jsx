import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const Veggie = () => {

  const [veggie, setVeggie] = useState([]);

  useEffect(() =>{
      getVeggie();
  },[])

  const getVeggie = async () =>{
      const check = localStorage.getItem('setVeggie');

      if(check){
          setVeggie(JSON.parse(check));
      }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=vegetarian`)
          const data = await api.json();

          localStorage.setItem('setVeggie', JSON.stringify(data.recipes));
          setVeggie(data.recipes);
      }

      
  }

  return (
    <div>
        <Wrapper>
                
            <Heading>Vegetarian Dishes</Heading>
              
            <Grid>
            {veggie.map((recipe) =>{
                    return(
                      
                        <Card key={recipe.id}>
                            <Link to={'/recipe/' + recipe.id}>
                            <img src={recipe.image} alt={recipe.title} />
                            <p>{recipe.title}</p>
                            {/* < Gradient /> */}
                            </Link>
                        </Card>
                        
                    );
                })}
            </Grid>
                
        </Wrapper>
        
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
    padding: 1rem 4rem;

    @media screen and (max-width: 36rem ) {
        padding: 1rem;
  }
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
    grid-gap: 1rem;
`
const Heading = styled.h3`
    position: relative;
    margin-bottom: 2rem;
    &::after{
        content: '';
        height: 4px;
        width: 7%;
        background: #6A9635;
        position: absolute;
        bottom: -10px;
        left: 0;
    }

    @media screen and (max-width: 36rem ) {
        &::after{
        width: 20%;
    }
  }
`
const Card = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    margin-top: 1rem;
    box-shadow: 0 0 4px 1px rgba(0,0,0, 0.1);
    &:hover{
        box-shadow: 0 0 4px 1px rgba(106, 150, 53);
    }
    img{
        /* width: 100%;
        height: 100%;
        object-fit: contain; */
        max-width: 100%;
    }

    p{
        color: black;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: .85rem;
        padding: 1rem;
    }
`

export default Veggie