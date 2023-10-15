import React, { useEffect, useState } from 'react';
import imgbg from '../../../assets/handrawn-barbecue-elements_125540-588.avif'
import Receipe from './Receipe';
import Pagination from '../../Pagination/Pagination';

const PublicReceipe = () => {

    const [receipes, setReceipes] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    useEffect(() => {
        fetch('http://localhost:5000/sharedReceipeAll')
            .then(res => res.json())
            .then(data => setReceipes(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = receipes.slice(firstPostIndex, lastPageIndex);

    return (
        <div> <br /> <br /> 
            <div className='divider my-20 text-3xl mx-auto max-w-7xl text-[#E9B64B]'>User Shared Receipe</div>

                <div className='grid md:grid-cols-3 gap-5 my-20 mx-auto max-w-7xl'>
                    {
                        currentPosts.map(receipe => <Receipe key={receipe._id} receipe={receipe}></Receipe>)
                    }
                </div> 

            <Pagination
                totalPosts={receipes.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Pagination> <br />
        </div>
    );
};

export default PublicReceipe;


