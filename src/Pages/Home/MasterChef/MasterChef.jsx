import React, { useEffect, useState } from 'react';
import Cook from './Cook';
import Pagination from '../../Pagination/Pagination';

const MasterChef = () => {

    const [cooks, setCooks] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        fetch('https://restaurent-food-server.vercel.app/chef')
            .then(res => res.json())
            .then(data => setCooks(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = cooks.slice(firstPostIndex, lastPageIndex);

    return (
        <div className='md:max-w-7xl md:mx-auto mt-20 mx-5'>

            <div className='divider md:text-3xl my-20 text-[#E9B64B]'>Our Master Chef Receipe</div>

            <div className='grid md:grid-cols-3 gap-10'>
                {
                    currentPosts.map(cook => <Cook key={cook._id} cook={cook}></Cook>)
                }
            </div>

            <br />

            <Pagination
                totalPosts={cooks.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Pagination> <br />
        </div>
    );
};

export default MasterChef;