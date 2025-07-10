// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <div style={{ padding: '20px' }}> {/* Tambahkan padding untuk memberi ruang */}
      <header>
        <h1>Azura Platform</h1>
        <nav>
          <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<LoginPage />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;￼Enter
