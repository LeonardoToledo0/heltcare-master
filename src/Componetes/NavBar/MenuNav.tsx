import React from "react";
import Logo from '../../assets/images/logo.png'
import { useNavigate } from "react-router-dom";
import * as S from "./MenuNavStyles";

export const MenuNav: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <S.HeaderNav>
            <S.Sidebar>
                <S.SidebarHeader>
                    <S.ImageHeader src={Logo} />
                </S.SidebarHeader>

                <S.SidebarNav>
                    <S.SidebarUl>
                        <S.SidebarLi>
                            <S.SidebarA to='/feed'>Feed</S.SidebarA>
                        </S.SidebarLi>
                        <S.SidebarLi>
                            <S.SidebarA to='/postagens'>Post</S.SidebarA>
                        </S.SidebarLi>
                        <S.SidebarLi>
                            <S.SidebarA to='/login' onClick={handleLogout}>
                                Sair
                            </S.SidebarA>
                        </S.SidebarLi>
                    </S.SidebarUl>
                </S.SidebarNav>
            </S.Sidebar>
        </S.HeaderNav>
    );
};
