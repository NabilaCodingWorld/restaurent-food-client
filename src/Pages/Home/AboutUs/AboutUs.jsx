import React from 'react';
import photo from '../../../assets/restaurant-interior_1127-3394.jpg'

const AboutUs = () => {
    return (
        <div className='my-20 grid md:grid-cols-2 gap-20 justify-center items-center mx-auto max-w-7xl'>

            <div className="group inline-block overflow-hidden relative">
                <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={photo} alt="" />
            </div>

            <div className='text-center'>
                <div className='divider text-2xl text-[#E9B64B]'> About Us </div>
                <p className='text-4xl font-bold my-3'>Welcome To  Restaurent</p>
                <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate obcaecati impedit corporis blanditiis neque iure, distinctio libero voluptate rerum fuga, adipisci inventore eius sunt quas praesentium quo vitae deserunt. Aspernatur.</p>

                <div className='flex gap-10'>
                    <p className='text-2xl my-5 border-l-4 border-[#E9B64B] '> <span className='text-[#E9B64B] ml-2'>10 YEARS</span> Experience </p>

                    <p className='text-2xl my-5 border-l-4 border-[#E9B64B]'> <span className='text-[#E9B64B] ml-2'>50 Popular </span> Master Chef </p>

                </div>

                <button className='btn btn-warning text-white mt-3'>Learn More</button>
            </div>
        </div>
    );
};

export default AboutUs;