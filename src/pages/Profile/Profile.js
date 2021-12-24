import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Profile = (props) => {
  const { user } = useAuth();
  const [thisUser, setThisUser] = useState({});
  const [thisProfile, setThisProfile] = useState({});
  const [visibility, setVisibility] = useState(false);
  console.log(visibility);


  useEffect(() => {
    fetch(`https://eyafi.pythonanywhere.com/account/profile/${props.id}`)
      .then(response => response.json())
      .then(data => setThisProfile(data))
      .catch(error => console.log(error));

    fetch(`https://eyafi.pythonanywhere.com/account/user/${props.id}`)
      .then(response => response.json())
      .then(data => setThisUser(data))
      .catch(error => console.log(error));
  }, [props.id])


  const url = thisProfile.image;
  const location = useLocation();
  const { serial, setSerial } = useAuth();

  const dp = {
    backgroundImage: `url(${url})`,
    backgroundPosition: "50% 0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
  };

  const like = () => {
    setSerial(serial + 1);
    localStorage.setItem("serial", serial + 1);

    const match = { who: user.id, toWhom: props.id, name: user.name };

    fetch('https://eyafi.pythonanywhere.com/account/matching/', {
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(match),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }


  const year = new Date().getFullYear();

  const age = String(year - parseInt(thisProfile?.dateOfBirth?.substring(0, 4)));



  return (
    <section className="" id="profile">
      <div className="container mx-auto h-screen">


        <div className=" container h-4/5">

          {/* image */}
          <div style={dp} className="container h-96 w-96 mx-auto relative" id="image">

            {
              (location.pathname === "/profile")
                ?
                <div className="text-center absolute bottom-0 left-0 right-0">
                  {/* <Link to="/update-profile">
                    <button className="border p-3 m-3 rounded shadow-lg hover:shadow-2xl bg-red-600 text-white text-xl">তথ্য সম্পাদন</button>
                  </Link> */}
                </div>
                :
                <div className="text-center absolute bottom-0 left-0 right-0">
                  <button
                    className="text-3xl text-white bg-green-600 p-3 m-3 rounded-full shadow-lg hover:shadow-2xl"
                    onClick={like}>
                    <FontAwesomeIcon icon="check-circle" />
                  </button>

                  <button className="text-3xl text-white bg-red-600 p-3 m-3 rounded-full shadow-lg hover:shadow-2xl"
                    onClick={() => { setSerial(serial + 1); localStorage.setItem("serial", serial + 1) }}>
                    <FontAwesomeIcon icon="times-circle" />
                  </button>
                </div>

            }
          </div>

          <div className="p-3 lg:w-1/2 mx-auto ">
            <div className="p-3 m-3 text-center">
              <h3 className="text-3xl"><b>{thisUser.name}</b></h3>
              <p className="m-3 text-lg">{thisProfile.bio}</p>
            </div>

            <div className=''>
              <div className='border-b-2 p-3'>
                <h6><b>বর্তমান ঠিকানাঃ</b> {thisProfile.present_address_district}, {thisProfile.present_address_division}</h6>
              </div>
              <div className='border-b-2 p-3'>
                <h6><b>শিক্ষাগত যোগ্যতাঃ </b> {thisProfile.educational_qualification}</h6>
              </div>
              <div className='border-b-2 p-3'>
                <h6><b>পেশাঃ</b> {thisProfile.profession}, {thisProfile.workplace}</h6>
              </div>
            </div>


            {
              (visibility === true) ?
                < div >
                  <div className='border-b-2 p-3'>
                    <h6><b>বয়সঃ</b> <span className='number text-xl'>{age}</span> বছর</h6>
                  </div>
                  <div className='border-b-2 p-3'>
                    <h6><b>উচ্চতাঃ</b>
                      <span className='number text-xl'> {parseInt(thisProfile.height / 12)}</span> ফুট
                      <span className='number text-xl'> {thisProfile.height % 12}</span> ইঞ্চি
                    </h6>
                  </div>
                  <div className='border-b-2 p-3'>
                    <h6><b>ওজনঃ</b> <span className='number text-xl'>{thisProfile.weight}</span> কেজি</h6>
                  </div>
                  <div className='border-b-2 p-3'>
                    <h6><b>ধর্মঃ</b> {thisProfile.religion}</h6>
                  </div>
                  <div className='border-b-2 p-3'>
                    <h6><b>বৈবাহিক অবস্থাঃ </b> {thisProfile.marital_status} </h6>
                  </div>
                  <div className='border-b-2 p-3'>
                    <h6><b>রক্তের গ্রুপঃ </b> {thisProfile.blood_group} </h6>
                  </div>


                  <div className='border-b-2 p-3'>
                    <h6><b>বার্ষিক আয়ঃ</b> {thisProfile.yearly_income} টাকা</h6>
                  </div>
                  <div className='border-b-2 p-3'>
                    <h6><b>গায়ের রঙঃ </b> {thisProfile.skin_tone}</h6>
                  </div>

                  <div className='border-b-2 p-3'>
                    <h6><b>স্থায়ী ঠিকানা</b> {thisProfile.permanent_address_district}, {thisProfile.permanent_address_division}</h6>
                  </div>
                </div>
                :
                <button className='p-1 my-3 w-full border-2 font-semibold shadow'
                  onClick={() => {setVisibility(true)}}>বিস্তারিত দেখুন</button>

            }
          </div>
        </div>
      </div>
    </section >
  );
};

export default Profile;