import React from 'react';
import bgVideo from '../../../assets/pexels-taryn-elliott-7172273 (Original).mp4'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="cafeHouse">
                <video autoPlay loop muted className="video-background-cafeHouse">
                    <source src={bgVideo} type="video/mp4" />
                </video>

                <div className="cafeHouse-content">

                    <div className=' text-white'>
                        <p className='md:text-3xl'>Making People Happy</p>
                        <p className='md:text-5xl text-center text-2xl font-bold my-3'>Hungry World</p>
                       
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;