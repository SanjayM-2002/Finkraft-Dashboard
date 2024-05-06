import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onPress }) => {
  const navigate = useNavigate();

  return (
    <>
      <div class='flex flex-row py-2 px-6 bg-gray-400 justify-center gap-16'>
        <div className='font-bold text-black text-4xl'>Welcome to Finkraft</div>
        <div className='flex justify-center'>
          <button
            className='text-gray-300 font-normal bg-green-600 py-2 px-2 w-48'
            onClick={onPress}
          >
            LOGIN PAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
