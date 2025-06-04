import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LoginForm = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login, register } = useContext(AuthContext);

  const manipulaLogin = () => {
    const sucesso = login(nomeUsuario, senha);
    if (sucesso) {
      navigate('/pagina-inicial');
    } else {
      setErrorMessage('Nome de usuário ou senha incorretos.');
    }
  };

  const manipulaRegistro = () => {
    const registrado = register(nomeUsuario, senha);
    if (registrado) {
      navigate('/pagina-inicial');
    } else {
      setErrorMessage('Usuário já existente.');
    }
  };

  return (
    <div className="login-container">
      <h2>Instagrão</h2>
      <input
        type="text"
        placeholder="Nome de usuário"
        value={nomeUsuario}
        onChange={(e) => setNomeUsuario(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha de usuário"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button onClick={manipulaLogin}>Entrar</button>
      <button onClick={manipulaRegistro}>Registrar</button>
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </div>
  );
};

export default LoginForm;
