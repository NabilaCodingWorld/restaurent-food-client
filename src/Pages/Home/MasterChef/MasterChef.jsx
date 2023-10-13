import React, { useEffect, useState } from 'react';
import Cook from './Cook';

const MasterChef = () => {

    const [cooks, setCooks] = useState([]);

    useEffect(()=>{
        fetch('chef.json')
        .then(res => res.json())
        .then(data => setCooks(data))
    }, [])

    return (
        <div className='grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20'>
            {
                cooks.map(cook => <Cook key={cook._id} cook={cook}></Cook>)
            } <br />
        </div>
    );
};

export default MasterChef;