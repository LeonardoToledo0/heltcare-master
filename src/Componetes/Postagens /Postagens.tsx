import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './PostagensStyles';

export const Postagens: React.FC = () => {
    const [titulo, setTitulo] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');
    const [expirationDateTime, setExpirationDateTime] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setError('Você não está autenticado. Faça login para continuar.');
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'titulo') {
            setTitulo(value);
        } else if (name === 'mensagem') {
            setMensagem(value);
        } else if (name === 'expirationDateTime') {
            setExpirationDateTime(value);
        }
    };

    const validateFields = () => {
        if (!titulo.trim() || !mensagem.trim() || !expirationDateTime.trim()) {
            setError('Os campos título, mensagem e data de expiração devem ser preenchidos.');
            return false;
        }

        return true;
    };
    const formatExpirationDate = (expirationDate: string) => {
        const date = new Date(expirationDate);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const formattedTime = `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
        return { formattedDate, formattedTime };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();


        const token = localStorage.getItem('token');


        if (!validateFields() || !token) {
            return;
        }

        try {

            const formattedDateTime = formatExpirationDate(expirationDateTime).formattedDate;



            const response = await axios.post('https://different-diamond-5de42f9eba.strapiapp.com/api/posts', {
                data: {
                    titulo: titulo,
                    mensagem: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: mensagem,
                                },
                            ],
                        },
                    ],
                    expirationDate: formattedDateTime,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Postagem criada com sucesso:', response);
            setTitulo('');
            setMensagem('');
            setExpirationDateTime('');
            setError(null);
        } catch (error: any) {
            console.error('Erro ao criar postagem:', error);

            if (error.response && error.response.status === 401) {
                setError('Você não está autenticado. Faça login para continuar.');
            } else {
                setError('Erro ao processar a requisição. Verifique a conexão ou tente novamente mais tarde.');
            }
        }
    };

    return (
        <S.Container>
            <S.Background></S.Background>
            <S.Card>
                <S.Text style={{ fontWeight: 700, fontSize: '2rem', color: '#00ae4d' }}>Postar</S.Text>

                <S.Text>Titulo</S.Text>
                <S.Inputs type="text" name='titulo' value={titulo} onChange={handleInputChange} />
                <S.Text>Mensagem</S.Text>
                <S.InputsMensagem name="mensagem" value={mensagem} onChange={handleInputChange} />
                <S.Text>Data de Expiração</S.Text>
                <S.Inputs type="datetime-local" name="expirationDateTime" value={expirationDateTime} onChange={handleInputChange} />
                <p>{error && <div style={{ color: 'red' }}>{error}</div>}</p>
                <S.Button onClick={handleSubmit}>Enviar</S.Button>
            </S.Card>
        </S.Container>
    );
};
