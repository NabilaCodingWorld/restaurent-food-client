import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChefDetail = () => {

    const chef = useLoaderData();

    const { img, name, email, first_receipe, second_receipe, third_receipe, img1, img2, img3, description1, description2, description3 } = chef;
    
    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (


        <div > <br />
            <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='text-center text-4xl my-16'>{name}</p>

            <center data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
                <div className="group inline-block overflow-hidden relative">
                    <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img} alt="" />
                </div>
                <p className='text-xl text-gray-500 mb-20'>{email}</p>

            </center>


            {/* first receipe */}

            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='text-4xl text-center my-10'>Chicken Carry</div>

            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='grid md:grid-cols-2 mx-auto max-w-7xl gap-10 justify-center items-center border-4 p-10 rounded-2xl hover:shadow-2xl'>
                <div className="group inline-block overflow-hidden relative">
                    <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img1} alt="" />
                </div>

                <div className='text-center'>
                    <p className='text-4xl mb-4'>{first_receipe}</p>
                    <p className='text-xl'>{description1}</p>
                </div>
            </div>

            {/* second receipe */}

            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='text-4xl text-center my-10'>Chicken Carry</div>

            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='grid md:grid-cols-2 mx-auto max-w-7xl gap-10 justify-center items-center border-4 p-10 rounded-2xl hover:shadow-2xl'>
                <div className="group inline-block overflow-hidden relative">
                    <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img2} alt="" />
                </div>

                <div className='text-center'>
                    <p className='text-4xl mb-4'>{second_receipe}</p>
                    <p className='text-xl'>{description2}</p>
                </div>
            </div>

            {/* third receipe */}

            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='text-4xl text-center my-10'>Chicken Carry</div>

            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='grid md:grid-cols-2 mx-auto max-w-7xl gap-10 justify-center items-center border-4 p-10 rounded-2xl hover:shadow-2xl'>
                <div className="group inline-block overflow-hidden relative">
                    <img className="h-80 w-full transition-transform transform group-hover:scale-110" src={img3} alt="" />
                </div>

                <div className='text-center'>
                    <p className='text-4xl mb-4'>{third_receipe}</p>
                    <p className='text-xl'>{description3}</p>
                </div>
            </div> <br />

            <center data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000"><Link to="/"><button className='btn btn-warning'>Back To Home</button></Link></center>

             <br />


        </div>
    );
};

export default ChefDetail;