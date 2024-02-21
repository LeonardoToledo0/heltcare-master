import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUserPlus, faBars, faUser, faSignOutAlt, faRss } from '@fortawesome/free-solid-svg-icons';
import * as S from './NavBarStyles';


interface ItemMenu {
    to: string;
    icon: any;
    label: string;
}

interface PropsMenu {
    mostrarMenu: boolean;
    setMostrarMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const itensDoMenu: ItemMenu[] = [
    { to: '/feed', icon: faRss, label: 'Feed' },
    { to: '/postagens', icon: faEdit, label: 'Postagens' },
    { to: '/login', icon: faUser, label: 'login' },
    { to: '/cadastro', icon: faUserPlus, label: 'cadastro' },
    { to: '/feed', icon: faSignOutAlt, label: 'sair' },
];

export const NavBar: React.FC<PropsMenu> = ({ mostrarMenu, setMostrarMenu }) => {

    const handleLogout = () => {

        localStorage.removeItem('token');

        window.location.href = '/cadastro';
    };

    return (
        <>
            <S.Container mostrarMenu={mostrarMenu}>
                <S.NavbarLinkText>Menu</S.NavbarLinkText>
                <S.NavbarLink2>
                    <S.NavbarIconLink to='/feed'>
                        <FontAwesomeIcon icon={faRss} />
                        Feeds
                    </S.NavbarIconLink>
                    <S.NavbarLink2>
                        <S.NavbarIconLink to='/postagens' >
                            <FontAwesomeIcon icon={faEdit} />
                            postagens
                        </S.NavbarIconLink>
                    </S.NavbarLink2>
                    <S.NavbarLink2>
                        <S.NavbarIconLink to='/login'>
                            <FontAwesomeIcon icon={faUser} />
                            Login
                        </S.NavbarIconLink>
                    </S.NavbarLink2>
                    <S.NavbarLink2>
                        <S.NavbarIconLink to='/cadastro'>
                            <FontAwesomeIcon icon={faUserPlus} />
                            Cadastro
                        </S.NavbarIconLink>
                    </S.NavbarLink2>
                    <S.NavbarLink2>
                        <S.NavbarIconLink to='/feed'>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Sair
                        </S.NavbarIconLink>
                    </S.NavbarLink2>
                </S.NavbarLink2>

            </S.Container>
            <S.Navbar>
                <S.NavbarEnd>
                    <S.NavbarUl>
                        {itensDoMenu.map((item, index) => (
                            <S.NavbarLi key={index}>
                                <S.NavbarIcon>
                                    <S.NavbarLink >
                                        <S.NavbarIconLink to={item.to} onClick={item.label === 'Logout' ? handleLogout : undefined}>
                                            <FontAwesomeIcon icon={item.icon} />
                                        </S.NavbarIconLink>
                                    </S.NavbarLink>
                                </S.NavbarIcon>
                            </S.NavbarLi>
                        ))}
                    </S.NavbarUl>
                </S.NavbarEnd>
            </S.Navbar>

            <S.Icon
                icon={faBars}
                onClick={() => setMostrarMenu(!mostrarMenu)} />
        </>
    );
};
