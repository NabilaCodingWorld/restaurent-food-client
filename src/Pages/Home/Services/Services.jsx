import React, { useEffect } from 'react';

import icon1 from '../../../assets/icon_1.png'
import icon2 from '../../../assets/icon_2.png'
import icon3 from '../../../assets/icon_3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (

        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            <div className='grid md:grid-cols-3 gap-20 mx-auto max-w-7xl text-center mt-20'>
                    <div className='hover:bg-[#E9B64B] p-3 duration-700 rounded-2xl'>
                        <center><img src={icon1} alt="" /></center> <br />
                        <p className='md:text-2xl text-sm'>QUALITY  FOODS</p> <br />
                        <p className='md:text-xl text-sm md:w-full w-60 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nobis aliquam nisi facere iste repellendus necessitatibus rem nesciunt vero, tempora, ex sapiente aperiam saepe quae, doloribus reprehenderit provident? Consectetur, dolor!</p>
                    </div>

                    <div className='hover:bg-[#E9B64B] p-3 duration-700 rounded-2xl'>
                        <center><img src={icon1} alt="" /></center> <br />
                        <p className='md:text-2xl text-sm'>QUALITY  FOODS</p> <br />
                        <p className='md:text-xl text-sm md:w-full w-60 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nobis aliquam nisi facere iste repellendus necessitatibus rem nesciunt vero, tempora, ex sapiente aperiam saepe quae, doloribus reprehenderit provident? Consectetur, dolor!</p>
                    </div>

                    <div className='hover:bg-[#E9B64B] p-3 duration-700 rounded-2xl'>
                        <center><img src={icon1} alt="" /></center> <br />
                        <p className='md:text-2xl text-sm'>QUALITY  FOODS</p> <br />
                        <p className='md:text-xl text-sm md:w-full w-60 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nobis aliquam nisi facere iste repellendus necessitatibus rem nesciunt vero, tempora, ex sapiente aperiam saepe quae, doloribus reprehenderit provident? Consectetur, dolor!</p>
                    </div>

                </div>
        </div>


    );
};

export default Services;