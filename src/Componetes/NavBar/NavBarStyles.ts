import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface ContainerProps {
    mostrarMenu: boolean;
}



export const Navbar = styled.header`
max-width: 1200px;
margin: 0 auto;
z-index: 1;
@media screen and (max-width:991px) {
 display: none;
}
`
export const NavbarEnd = styled.nav`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 50px;


`
export const NavbarUl = styled.ul`
width: 60%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;


`
export const NavbarLi = styled.li`
list-style: none;
  


`
export const NavbarLink = styled.a`
font-size: 25px;
color: #342c29;
&:hover{
    
    color: #00ae4d;
    border-radius: 50%;
}
`
export const NavbarIconLink = styled(Link)`
text-align: center;
text-decoration: none;
font-size: 1.7rem;
color: #342c29;
&:hover{
    
    color: #00ae4d;
    border-radius: 50%;
}

`
export const NavbarIcon = styled.div``
export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.mostrarMenu ? "-130px" : "-350px")};
  width: 350px;
  height: 100vh;
  background-color: white;
  color:#00ae4d;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  z-index: 1;

  transition: 0.5s;
`;
export const NavbarLink2 = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: column;
margin-top: 100px;
gap: 10px;

`
export const NavbarLinkText = styled.h1`
font-size: 2.5rem;
text-align: start;

`
export const Icon = styled(FontAwesomeIcon)`
font-size: 1.7rem;
margin: 35px 35px;
@media screen and (min-width:991px) {
 display: none;
 
}

`
