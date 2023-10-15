import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuItem = ({ menu }) => {
    const { name, image, recipe, category, price } = menu;

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='my-20'> <br /> <br />
            <div className='grid md:grid-cols-2 gap-10 justify-center items-center'>
                <div className="group inline-block overflow-hidden relative">
                    <img className="md:h-80 w-full transition-transform transform group-hover:scale-110" src={image} alt="" />

                </div>

                <div >
                    <p className='text-2xl my-4 font-bold'>{name}</p>
                    <p className='my-4 font-bold '>{recipe}</p>
                    <p className='text-2xl my-4 font-bold text-[#E9B64B]'>{category}</p>

                    <p className='text-xl text-[#E9B64B]'>${price}</p> <br />
                </div> <br />

            </div>

            <div className='divider'></div> <br />

        </div>
    );
};

export default MenuItem;