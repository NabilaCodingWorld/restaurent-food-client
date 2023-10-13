import React from 'react';

const FoodItem = ({ item }) => {

    const { name, recipe, price, image } = item;

    return (
        <div className='grid md:grid-cols-2 gap-10 justify-center items-center my-2'>
            <div className='grid md:grid-cols-2 gap-10 justify-center items-center'>

                <div className="group inline-block overflow-hidden relative">
                    <img className="w-full transition-transform transform group-hover:scale-110" src={image} alt="" />
                </div>

                <div>
                    <p className='text-xl font-bold my-2'>{name}</p>
                    <p>{recipe}</p>
                </div>
            </div>
            <p className='text-2xl font-bold text-[#E9B64B]'>${price}</p>
        </div>
    );
};

export default FoodItem;