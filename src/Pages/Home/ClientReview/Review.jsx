import React from 'react';
import { FaQuoteLeft} from 'react-icons/fa';


const Review = ({reviewOne}) => {

    const {review, img, name, date} = reviewOne;

    return (
        <center className='shadow-xl hover:shadow-2xl mt-20 p-10 w-80 ml-10'>
            <FaQuoteLeft className='text-center mb-5 h-12 w-12'></FaQuoteLeft>
            <p>{review}</p> <br />
            
            <div className='flex items-center justify-center gap-5'>
                <center><img className='w-20 rounded-full h-20' src={img} alt="" /></center>

                <div>
                    <p>{name}</p>
                    <p>{date}</p>

                </div> 
            </div> 

        </center>
    );
};

export default Review;