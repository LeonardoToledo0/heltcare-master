import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Componetes/Login/Login';
import { Cadastro } from './Componetes/Cadastro/Cadastro';
import { Feed } from './Componetes/Feed/Feed';
import { Postagens } from './Componetes/Postagens /Postagens';
import { GlobalStyles } from './Componetes/GlobalStyles/StylesGlobal';
import { MenuNav } from './Componetes/NavBar/MenuNav';
import { TabNav } from './Componetes/NavBar/TabNav';




const Feeds = () => {
  return (
    <>
      <MenuNav />
      <Feed />
      <TabNav />
    </>
  )
}
const Post = () => {
  return (
    <>
      <MenuNav />
      <Postagens />
      <TabNav />
    </>
  )
}
const App: React.FC = () => {
  return (

    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feeds />} />
        <Route path="/postagens" element={<Post />} />
      </Routes>
    </Router>

  );
};

export default App;
