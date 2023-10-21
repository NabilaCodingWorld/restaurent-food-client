import React from 'react';
import { FaQuoteLeft} from 'react-icons/fa';


const Review = ({reviewOne}) => {

    const {review, img, name, date} = reviewOne;

    return (
        <center className=' bg-opacity-50 hover:shadow-2xl rounded-2xl  md:p-10 p-3 md:w-80 w-60 bg-slate-300 '>
            <FaQuoteLeft className='text-center mb-5 md:h-12 md:w-12'></FaQuoteLeft>
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