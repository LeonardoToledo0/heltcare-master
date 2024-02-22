import styled from "styled-components";


export const FooterGlobal = styled.footer`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin: 0 auto;
    color: black;
    position: fixed; /* Adiciona a propriedade position com o valor fixed */
    bottom: 0; /* Fixa o componente no rodapé */

    @media screen and (min-width: 768px) and (max-width: 100%) {
        max-width: 600px;
    }

    @media screen and (min-width: 768px) {
        flex-direction: column;
    }

    @media screen and (min-width: 420px) {
        text-align: center;
        align-items: center;
    }
`;

export const TopFooter = styled.footer`
margin-top: 30px;



`
export const LinkFooter = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
@media screen and (min-width: 420px) {
  grid-template-columns: 1fr;
}
`
export const BottomFooter = styled.footer`
padding: 20px 0;
justify-content: space-between;
@media screen and (min-width: 768px) and (max-width: 1920px) {
   font-size: 24px;
}
@media screen and (min-width: 768px) {
   gap: 16px;
   flex-direction: column-reverse;
}
@media screen and (min-width: 420px) {
   align-items: center;
}

`
export const LinkFooterDiv = styled.div`
display: grid;
gap: 10px;
margin-bottom: 30px;
`
export const LinkFooterTitle = styled.h2`
margin: 0;
font-size: 16px;
font-weight: 400px;
color: #f7f7f7;
`
export const LinkFooterlegal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 12px;
@media screen and (max-width: 768px){
    display: none;

}



`
export const LinkFooterText = styled.a`
margin: 0 4px;
`
export const IconsFooter = styled.span`
margin-right: 10px;
@media screen and (min-width: 420px) {
 display: block;
 margin-right: 0;
 margin-bottom: 2px;
}
`

export const LogoFooter = styled.img``



