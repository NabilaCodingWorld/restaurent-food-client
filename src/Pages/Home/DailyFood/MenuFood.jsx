import React from 'react';
import FoodItem from './FoodItem';

const MenuFood = ({items}) => {


    return (
        <div className='grid md:grid-cols-2'>
            {
                items.map(item => <FoodItem key={item._id} item={item}></FoodItem> )
            } <br />
        </div>
    );
};

export default MenuFood;