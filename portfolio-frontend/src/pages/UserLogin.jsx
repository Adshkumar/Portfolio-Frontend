import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginData = { email, password };

      console.log('📤 Sending login data:', loginData);

      const response = await axios.post(
        'http://localhost:5000/user/login',
        loginData
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        navigate('/projects'); 
      }
    } catch (error) {
      console.error('❌ Login error:', error);
      alert(
        'Login failed: ' +
          (error.response?.data?.message ||
            error.response?.data?.errors?.map((e) => e.msg).join(', ') ||
            error.message)
      );
    } finally {
      setLoading(false);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        {/* <img
          className="w-16 mb-10 mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt="Logo"
        /> */}

        <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-4 rounded-lg px-4 py-2 w-full"
            disabled={loading}
          />

          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 w-full"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className="text-center mt-4">
            New here?{' '}
            <Link to="/signup" className="text-blue-600 underline">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
