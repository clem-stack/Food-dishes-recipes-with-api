import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    }
  return (
    <FormStyled onSubmit={submitHandler} >
        <div>
            <FaSearch/>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Search for your favourite dish"/>
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
    margin: 2rem auto;
    position: relative;
    width: 80%;

    div{
        position: relative;
        
    }
    input{
        border: none;
        background: transparent;
        font-size: 1.5rem;
        color: black;
        padding: 1rem 3rem;
        border: none;
        outline: 1px solid #6A9635;
        border-radius: 1rem;
        width: 100%;

        &::placeholder{
        font-size: 1rem;
    }

    @media screen and (max-width: 36rem){
        font-size: 1rem;
        &::placeholder{
        font-size: .8rem;
    }
    }
    }
 
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #6A9635;
    }
`

export default Search