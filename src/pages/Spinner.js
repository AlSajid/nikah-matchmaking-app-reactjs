import React from 'react';

const Spinner = () => {
    const loader = {
        border: "5px solid #f3f3f3",
        borderRadius: "50%",
        borderTop: "5px solid #ff0000"
    }
    return (
        <div className='m-3'>
            <div style={loader} className='h-10 w-10 border-red-600 animate-spin mx-auto'></div>
        </div>
    );
};

export default Spinner;