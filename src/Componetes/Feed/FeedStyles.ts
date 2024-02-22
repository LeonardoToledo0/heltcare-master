import styled from "styled-components";

export const ArticleContainer = styled.article`
max-width: 100%;
display: grid;
place-items: center;
margin: 0;
height: 100%;
margin-top: 12rem;
margin-bottom: 100px;
color: #342c29;

    
`
export const CardContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
width: 75vw;
max-width: 650px;
padding: 50px 30px 50px 20px ;
background-color: #121017;
border-radius: 24px;
margin-bottom: 100px;
@media (max-width: 768px){
    margin: 0 40px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 60px;
    width: 75%;
    text-align: center;
    flex-direction: column;
    margin-bottom: 140px;
    text-align: center;
}
`
export const CardBoxImage = styled.div``
export const CardContent = styled.div``
export const CardImageContent = styled.img`
max-width:280px;
width: 35vw;
height: 300px;
object-fit: cover;
margin-left: -60px;
margin-right: 30px;
border-radius: inherit;
box-shadow: 0 60px 40px rgb(0 0 0/8%);
@media (max-width: 768px){
    margin: -100px 0 30px 0;
    width: 100%;
    max-width: 1000px;
}
@media (max-width: 540px){
    height: 45vw;
    width: 45vw;
    border-radius: 50%;
    margin-top: -140px  ;

}

`
export const ReadMoreButton = styled.span`
display: grid;
place-items: center;
border: 0;
color: #00ae4d;
font-size: 16px;
border-radius: 40px;
max-width: 100px;
align-self: flex-end;
margin-top: 10px;
`;

export const CardContentText = styled.h2`
font-size: 2rem;
font-weight: 700;
color: #00ae4d;
margin-top: 0;
margin-right: 30px;
margin-bottom: 10px;
@media (max-width: 768px){
    margin-right: 0;
}
`

export const CardContentParagraph = styled.p`
display: flex;
flex-direction: column;
font-size: 1rem;
line-height: 1em;
text-align: justify;
color: white;
font-weight: 400;
margin-bottom: 30px;
@media (max-width: 768px){
    max-width: 200px;
    text-align: center;
}
`





