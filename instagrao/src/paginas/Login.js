import React, { useState } from 'react';

const LoginForm = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const manipulaLogin = () => {
    // Verificar se o nome de usuário e a senha são válidos (simplificado para este exemplo)
    if (nomeUsuario === 'usuario' && senha === 'senha123') {
      // Redirecionar para a página inicial após o login bem-sucedido
      // Você pode usar react-router-dom para navegação em uma aplicação React
      window.location.href = '/pagina-inicial';
    } else {
      setErrorMessage('Nome de usuário ou senha incorretos.');
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
      <p style={{ color: 'red' }}>{errorMessage}</p>
    </div>
  );
};

export default LoginForm;
