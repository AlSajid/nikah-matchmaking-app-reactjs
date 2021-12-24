import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Profile from './Profile/Profile';

const Offer = () => {
  const [allProfile, setAllProfile] = useState([]);
  const { profile, serial } = useAuth();


  useEffect(() => {
    let interested;

    if (profile.sex === 'Female') {
      interested = 'Male';
    } else if (profile.sex === 'Male') {
      interested = 'Female';
    }

    const url = `https://eyafi.pythonanywhere.com/account/profile/?sex=${interested}`;


    fetch(url)
      .then(response => response.json())
      .then(data => setAllProfile(data))
      .catch(error => console.log(error));

  }, [profile]);




  return (
    <div className=''>
      {
        (serial >= allProfile.length) ?
          <div className='flex h-screen'>
            <div className='m-auto'>
              <h1 className='text-5xl text-gray-500 text-center tarunya object-center'>আজ আর নয়, পরবর্তীতে আবার চেষ্টা করুন!</h1>
            </div>
          </div>
          :
          allProfile.slice(serial, serial + 1).map(offer =>
            <Profile id={offer?.user} key={offer?.user}></Profile>
          )


      }
    </div >
  );
};

export default Offer;