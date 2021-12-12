import React from 'react';
import useAuth from '../../hooks/useAuth';
import Profile from '../Profile/Profile';

const Base = () => {
    const { user } = useAuth();
    return (
        <div className="flex">
            <div className="w-1/4 shadow">
                <div className="text-center">
                    <button className="border p-3 my-3 w-5/6 rounded text-xl">{user.displayName}</button>
                </div>
                <div className="text-center">
                    <button className="border p-3 my-3 w-5/6 rounded text-xl">Search</button>
                </div>
                <div className="text-center">
                    <button className="border p-3 my-3 w-1/2 rounded bg-red-600 text-white text-xl">Profile</button>
                </div>
                <div className="text-center">
                    <button className="border p-3 my-3 w-1/2 rounded bg-red-600 text-white text-xl">Logout</button>
                </div>
            </div>
            <div className="w-3/4">
                <Profile></Profile>
            </div>

        </div>
    );
};

export default Base;