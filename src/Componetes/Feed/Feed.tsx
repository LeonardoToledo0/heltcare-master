import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './FeedStyles';

interface ApiResponse {
    data: Array<Post>;
}

interface Post {
    id: number;
    attributes: {
        titulo: string;
        mensagem: Array<{
            type: string;
            children: Array<{
                type: string;
                text: string;
            }>;
        }>;
        createdAt: string;
        updatedAt: string;
        expirationdate: string;
    };
}

export const Feed: React.FC = () => {
    const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
    const [posts, setPosts] = useState<Array<Post>>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ApiResponse>('https://different-diamond-5de42f9eba.strapiapp.com/api/posts');
                setPosts(response.data.data);
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
            }
        };

        fetchData();
    }, []);
    const formatExpirationDate = (expirationDate: string) => {
        try {
            const date = new Date(expirationDate);

            if (isNaN(date.getTime())) {
                throw new Error(`Data inválida: ${expirationDate}`);
            }

            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            const formattedTime = `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;

            return { formattedDate, formattedTime };
        } catch (error) {
            if (error instanceof Error && typeof error.message === 'string') {
                console.error('Erro ao formatar a data:', error.message);
            } else {
                console.error('Erro ao formatar a data:', error);
            }

            return { formattedDate: 'Data inválida', formattedTime: 'Hora inválida' };
        }
    };
    return (
        <S.ArticleContainer>
            {posts.map(post => {
                const { titulo, mensagem, expirationdate } = post.attributes;
                const formattedDateAndTime = expirationdate ? formatExpirationDate(expirationdate) : { formattedDate: 'Data inválida', formattedTime: 'Hora inválida' };

                return (
                    <S.CardContainer key={post.id}>
                        <S.CardBg></S.CardBg>
                        <S.CardBgText>
                            <S.CardContentText>{titulo}</S.CardContentText>
                            <S.CardContentParagraph onClick={() => setExpandedPostId(expandedPostId === post.id ? null : post.id)}>

                                {expandedPostId === post.id ? (
                                    <>
                                        {mensagem[0].children[0].text}
                                    </>
                                ) : (
                                    <>
                                        {mensagem[0].children[0].text.slice(0, 50)}{" "}
                                        {mensagem[0].children[0].text.length > 50 && (
                                            <S.ReadMoreButton>leia mais</S.ReadMoreButton>
                                        )}
                                    </>
                                )}
                            </S.CardContentParagraph>
                            <S.CardContentData>
                                Data de Expiração: {formattedDateAndTime.formattedDate}
                            </S.CardContentData>
                            <S.CardContentHora>
                                Hora: {formattedDateAndTime.formattedTime}
                            </S.CardContentHora>
                        </S.CardBgText>
                    </S.CardContainer>
                );
            })}
        </S.ArticleContainer>
    );
};
