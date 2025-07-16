import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import './LoginSignup.css';

const LoginSignup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {
      const match = users.find(
        (u) => u.email === form.email && u.password === form.password
      );
      if (match) {
        login();
        navigate('/');
      } else {
        alert('Invalid credentials!');
      }
    } else {
      const exists = users.find((u) => u.email === form.email);
      if (exists) {
        alert('User already exists!');
      } else {
        users.push(form);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful!');
        setIsLogin(true);
        setForm({ email: '', password: '' });
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>

          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="switch-btn"
            >
              {isLogin ? 'Signup' : 'Login'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
