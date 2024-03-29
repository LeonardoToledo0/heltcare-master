import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Container = styled.section`
 display: grid;
 place-items: center;
 margin: 7rem auto;
 padding: 0 32px;
 overflow: hidden;

 
 @media screen and (min-width: 500px) {
    height: 80vh;
    width: 70%;
    overflow: hidden;

}
@media screen and (max-width:1100px) {
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
display: grid;
place-items: center;
max-width: 45rem;
overflow: hidden;
position: relative;
width: 100%;
margin: 0 20px;
padding: 40px 30px 54px;
border-radius: 1.25rem;
background: #fff;
text-align: center;
box-shadow: 1px 1px 1px 3px rgb(0, 0, 0, 0.1);;
& ::before{
    content: '';
    position: absolute;
    top: 800px;
    left: 50%;
   translate: -50% 0 ;
    width: 1000px;
    height: 800px;
    border-radius: 50%;
    background: #216ce7;
    @media screen and (max-width: 500px) {
        width: 80%;
        height: auto;
        align-items: center;
 
}
@media screen and (max-width:768px) {
    width: 80%;
    height: auto;
   margin: 0 auto;
}
@media screen and (min-width: 768px) and (max-width: 1100px) {
  margin-left: 20%;
}

}
`
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
@media screen and (max-width: 500px) {
        width: 80%;
        height: auto;
        align-items: center;}

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
@media screen and (max-width: 500px) {
        width: 80%;
        height: auto;
        align-items: center;}



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
@media screen and (max-width: 500px) {
        width: 80%;
        height: 80px;
        align-items: center;}
`
export const Button = styled.p`
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
