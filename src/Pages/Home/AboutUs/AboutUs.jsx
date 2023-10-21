import React, { useEffect } from 'react';
import photo from '../../../assets/restaurant-interior_1127-3394.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div className='my-20 grid md:grid-cols-2 gap-20 justify-center items-center mx-auto max-w-7xl overflow-hidden'>

            <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="2000" className="group inline-block overflow-hidden relative">
                <img className="md:h-80 md:w-full w-[90%] ml-5 transition-transform transform group-hover:scale-110" src={photo} alt="" />
            </div>

            <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="2000" className='text-center'>
                <div className='divider md:text-2xl mx-5 text-[#E9B64B]'> About Us </div>
                <p className='md:text-4xl font-bold my-3'>Welcome To  Restaurent</p>
                <p className='md:text-xl mx-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate obcaecati impedit corporis blanditiis neque iure, distinctio libero voluptate rerum fuga, adipisci inventore eius sunt quas praesentium quo vitae deserunt. Aspernatur.</p>

                <div className='flex gap-10 mx-5'>
                    <p className='md:text-2xl my-5 border-l-4 border-[#E9B64B] '> <span className='text-[#E9B64B] ml-2'>10 YEARS</span> Experience </p>

                    <p className='md:text-2xl my-5 border-l-4 border-[#E9B64B]'> <span className='text-[#E9B64B] ml-2'>50 Popular </span> Master Chef </p>

                </div>

                <Link to="/learn"><button className='btn btn-warning text-white mt-3'>Learn More</button></Link>
            </div>
        </div>
    );
};

export default AboutUs;