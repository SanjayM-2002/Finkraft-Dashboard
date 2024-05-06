import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import PrimaryButton from '../components/PrimaryButton';
import { useRecoilState } from 'recoil';
import { userAtom } from '../store/atoms/userAtom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const [userData, setUserData] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = () => {
    console.log('formdata is: ', formData);
    setUserData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
    });
    localStorage.setItem('firstName', formData.firstName);
    navigate('/home');
  };
  return (
    <>
      <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
          <div className='bg-yellow-200 w-96 pt-2 pb-2 pl-2 pr-2 mt-2 mb-2 ml-2 mr-2 rounded-md flex flex-col justify-center'>
            <Heading label={'Login Page'} />
            <SubHeading
              label={'Enter following information to login to dashboard'}
            />
            <InputBox
              label={'First Name'}
              placeholder={'John'}
              name={'firstName'}
              onChange={handleInput}
              value={formData.firstName}
            />
            <InputBox
              label={'Last Name'}
              placeholder={'Doe'}
              name={'lastName'}
              onChange={handleInput}
              value={formData.lastName}
            />
            <InputBox
              label={'Username'}
              placeholder={'johndoe'}
              name={'username'}
              onChange={handleInput}
              value={formData.username}
            />
            <InputBox
              label={'Password'}
              placeholder={'JohnDoe123'}
              name={'password'}
              onChange={handleInput}
              value={formData.password}
            />
            <PrimaryButton label={'Login'} onClick={submitForm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
