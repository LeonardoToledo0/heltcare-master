import React from "react";
import * as S from './FooterStyles'


export const Footer: React.FC = () => {
    return (
        <>
            <S.FooterGlobal>
                <S.TopFooter>
                    <S.LogoFooter />
                    <S.LinkFooter>
                        <S.LinkFooterDiv>
                            <S.LinkFooterTitle></S.LinkFooterTitle>
                            <S.LinkFooterText></S.LinkFooterText>
                        </S.LinkFooterDiv>
                        <S.LinkFooterDiv>
                            <S.LinkFooterTitle></S.LinkFooterTitle>
                            <S.LinkFooterText></S.LinkFooterText>
                        </S.LinkFooterDiv>
                    </S.LinkFooter>
                    <S.BottomFooter>
                        <S.LinkFooterlegal>
                            <S.IconsFooter>&copy; 2024  Todos os direitos reservados.</S.IconsFooter>
                            <S.LinkFooterText>Lisense</S.LinkFooterText>
                        </S.LinkFooterlegal>
                    </S.BottomFooter>
                </S.TopFooter>
            </S.FooterGlobal>
        </>
    )
}