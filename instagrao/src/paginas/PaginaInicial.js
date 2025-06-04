import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PaginaInicial = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Bem-vindo à Página Inicial do Instagrão!</h1>
      {user && <p>Usuário logado: {user.username}</p>}
      <button onClick={logout}>Sair</button>
      {/* Conteúdo da sua página inicial */}
    </div>
  );
};

export default PaginaInicial;

