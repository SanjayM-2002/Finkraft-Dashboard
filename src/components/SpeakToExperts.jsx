import React from 'react';

const SpeakToExperts = () => {
  return (
    <>
      <div class='flex flex-col py-2 px-6 bg-gray-400 justify-center'>
        <div className='flex flex-col justify-center gap-4'>
          <div className='flex  justify-center'>
            <h3 className='text-black font-semibold  text-4xl'>
              Speak to our Experts
            </h3>
          </div>
          <div className='text-black font-normal text-lg italic flex  justify-center'>
            Every enterprise has unique challenges and requirements. Arrange a
            call to find out how we can help automate your specific accounting
            processes.
          </div>

          <div className='flex justify-center'>
            <button className='text-gray-300 font-normal bg-green-600 py-2 px-2 w-48'>
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakToExperts;
