import Header from '../components/Header/Header';
import useAuth from '../hooks/useAuth';
import MiniProfile from './MiniProfile';

const Interested = () => {
  const { interest } = useAuth();


  return (
    <div className='bg-slate-300'>
      <Header></Header>

      <div className='container mx-auto my-3 bg-white'>
        <div className='py-3 my-3 '>
          <h1 className='text-red-600  text-3xl  tarunya'>আপনাকে যারা পছন্দ করেছে</h1>

        </div>
        <hr />
        <div className='flex flex-row flex-wrap'>
          {
            (interest.length === 0) ?
              <h1 className='text-xl text-gray-500 text-center'>কোথাও কেউ নেই</h1>
              :
              interest.map(crush => {
                const love = { id: crush.who, name: crush.name };
                return < MiniProfile user={love} ></MiniProfile>
              })
          }
        </div>
      </div>

    </div >
  );
};

export default Interested;