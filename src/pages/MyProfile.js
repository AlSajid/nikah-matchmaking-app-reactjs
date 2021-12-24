import React from 'react';
import Header from '../components/Header/Header';
import useAuth from '../hooks/useAuth';
import Profile from './Profile/Profile';

const MyProfile = () => {
    const { user } = useAuth();   

    return (
        <div>
            <Header></Header>
            <Profile id={user.id}></Profile>
        </div>
    );
};

export default MyProfile;