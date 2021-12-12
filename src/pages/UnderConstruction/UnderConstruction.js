import React from 'react';
import Header from '../../components/Header/Header';
import { useLocation, useNavigate } from 'react-router';

const UnderConstruction = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const redirectURL = location.state?.from || '/';

    function back() {
        navigate(redirectURL);
    }

    return (
        <div className="h-screen">
            <Header></Header>
            <div className="border-red-600 container mx-auto border-8 w-3/4 mt-20 p-5 text-center text-3xl">
                ওয়েবসাইটের এই অংশটি নির্মাণাধীন রয়েছে।
                <br />
                শীঘ্রই ব্যবহারকারিদের জন্য উন্মুক্ত করা হবে।
                <br />
                <span className="text-red-600 py-3 cursor-pointer" onClick={back}>ফিরে যান</span>
            </div>
        </div>
    );
};

export default UnderConstruction;