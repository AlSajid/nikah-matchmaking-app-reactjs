import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const { logged, logout } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-600">
      <div className=" mx-auto  bg-opacity-95 h-14 grid grid-cols-2">

        {/* header icon/left portion */}
        <div className=" text-white p-3">
          <Link to="/">
            <h1 className=" text-3xl tarunya">নিকাহ</h1>
          </Link>
        </div>

        {/* header right portion */}
        <div className="p-3 text-right text-lg">
          {
            (logged.access) ?
              <button onClick={logout} className="bg-white px-3 py-1 rounded-md text-red-600 font-semibold">প্রস্থান</button>
              :
              < Link to="/signin">
                <button className="bg-white px-3 py-1 rounded-md text-red-600 font-semibold">প্রবেশ</button>
              </Link>

          }

        </div>

      </div >
    </div >
  );
};

export default Header;