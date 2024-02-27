
import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const HeaderNav = styled.header`
@media screen and (max-width: 1000px){
  display: none;

}

`
export const Sidebar = styled.aside`
position: fixed;
top: 0;
left: 0;
display: flex;
flex-direction: column;
width: 200px;
height: 100%;
padding: 40px 10px 30px 10px;
background-color:  #342c29;
box-shadow: 1px 1px 1px 2px #00ae4d;
z-index: 10;
@media screen and (max-width: 580px) {
     width: 72px;
    }

`
export const SidebarHeader = styled.header`
width: 100%;
margin-bottom: 16px;
`
export const ImageHeader = styled.img`

width: 70%;
margin: 0 15%;
background-color: #f9f9f9;
border-radius: 8px;
@media screen and (max-width: 580px) {
    max-width: 70px;
    margin: 0 auto;
   
    }


`
export const SidebarNav = styled.nav`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SidebarUl = styled.ul`
list-style: none;
height: 60px;
border: 0;
padding: 0;
font-family: inherit;
color: inherit;
cursor: pointer;
text-align: center;
`
export const SidebarLi = styled.li``
export const SidebarA = styled(NavLink)`
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  gap: 12px;
  height: 48px;
  padding: 0 10px 0 12px;
  border-radius: 8px;
  line-height: 1;
  margin-top: 20px;
  color: #f9f9f9;
  &:hover {
    background:#00ae4d;
    width: 160px;
  }
`


