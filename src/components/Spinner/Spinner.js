import React from 'react';
import spinner from './Spinner.gif'

const Spinner = () => {
    return (
        <div className="container my-3 p-3 text-center">
            <div className="">
                <img className="mx-auto my-3" src={spinner} alt="spinner" />
                <p className="fw-bold">Loading...</p>
            </div>
        </div>
    );
};

export default Spinner;