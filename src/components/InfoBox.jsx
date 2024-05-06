import React from 'react';

const InfoBox = () => {
  return (
    <>
      <div class='flex flex-row py-2 px-6 bg-gray-400 justify-center'>
        <div className=' flex flex-col justify-center gap-4'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-black font-semibold  text-4xl'>
              Automate complex accounting processes and reduce costs
            </h3>
          </div>

          <div className='flex flex-col justify-center'>
            <h3 className='text-black font-normal w-96 text-2xl italic'>
              Finkraft helps enterprises achieve invoice data extraction &
              validation, and GST input claim compliances at scale. Poor
              compliance with invoice handling processes are the single largest
              driver of tax disputes and litigation for Indian enterprises. Our
              cutting-edge tech solutions aid finance teams to automate
              compliance critical processes delivering immediate monetary saving
              and long-term compliance safeguards.
            </h3>
          </div>
          <div className='flex flex-row justify-center border-black border-2 w-96'>
            <h2 className='text-4xl text-black font-extrabold w-32'>15 %</h2>
            <h3 className='text-lg text-black font-semibold w-64'>
              of India’s largest corporations use Finkraft GST & Recon solutions
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
