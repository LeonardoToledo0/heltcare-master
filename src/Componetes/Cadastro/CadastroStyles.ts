import styled from "styled-components";
import Image1 from "../../assets/images/background.jpg";
import { Link } from 'react-router-dom';

export const SectionCadastro = styled.section`
  height: 100vh; 
  width: 100%;  
  background: url(${Image1}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
 
`
export const Container = styled.div`
max-width: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

`
export const CadastroContainer = styled.div`
  width: 1600px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.5);
  opacity: 2.8;
  backdrop-filter: blur(8px); 
`
export const ImageContainer = styled.div`
 width: 700px;
 height: 100vh;

`
export const ImageLogo = styled.img`
width: 200px;
height: 200px;
background-color: #f9f9f9;
border-radius: 8px;


`
export const InputCadastro = styled.input`
 
  border-bottom: 1px solid black;
  outline: none;
  padding: 0.6em 1em;
  letter-spacing: 2px;
  margin-top: 20px;
  border-radius: 8px;
  border: none;


  &::placeholder {
    color: black; 
  }

  &:focus {
    border-bottom: 3px solid black; 
  }
`;
export const ButtonCadastro = styled.a`
margin-top: 20px;
padding: 0.4em 4em;
border: 1px solid #342c29;
background-color: #342c29;
color: white;
font-weight: 600;
font-size: 1rem;
border-radius: 8px;
overflow: hidden;
cursor: pointer;
z-index: 1;
transition:0.3em;
overflow: hidden;
position: relative;
 &:hover{
    background-color: #00ae4d;
    border: 1px solid #00ae4d;
    color: #342c29;
    
 }
`
export const DivLogin = styled.div`
display: flex;
align-items: center;

`
export const TextIcon = styled.h2`
font-size: 20px;
margin-top: 20px;
font-weight: 400;
color: #00ae4d;
margin-right: 10px;
@media (max-width: 768px){
    margin-right: 0;
}

`
export const IconLogin = styled(Link)`
font-size: 20px;
color: #342c29;
align-self: center;
margin-left: 10px;
&:hover{
    color: #00ae4d;
    border-radius: 50%;
}
`
