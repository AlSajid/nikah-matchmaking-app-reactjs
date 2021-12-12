import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import bghome from './images/1.jpg';

const Home = () => {

    const bgimg = {
        backgroundImage: `url(${bghome})`,
        backgroundPosition: "60% 20%",
        backgroundSize: "auto auto",
        backgroundRepeat: "no-repeat"
    };

    return (
        <div>
            <Header></Header>

            {/* top section */}
            <div style={bgimg} className="h-screen mx-auto p-5">

                {/* banner */}
                <div className="mx-auto container text-white " >

                    {/* banner title */}
                    <div className="my-20 lg:w-1/2 md:w-full">
                        <span className="text-3xl my-5">খুঁজে নিন আপনার পছন্দের জীবন সঙ্গীকে</span>
                    </div>

                    {/* quotation form quran */}
                    <div>
                        <span className="py-16">তোমরা বিয়ে কর নারীদের মধ্যে, যাকে তোমাদের ভাল লাগে
                            <br />- সূরা নিসা, আয়াত ৩</span>
                    </div>

                    {/* account creation button */}
                    <div className="m-12">
                        <Link to="/signup">
                            <button className="bg-white rounded-md text-red-600 font-semibold my-3 px-3 py-3 shadow-lg hover:shadow-2xl">
                                শুরু করুন এখনই
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            {/* services */}

            {/* <Footer></Footer> */}

        </div>

    );
};

export default Home;