import { useEffect, useState } from "react";
import styled, { Styled } from "styled-components";
import { useParams } from "react-router-dom";


function Recipe() {

  let params = useParams();
  const[details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchDetails = async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json();
    setDetails(detailData)
    console.log(detailData)
  }

  useEffect(() =>{
    fetchDetails()
  },[params.name])

  return (
    <DetaileWrapper>
      <Flex>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
        <p dangerouslySetInnerHTML={{__html:details.summary}}></p>
      </Flex>
      <Info>
       <div>
          <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
          <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
       </div>
        <div>
          {activeTab === "instructions" && (
                <Instruct>
                  <p dangerouslySetInnerHTML={{__html:details.instructions}}></p>
                </Instruct>
          )}
          {activeTab === "ingredients" && (
            <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          )}
        </div>
       
      </Info>
    </DetaileWrapper>
  )
}


const DetaileWrapper = styled.div`
  padding: 0rem 6rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }

  @media screen and (max-width: 62rem ) {
    grid-template-columns: 1fr;
    padding: 0 3rem;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

img{
  margin-bottom: 2rem;
}
p{
  font-size: .9rem;
}
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p{
    margin-top: 2rem;
  }
`
const Instruct = styled.div`
  p{
    font-size: 1rem;
  }
`
export default Recipe