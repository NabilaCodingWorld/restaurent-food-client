import React, { useEffect, useState } from 'react';
import Review from './Review';
import Marquee from 'react-fast-marquee';


const ClientReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='flex gap-10'>
            <Marquee>
                {
                    reviews.map(reviewOne => <Review key={reviewOne._id} reviewOne={reviewOne}></Review>)
                }
            </Marquee>
        </div>
    );
};

export default ClientReview;