import React, { useEffect, useState } from 'react';
import imgbg from '../../../assets/handrawn-barbecue-elements_125540-588.avif'
import Receipe from './Receipe';
import Pagination from '../../Pagination/Pagination';

const PublicReceipe = () => {

    const [receipes, setReceipes] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        fetch('public.json')
            .then(res => res.json())
            .then(data => setReceipes(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = receipes.slice(firstPostIndex, lastPageIndex);

    return (
        <div> <br />
            <div className="hero min-h-screen bg-fixed mt-20" style={{ backgroundImage: `url(${imgbg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className='grid md:grid-cols-3 gap-5 my-20 mx-auto max-w-7xl'>
                    {
                        currentPosts.map(receipe => <Receipe key={receipe._id} receipe={receipe}></Receipe>)
                    }
                </div>

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