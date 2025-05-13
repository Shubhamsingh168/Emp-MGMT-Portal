import React from 'react';

const Header = (props) => {
  const logOutUser = () => {
    // Clear user info from localStorage
    localStorage.removeItem('loggedInUser');
    props.changeUser(''); // Clear user state in parent
  };
  

  return (
    <div className='flex items-end justify-between px-6 py-4 bg-black text-white'>
      <div>
        <h1 className='text-2xl font-medium'>
          Hello, {props.userData?.firstName || 'User😎'}!
        </h1>
        <p className='text-sm text-gray-400'>
          Welcome back! Here's your dashboard for {new Date().toLocaleDateString()}.
        </p>
      </div>

      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-red-700'
      >
        Log out
      </button>
    </div>
  );
};

export default Header;