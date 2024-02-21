import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Container = styled.section`
 display: grid;
 place-items: center;
 margin: 0 auto;
 padding: 0 32px;
 overflow: hidden;

 
 @media screen and (min-width: 500px) {
    height: 80vh;
    max-width: 100%;
    overflow: hidden;

}
@media screen and (max-width:991px) {
margin-top: 50px;

}


`
export const Background = styled.div`
position: fixed;
top: -70vmin;
left: -50vmin;
width: 100vmin;
height: 100vmin;
border-radius: 47% 53% 61% / 45% 51% 49% 55%;
background: #02632d;
z-index: -3;
&::after{
    content: '';
    position: inherit;
    right: -50vmin;
    bottom: -70vmin;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: #342c29;
    z-index: -9999 !important ;


}
`
export const Card = styled.div`
  margin-top: 46.75px; /* 55 * 0.85 */
  display: grid;
  place-items: center;
  max-width: 34rem; /* 40 * 0.85 */
  overflow: hidden;
  position: relative;
  width: 85%; /* 100 * 0.85 */
  margin: 0 17px; /* 20 * 0.85 */
  padding: 59.5px 25.5px 45.9px; /* 70 * 0.85, 30 * 0.85, 54 * 0.85 */
  border-radius: 1.0625rem; /* 1.25 * 0.85 */
  background: #fff;
  text-align: center;
  box-shadow: 0.85px 0.85px 0.85px 2.55px rgb(0, 0, 0, 0.1); /* 1px * 0.85, 3px * 0.85 */
  &::before {
    content: '';
    position: absolute;
    top: 722.5px; /* 850 * 0.85 */
    left: 42.5%; /* 50% * 0.85 */
    translate: -42.5% 0; /* translate: -50% 0; */
    width: 850px; /* 1000 * 0.85 */
    height: 850px; /* 1000 * 0.85 */
    border-radius: 42.5%; /* 50% * 0.85 */
    background: #216ce7;
    @media screen and (min-width: 500px) {
      margin: 0;
      width: 306px; /* 360 * 0.85 */
    }
    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }
  }
`;
export const Text = styled.h2`
font-size: 1.2rem;
font-weight: 700;
margin-top: 15px;
color: #2a3444;
`
export const Form = styled.form`
display: grid;
gap: 16px;
margin: 0 0 36px;
`
export const Inputs = styled.input`
width: 70%;
height: 4em;
border-radius: 28px;
border: 2px solid #ebebeb;
font-size: 16px;
color: black;
margin-top: 20px;
text-align: center;



`
export const InputsMensagem = styled.input`
width: 70%;
height: 13em;
text-align: center;
border-radius: 28px;
border: 2px solid #ebebeb;
font-size: 16px;
color: black;
margin-top: 20px;
`
export const Button = styled.a`
margin-top: 10px;
padding: 1em 3em;
border-radius: 28px;
cursor: pointer;
background: #342c29;
color: #f9f9f9;
border: 0;
font-family: inherit;
font-size: 1rem;
font-weight: 600;
text-align: center;
letter-spacing: 2px;
transition: all 0.375s;
&:hover{
    background-color: #00ae4d;
    border: 1px solid #00ae4d;
    color: #342c29;
    
 }

`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
font-size: 4rem;
color: #342c29;
align-self: flex-start;
&:hover{
    
    color: #00ae4d;
    
}
`
