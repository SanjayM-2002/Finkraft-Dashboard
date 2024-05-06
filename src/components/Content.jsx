import React from 'react';

const Content = () => {
  return (
    <>
      <div class='text-gray-600 body-font py-2 px-6 bg-black'>
        <div className='flex flex-col my-2 justify-start mx-8 w-96 gap-4'>
          <h3 className='pt-40 mb-1 text-xl font-semibold tracking-tighter text-center text-gray-200 lg:text-5xl md:text-4xl'>
            $25m in annual savings extracted from unstructured data. Imagine how
            much money are you losing ?
          </h3>

          <h5 className='mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3 italic'>
            Learn how Finkraft solved travel linked GST Input challenges for the
            world’s 6th largest IT services firm
          </h5>

          <button className='text-gray-300 font-normal bg-green-600 py-2 px-2'>
            VIEW CASE STUDY
          </button>
        </div>

        <br></br>
      </div>
    </>
  );
};

export default Content;
