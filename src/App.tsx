import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Login } from './Componetes/Login/Login';
import { Cadastro } from './Componetes/Cadastro/Cadastro';
import { Feed } from './Componetes/Feed/Feed';
import { Postagens } from './Componetes/Postagens /Postagens';
import { GlobalStyles } from './Componetes/GlobalStyles/StylesGlobal';
import { Footer } from '../src/Componetes/Footer/Footer'
import { NavBar } from './Componetes/NavBar/NavBar';





const PagesPostagens = () => {
  const [mostrarMenu, setMostrarMenu] = useState<boolean>(false);
  return (
    <>
      <NavBar mostrarMenu={mostrarMenu} setMostrarMenu={setMostrarMenu} />
      <Postagens />
      <Footer />
    </>
  );
};

const PagesFeeds = () => {
  const [mostrarMenu, setMostrarMenu] = useState<boolean>(false);
  return (
    <>
      <NavBar mostrarMenu={mostrarMenu} setMostrarMenu={setMostrarMenu} />
      <Feed />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (

    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<PagesFeeds />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<PagesFeeds />} />
        <Route path="/postagens" element={<PagesPostagens />} />
      </Routes>
    </Router>

  );
};

export default App;
