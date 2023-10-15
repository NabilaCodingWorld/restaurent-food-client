import React, { useEffect, useState } from 'react';
import Review from './Review';
import Marquee from 'react-fast-marquee';


const ClientReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div className='text-[#E9B64B] text-4xl divider my-20'>Review</div>
            <div className="hero" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/delicious-food-white-plate_144627-34705.jpg?w=740&t=st=1697279691~exp=1697280291~hmac=b5e13d7a8e86bc811eee2cac4efd98b72699944c671519fd525208588ca88a74)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content">
                    
                    <Marquee>
                        {
                            reviews.map(reviewOne => <Review key={reviewOne._id} reviewOne={reviewOne}></Review>)
                        }
                    </Marquee>

                </div>
            </div>
        </div>
    );
};

export default ClientReview;