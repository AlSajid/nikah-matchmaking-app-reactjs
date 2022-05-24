import React from 'react';

const Chat = () => {
  return (
    <div className='flex flex-row  w-full h-screen'>
      {/* header */}


      {/* conversations */}
      <div className='bg-red-300 w-1/4'>
        <h1>বার্তালাপ</h1>

        {/* conversation */}
        <div className='bg-blue-300 p-3 '>
          <h5>Jany Shine</h5>
          <p className='text-gray-600 p-3'>kire! ajk class e ashbi na?</p>
        </div>
      </div>

      {/* chat */}
      <div className='bg-red-200 w-3/4'>

        {/* chat header */}
        <div className='bg-green-200 p-3 shadow'>
          <h1 className='text-3xl font-bold'>জাকিয়া খানম</h1>
          <span className='text-green-900'>সক্রিয়</span>

        </div>

        {/* chat body */}
        <div>

          {/* self side message */}
          <div className='bg-green-200'>
            <p className='m-3 bg-red-600'>
              <span className='w-auto p-3 m-3 rounded bg bg-green-400'>
                Hello. What's up?
              </span>
              <span>১৩ মিনিট আগে</span>
            </p>
          </div>


          {/* other side message */}
          <div className='bg-green-200'>
            <p className='m-3 bg-red-600 '>
              <span className='w-auto p-3 rounded bg bg-green-400'>
                Hello. What's up?
              </span>
              
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Chat;