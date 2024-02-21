import React, { useState } from "react";
import * as S from './CadastroStyles';
import LogoImage from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const Cadastro: React.FC = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();

    const handleCadastro = async () => {
        try {
            const response = await fetch("https://different-diamond-5de42f9eba.strapiapp.com/api/auth/local/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: nome,
                    email,
                    password: senha,
                }),
            });

            const data = await response.json();

            if (response.ok) {

                setMensagem("Cadastro realizado com sucesso!");
                navigate('/login');
            } else {

                setMensagem(data.message || "Erro no cadastro.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            setMensagem("Erro ao cadastrar. Tente novamente mais tarde.");
        }
    };

    return (
        <S.SectionCadastro>
            <S.Container>
                <S.CadastroContainer>
                    <S.ImageLogo src={LogoImage} alt="Logo da sua aplicação" />
                    <S.InputCadastro
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <S.InputCadastro
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.InputCadastro
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <S.ButtonCadastro onClick={handleCadastro}>Cadastrar</S.ButtonCadastro>
                    <S.TextIcon>{mensagem}</S.TextIcon>
                    <S.DivLogin>
                        <S.TextIcon>
                            Já possui cadastro?
                            <S.IconLogin to='/login'>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </S.IconLogin>
                        </S.TextIcon>
                    </S.DivLogin>
                </S.CadastroContainer>
                <S.ImageContainer></S.ImageContainer>
            </S.Container>
        </S.SectionCadastro>
    );
};