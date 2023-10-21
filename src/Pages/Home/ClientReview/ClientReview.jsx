import React, { useEffect, useState } from 'react';
import Review from './Review';
import Marquee from 'react-fast-marquee';


const ClientReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://restaurent-food-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div className='text-[#E9B64B] md:text-4xl divider my-20'>Review</div>
        
                        <div className='grid md:grid-cols-3 gap-10 md:mx-auto md:max-w-7xl mx-10'>
                        {
                            reviews.map(reviewOne => <Review key={reviewOne._id} reviewOne={reviewOne}></Review>)
                        }
                        </div>
                  

                </div>
           
    );
};

export default ClientReview;