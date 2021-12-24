import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Offer from '../Offer';


const Base = () => {
  const { user, logout, interest } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="w-1/4 fixed top-0 left-0 bottom-0">
        <div className="text-center bg-red-600 text-white">
          <h1 className="p-3 text-3xl tarunya">নিকাহ</h1>
        </div>

        {/* profile */}

        <button
          className="font-bold p-3 w-full rounded text-xl border-b-2 shadow border-red-600"
          onClick={() => { navigate("/profile") }}>
          <FontAwesomeIcon icon="user-circle" /> {user.name}
        </button>

        <button
          className=" p-3 w-full rounded text-xl border-b-2 shadow border-red-600"
          onClick={() => { navigate("/search") }}>
          <FontAwesomeIcon icon="search" /> খুঁজুন
        </button>

        <button
          className=" p-3 w-full rounded text-xl border-b-2 shadow border-red-600"
          onClick={() => { navigate("/interested") }}>
          <FontAwesomeIcon icon="grin-hearts" /> আগ্রহী <span className='number font-semibold text-2xl text-red-600'>({interest.length})</span>
        </button>

        <button
          className="border-b-2 shadow border-red-600 p-3 w-full rounded text-xl"
          onClick={() => logout()}>
          <FontAwesomeIcon icon="sign-out-alt" /> প্রস্থান
        </button>

      </div>

      <div className='w-full flex'>
        <div className='w-1/4'></div>
        <div className='w-3/4'>
          <Offer></Offer>
        </div>
      </div>



    </div>
  );
};

export default Base;