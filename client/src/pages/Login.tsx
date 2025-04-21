
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('https://underbelle-backend.onrender.com/api/auth/login', {
        email: emailOrUsername,
        password
      });

      // Store token based on rememberMe
      if (rememberMe) {
        localStorage.setItem('token', res.data.token);
      } else {
        sessionStorage.setItem('token', res.data.token);
      }

      login(res.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      console.error(err);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center mb-10 text-white text-center">
        <h3 className="text-3xl">Welcome Back</h3>
      </div>

      <div className="flex flex-col items-center justify-center text-white text-center">
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or Email..."
            className="w-full px-4 py-2 rounded text-black bg-white"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            className="w-full px-4 py-2 rounded text-black bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center space-x-2 text-left text-white">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-5 h-5 accent-[var(--color-secondary)]"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-[var(--color-accent)] text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        {error && <p className="mt-4 text-red-400">{error}</p>}
      </div>
    </MainLayout>
  );
};

export default Login;
