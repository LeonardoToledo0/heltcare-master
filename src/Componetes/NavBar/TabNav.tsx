import React from "react";
import * as S from "./TabNavStyles"
import { useNavigate } from "react-router-dom";
import { faPlus, faRss, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const TabNav: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <>
            <S.Section>
                <S.TabSection>
                    <S.TabDiv>
                        <S.TabLink to="/feed">
                            <S.TabIcon icon={faRss} />
                        </S.TabLink>
                        <S.TabText>Feed</S.TabText>
                    </S.TabDiv>
                    <S.TabDiv>
                        <S.TabLink to="/postagens">
                            <S.TabIcon icon={faPlus} />
                        </S.TabLink>
                        <S.TabText>Post</S.TabText>
                    </S.TabDiv>
                    <S.TabDiv>
                        <S.TabLink to="/login" onClick={handleLogout}>

                            <S.TabIcon icon={faSignOutAlt} />
                        </S.TabLink>
                        <S.TabText>Sair</S.TabText>
                    </S.TabDiv>
                </S.TabSection>
            </S.Section>


        </>
    )
}
