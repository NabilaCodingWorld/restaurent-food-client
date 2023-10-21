import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cook = ({cook}) => {

    const {img, name, email, _id} = cook;

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" className='shadow-lg md:p-10 p-2 hover:shadow-2xl rounded-2xl'>
            <center>
            <img className='rounded-full h-60 w-60'  src={img} alt="" />

            <p className='md:text-2xl font-bold my-5'>{name}</p>
            <p className='md:text-xl mb-5'>{email}</p>

            <Link to={`/chef/${_id}`}><button className='btn btn-outline btn-warning btn-sm'> View Details </button></Link>
            </center>
        </div>
    );
};

export default Cook;