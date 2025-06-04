//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from './paginas/Login';
import PaginaInicial from './paginas/PaginaInicial';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/pagina-inicial" element={<PaginaInicial />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );

};

export default App;
