import styled from "styled-components";
import Image1 from "../../assets/images/background.jpg";

export const SectionLogin = styled.section`
  height: 100vh; 
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
export const LoginContainer = styled.div`
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

`
export const InputLogin = styled.input`
 
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
export const ButtonLogin = styled.a`
margin-top: 20px;
padding: 0.4em 5em;
border: 1px solid #342c29;
background-color: #342c29;
color: white;
font-size: 1rem;
font-weight: 600;
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


