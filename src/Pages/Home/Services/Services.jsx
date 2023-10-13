import React from 'react';

import icon1 from '../../../assets/icon_1.png'
import icon2 from '../../../assets/icon_2.png'
import icon3 from '../../../assets/icon_3.png'

const Services = () => {
    return (

        <div>
            <div className='grid md:grid-cols-3 gap-20 mx-auto max-w-7xl text-center mt-20'>
                    <div className='hover:bg-[#E9B64B] p-3 duration-700 rounded-2xl'>
                        <center><img src={icon1} alt="" /></center> <br />
                        <p className='text-2xl'>QUALITY  FOODS</p> <br />
                        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nobis aliquam nisi facere iste repellendus necessitatibus rem nesciunt vero, tempora, ex sapiente aperiam saepe quae, doloribus reprehenderit provident? Consectetur, dolor!</p>
                    </div>

                    <div className='hover:bg-[#E9B64B] p-3 duration-700 rounded-2xl'>
                        <center><img src={icon2} alt="" /></center> <br />
                        <p className='text-2xl'>QUALITY  FOODS</p> <br />
                        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nobis aliquam nisi facere iste repellendus necessitatibus rem nesciunt vero, tempora, ex sapiente aperiam saepe quae, doloribus reprehenderit provident? Consectetur, dolor!</p>
                    </div>

                    <div className='hover:bg-[#E9B64B] p-3 duration-700 rounded-2xl'>
                        <center><img src={icon3} alt="" /></center> <br />
                        <p className='text-2xl'>QUALITY  FOODS</p> <br />
                        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nobis aliquam nisi facere iste repellendus necessitatibus rem nesciunt vero, tempora, ex sapiente aperiam saepe quae, doloribus reprehenderit provident? Consectetur, dolor!</p>
                    </div>

                </div>
        </div>


    );
};

export default Services;