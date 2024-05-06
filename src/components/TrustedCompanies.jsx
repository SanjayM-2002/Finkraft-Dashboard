import React from 'react';

const TrustedCompanies = () => {
  const logos = [
    'airbnb.png',
    'citi.png',
    'disney.png',
    'fedex1.png',
    'ferrari.png',
    'hundai.png',
    'jeep.png',
    'luftansa1.png',
    'microsoft.png',
    'nikon1.png',
    'redhat.png',
    'volvo.png',
  ];
  return (
    <>
      <div className='bg-slate-300 py-8 flex justify-center'>
        <div className='flex flex-col justify-center'>
          <h3 className='font-semibold text-4xl'>
            Trusted by global leading brands
          </h3>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 m-2 px-6'>
            {logos.map((logo) => (
              <div key={logo}>
                <img className='w-16 h-16' src={logo} alt='carousel' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedCompanies;
