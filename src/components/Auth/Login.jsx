import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin( email, password );
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>
        <div className='relative p-8 rounded-2xl shadow-2xl backdrop-blur-md bg-white/10 border border-emerald-500 w-full max-w-md animate-fadeIn'>
          <h2 className='text-3xl font-extrabold text-center text-emerald-400 mb-6 tracking-wide animate-pulse'>
            Welcome Back
          </h2>

        <form onSubmit={submitHandler} className='flex flex-col gap-5'>
            

            {/* Email Field */}
            <div className='relative'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Email'
                className='w-full py-2.5 px-5 rounded-full bg-black bg-opacity-30 border border-emerald-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300'
              />
            </div>

            {/* Password Field */}
            <div className='relative'>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Password'
                className='w-full py-2.5 px-5 rounded-full bg-black bg-opacity-30 border border-emerald-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300'
              />
            </div>

            {/* Login Button */}
            <button
              type='submit'
              className='w-full py-3 mt-4 bg-emerald-600 hover:bg-emerald-600 text-white font-semibold rounded-full transition duration-300 shadow-lg hover:scale-105 transform hover:shadow-emerald-500/50'
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1deg); }
        }

        .animate-tilt {
          animation: tilt 4s infinite ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </>
  );
};

export default Login;
