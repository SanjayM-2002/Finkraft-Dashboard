import React from 'react';
import Heading from '../components/Heading';

const LoginPage = () => {
  return (
    <>
      <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
          <div className='bg-yellow-200 w-96 pt-2 pb-2 pl-2 pr-2 mt-2 mb-2 ml-2 mr-2 rounded-md flex flex-col justify-center'>
            <Heading label={'Login Page'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
