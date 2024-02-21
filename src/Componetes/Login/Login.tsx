import React, { useState } from "react";
import * as S from './LoginStyles';
import LogoImage from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const setAuthToken = (token: string) => {
        localStorage.setItem("token", token);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: email,
                    password: password,
                }),
            });

            const data = await response.json();



            if (response.ok) {
                console.log('Login bem-sucedido');

                // Armazene o token no localStorage
                setAuthToken(data?.jwt);

                // Navegue para a página de feed
                navigate('/feed');
            } else {
                console.error('Falha no login:', data.message || 'Erro desconhecido');
            }
        } catch (error) {
            console.error('Erro ao tentar fazer login:', error);
        }
    };

    return (
        <S.SectionLogin>
            <S.Container>
                <S.LoginContainer>
                    <S.ImageLogo src={LogoImage} alt="Logo da sua aplicação" />
                    <S.InputLogin
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.InputLogin
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <S.ButtonLogin onClick={handleLogin}>Entrar</S.ButtonLogin>
                </S.LoginContainer>
                <S.ImageContainer></S.ImageContainer>
            </S.Container>
        </S.SectionLogin>
    );
};
