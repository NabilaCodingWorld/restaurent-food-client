import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FoodItem = ({ item }) => {

    const { name, recipe, price, image } = item;

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" className='grid md:grid-cols-2 md:gap-10  gap-2 justify-center items-center my-2'>
            <div className='grid md:grid-cols-2 md:gap-10 gap-3 justify-center items-center'>

                <div className="group inline-block overflow-hidden relative">
                    <img className="md:w-full w-40 transition-transform transform group-hover:scale-110" src={image} alt="" />
                </div>

                <div>
                    <p className='md:text-xl text-sm font-bold my-2'>{name}</p>
                    <p className='text-sm md:w-full w-40'>{recipe}</p>
                </div>
            </div>
            <p className='md:text-2xl text-sm font-bold text-[#E9B64B]'>${price}</p> <br />
        </div>
    );
};

export default FoodItem;