import React, { useEffect, useState } from 'react';

const MiniProfile = (props) => {
    const [miniProfile, setMiniProfile] = useState({});

    useEffect(() => {
        fetch(`https://eyafi.pythonanywhere.com/account/profile/${props.user.id}`)
            .then(response => response.json())
            .then(data => setMiniProfile(data))
            .catch(error => console.log(error));
    }, [props.user.id]);

    const url = miniProfile.image;

    const dp = {
        backgroundImage: `url(${url})`,
        backgroundPosition: "0% 0%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
    };

    return (
        <div className='shadow w-64 h-96 inline-block m-3'>
            <div style={dp} className="container h-60 w-60 mx-auto" id="image">
            </div>
            <div className="p-3 m-3 text-center">
                <h3 className="text-xl"><b>{props.user.name}</b></h3>
                <p className="m-3 text-sm">{miniProfile.bio}</p>
            </div>


        </div>
    );
};

export default MiniProfile;