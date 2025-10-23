import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const newUser = {
        firstname: firstname.trim(),
        lastname: lastname.trim(),
        email: email.trim(),
        password
      };
      if (!newUser.firstname || !newUser.lastname || !newUser.email || !newUser.password) {
        alert('All fields are required');
        setLoading(false);
        return;
      }

      console.log('📤 Sending data:', newUser);

      const response = await axios.post(
        'http://localhost:5000/user/register',
        newUser,
        { timeout: 10000 }
      );

      console.log('✅ Response received:', response);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        alert('🎉 Account created successfully!');
        navigate('/login');
      }
    } catch (error) {
      console.error('❌ Error:', error);

      if (error.response) {
        const errMsg =
          error.response.data.message ||
          (error.response.data.errors &&
            error.response.data.errors.map((e) => e.msg).join(', ')) ||
          'Registration failed';
        alert('Error: ' + errMsg);
      } else if (error.request) {
        alert(
          'Error: Cannot connect to server. Make sure backend is running on http://localhost:5000'
        );
      } else {
        alert('Error: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt="Logo"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              disabled={loading}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              disabled={loading}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            disabled={loading}
          />

          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
