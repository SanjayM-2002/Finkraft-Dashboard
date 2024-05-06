import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import Content from '../components/Content';
import TrustedCompanies from '../components/TrustedCompanies';
import Partners from '../components/Partners';
import InfoBox from '../components/InfoBox';
import AutomationInfo from '../components/AutomationInfo';
import SpeakToExperts from '../components/SpeakToExperts';
import Header from '../components/Header';

const LandingPage = () => {
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate('/login');
  };
  return (
    <>
      <div className=' bg-slate-200'>
        <Header onPress={onClickLogin} />
        <Content />
        <TrustedCompanies />
        <Partners />
        <InfoBox />
        <AutomationInfo />
        <SpeakToExperts />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
