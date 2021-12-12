import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user, profile } = useAuth();
    console.log(user, profile);
    const location = useLocation();
    const url = profile.image;
    const dp = {
        backgroundImage: `url(${url})`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
    };


    return (
        <section className="bg-gray-100 p-5 h-screen" id="profile">
            <Header></Header>
            <div className="container mx-auto h-full mt-16">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 container ">
                    <div style={dp} className="container shadow h-full bg-red-900" id="image">

                    </div>
                    <div className="shadow">
                        <div className="p-3 self-center bg-white w-full">
                            <div className="p-3 m-3">
                                <h3 className="text-3xl"><b>{user.name}</b></h3>
                                <p className="m-3 text-lg">{profile.bio}</p>
                            </div>
                            <div className="p-3 my-3 rounded-3xl text-white ">
                                <div className="m-3 px-5 py-3  rounded-full   bg-gray-900 border inline-block">
                                    <p>{profile.blood_group}</p>
                                </div>
                                <div className="m-3 px-5 py-3 rounded-full bg-yellow-900 border inline-block">
                                    <p>{profile.workplace}</p>
                                </div>
                                <div className="m-3 px-5 py-3 rounded-full bg-green-900 border inline-block ">
                                    <p>{profile.religion}</p>
                                </div>
                                <div className="m-3 px-5 py-3 rounded-full bg-blue-900 border inline-block">
                                    <p>{profile.skin_tone}</p>
                                </div>
                                <div className="m-3 p-3">
                                    <p className="text-xl font-bold">

                                        <span className="text-yellow-500 block p-1">
                                            জেলা {profile.present_address_district},
                                            <br />
                                            বিভাগ {profile.present_address_division}</span>
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* {
                        (location === "profile")
                            ?
                            <div className="text-center p-3 bg-red-900 w-full">
                                <Link to="/edit-profile">
                                    <button className="border p-3 m-3 rounded shadow-lg hover:shadow-2xl bg-red-600 text-white text-xl">তথ্য সম্পাদন</button>
                                </Link>
                            </div>
                            :
                            <div className="text-center p-3">
                                <button className="border p-3 m-3 rounded shadow-lg hover:shadow-2xl bg-red-900 text-white text-xl">ভালো লেগেছে</button>

                                <button className="border p-3 m-3 rounded shadow-lg hover:shadow-2xl bg-gray-900 text-white text-xl">পরবর্তী জন</button>
                            </div>

                    } */}

                </div>
            </div>
        </section >
    );
};

export default Profile;