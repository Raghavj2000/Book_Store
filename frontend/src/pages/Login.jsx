import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, like calling your API for login
    console.log({ username, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-sky-400 to-sky-600">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-sky-800">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
              placeholder="Enter your username" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
              placeholder="Enter your password" 
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Don't have an account? 
            <button 
              onClick={() => navigate('/register')}
              className="text-sky-600 hover:text-sky-700 font-medium ml-2">
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
