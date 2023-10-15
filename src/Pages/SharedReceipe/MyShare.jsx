import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyShare = ({ myShare, handleDeleteShare }) => {

    const { email, photo, name, description,
        ingredient, _id } = myShare;

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-5 justify-center items-center'>

                <center>
                    <p className='text-center text-2xl my-5 '>Food Name: {name} </p>
                    <img src={photo} alt="" />
                    <p className='text-gray-400 my-3'>{email}</p>
                </center>

                <div className='text-center'>
                    <div className='divider text-[#E9B64B] text-3xl my-10 font-bold'>Description</div>
                    <p className='text-xl mb-10'> {description}</p> <br />

                    <div className='divider text-[#E9B64B] text-3xl my-10 font-bold'>Ingredient</div>
                    <p p className='text-xl '> {ingredient}</p>

                    <div className='flex gap-5 mt-10 text-center'>

                        <Link to={`updateShare/${_id}`}><FaEdit className='text-[#E9B64B] h-8 w-8'></FaEdit></Link>

                        <FaTrashAlt onClick={() => handleDeleteShare(_id)}  className='text-red-600 h-8 w-8'></FaTrashAlt>
                    </div>
                </div>

            </div>
            <div className='divider my-20'></div>
        </div>
    );
};

export default MyShare;