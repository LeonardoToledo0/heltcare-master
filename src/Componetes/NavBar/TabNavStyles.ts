import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 999px){
  display: none;

}
  
`;

export const TabSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 90%;
  height: 70px;
  background: #342c29;
  border-radius: 30px;
  bottom: 5px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TabDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const TabLink = styled(NavLink)`
text-decoration: none;
color: #f9f9f9;
&:hover {
    color:#00ae4d;
    
  }
`
export const TabIcon = styled(FontAwesomeIcon)`
font-size: 24px;
`
export const TabText = styled.p`
text-align: center;
font-size: 12px;
color: #f9f9f9;


`