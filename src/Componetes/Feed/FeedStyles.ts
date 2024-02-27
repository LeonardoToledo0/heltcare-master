import styled from "styled-components";

export const ArticleContainer = styled.article`
max-width: 1200px;
margin: 10% auto;
@media screen and (max-width: 1370px) and (min-width: 1000px) {
    margin-left: 20%;
    align-items: center;
    width: 70%;
     
    }



`
export const CardContainer = styled.div`
margin: 0 auto;
width: 70%;
height: 30vh;
display: flex;
@media screen and (max-width: 1370px) and (min-width: 1000px) {
    width: 90%;
    height: auto;
     
    }
    @media screen and (max-width: 580px){
    width: 90%;
    height: auto;
  
   
}
`
export const CardBg = styled.div`
width: 10%;
height: auto;
background-color: #00ae4d;
border-radius: 8px 0px 0px 8px;

`
export const CardBgText = styled.div`
width: 100%;
height: auto;
background: #ccc;
border-radius: 0px 8px 8px 0px;

`
export const CardContentText = styled.h2`
text-align: start;
font-size: 2rem;
margin: 20px 20px;
@media screen and (max-width: 1000px){
    text-align: center;
    
}
@media screen and (max-width: 580px){
    font-size: 1.2rem;
}
`
export const CardContentParagraph = styled.p`
text-align: start;
font-size: 1rem;
margin: 40px 20px;
@media screen and (max-width: 1000px){
    text-align: center;
}
@media screen and (max-width: 580px){
    font-size: 0.85rem;
}
`
export const CardContentData = styled.p`
text-align: end;
font-size: 0.95rem;
margin: 10px 20px;
@media screen and (max-width: 1000px){
    text-align: end;
    }
    @media screen and (max-width: 580px){
    text-align: end;
    font-size: 0.65rem;
}
`
export const CardContentHora = styled.p`
text-align: end;
font-size: 0.95rem;
margin: 10px 20px;
@media screen and (max-width: 1000px){
    text-align: end;
    
}
@media screen and (max-width: 580px){
    text-align: end;
    font-size: 0.65rem;
}
`
export const ReadMoreButton = styled.span`
cursor: pointer;
color: #00ae4d;
margin: 10px;
@media screen and (max-width: 580px){
    font-size: 0.75rem;
}
`








