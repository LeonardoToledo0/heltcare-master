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
        expirationDate: string;
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

    const handleToggle = (postId: number) => {
        setExpandedPostId(expandedPostId === postId ? null : postId);
    };

    const formatExpirationDate = (expirationDate: string) => {
        const date = new Date(expirationDate);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const formattedTime = `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
        return { formattedDate, formattedTime };
    };

    return (
        <S.ArticleContainer>

            {posts.map(post => (
                <S.CardContainer key={post.id}>
                    <S.CardContentText>{post.attributes.titulo}</S.CardContentText>
                    <S.CardContentParagraph onClick={() => handleToggle(post.id)}>
                        {expandedPostId === post.id ? (
                            <>
                                {post.attributes.mensagem[0].children[0].text}
                            </>
                        ) : (
                            <>
                                {post.attributes.mensagem[0].children[0].text.slice(0, 50)}{" "}
                                {post.attributes.mensagem[0].children[0].text.length > 50 && (
                                    <S.ReadMoreButton>leia mais</S.ReadMoreButton>
                                )}
                            </>
                        )}
                    </S.CardContentParagraph>
                    <S.CardContentParagraph>Data de Expiração: {formatExpirationDate(post.attributes.expirationDate).formattedDate}</S.CardContentParagraph>
                    <S.CardContentParagraph>Hora: {formatExpirationDate(post.attributes.expirationDate).formattedTime}</S.CardContentParagraph>
                </S.CardContainer>
            ))}
        </S.ArticleContainer>
    );
};
