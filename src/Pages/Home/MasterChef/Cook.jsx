import React from 'react';

const Cook = ({cook}) => {

    const {img, name, email} = cook;

    return (
        <div className='shadow-lg p-10 hover:shadow-2xl rounded-2xl'>
            <center>
            <img className='rounded-full h-60 w-60'  src={img} alt="" />

            <p className='text-2xl font-bold my-5'>{name}</p>
            <p className='text-xl mb-5'>{email}</p>

            <button className='btn btn-warning'> View Details </button>
            </center>
        </div>
    );
};

export default Cook;