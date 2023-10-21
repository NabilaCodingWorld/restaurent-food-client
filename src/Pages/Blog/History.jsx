import React from 'react';

const History = ({blog}) => {

    const {food, img, history} = blog;

    return (
        <div>
            <center>
                <p className='text-center text-2xl my-10 font-bold'>{food}</p>
                <img className='h-96 w-96 rounded-2xl mb-10' src={img} alt="" />

                <p className='text-xl md:mx-20 mx-5 text-gray-500'>{history}</p>
            </center> 
            <div className='divider md:mx-20 my-20'></div>
        </div>
    );
};

export default History;