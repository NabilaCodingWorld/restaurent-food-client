import React from 'react';
import { Link } from 'react-router-dom';

const Receipe = ({ receipe }) => {

    const { img, name, description, ingredient, _id } = receipe;

    // Define a maximum character limit for the description
    const maxDescriptionLength = 130;

    // Truncate the description if it exceeds the maximum length
    const truncatedDescription = description.length > maxDescriptionLength
        ? description.slice(0, maxDescriptionLength) + '...' // Add ellipsis
        : description;

    return (
        <div>

            <div className='bg-white p-10 bg-opacity-50 rounded-2xl'>
                <p className='text-center text-3xl mb-4 font-bold'>{name}</p>
                <div className="group inline-block overflow-hidden relative">
                    <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img} alt="" />
                </div>

                <p className='my-5 md:text-xl text-sm  bg-white p-5 bg-opacity-50 rounded-2xl'>{truncatedDescription} <span className='text-blue-600'> <Link to={`/mouseHouseDetail/${_id}`}> See More </Link> </span> </p>
            </div>

        </div>
    );
};

export default Receipe;