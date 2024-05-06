import React from 'react';

const Partners = () => {
  const logos = [
    'luftansa1.png',
    'microsoft.png',
    'nikon1.png',
    'redhat.png',
    'volvo.png',
  ];
  return (
    <>
      <div class='text-gray-600 body-font py-2 px-6 bg-black'>
        <div className='flex flex-col justify-center gap-4'>
          <div className='flex justify-center'>
            <h3 className='text-white font-semibold text-3xl'>Our Partners</h3>
          </div>
          <div className='flex-row flex justify-around'>
            {logos.map((logo) => (
              <div
                key={logo}
                className='bg-black  my-2 justify-between border-2 border-white p-6'
              >
                <img className='w-16 h-16' src={logo} alt='carousel' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
