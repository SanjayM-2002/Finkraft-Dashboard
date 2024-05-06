import React from 'react';

const AutomationInfo = () => {
  return (
    <>
      <div class='flex flex-col py-2 px-6 bg-gray-400 justify-center'>
        <div className='flex flex-col justify-center gap-4'>
          <div className='flex  justify-center'>
            <h3 className='text-black font-semibold  text-4xl'>
              Finkraft process automation benefits
            </h3>
          </div>
          <div className=' flex flex-row justify-between px-32 gap-2'>
            <div className='flex flex-col border-2 border-black py-2 px-2 bg-white'>
              <div className='text-black font-bold text-2xl'>
                Maximize Savings
              </div>
              <div className='text-black font-normal text-lg italic'>
                Achieve up to 100% eligible Input Tax claims with our automated
                invoice processing and exception handling suite
              </div>
            </div>

            <div className='flex flex-col border-2 border-black py-2 px-2 bg-white'>
              <div className='text-black font-bold text-2xl'>
                Automated Compliance
              </div>
              <div className='text-black font-normal text-lg italic'>
                Automate financial compliances involving AP processes including
                reconciliatons and document verification and validation
              </div>
            </div>

            <div className='flex flex-col border-2 border-black py-2 px-2 bg-white'>
              <div className='text-black font-bold text-2xl'>
                Actionable Insights
              </div>
              <div className='text-black font-normal text-lg italic'>
                Finkraft's solutions empower finance, procurement and sales
                leaders with critical insights required for identifying
                high-risk vendors and buyers making timely interventionss
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomationInfo;
