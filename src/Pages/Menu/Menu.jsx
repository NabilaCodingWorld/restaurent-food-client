import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import Cover from './Cover';
import Pagination from '../Pagination/Pagination';

const Menu = () => {

    const [menus, setMenus] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => setMenus(data))
    }, [])

    
    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = menus.slice(firstPostIndex, lastPageIndex);

    return (
        <div>
            <Cover></Cover>

            <div className='divider mx-20 text-4xl text-[#E9B64B] my-20'>Menu</div>
            
            <div className=' mx-auto max-w-7xl '>
                {
                    currentPosts.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
            </div> <br />

            <Pagination
                totalPosts={menus.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Pagination> <br />

        </div>
    );
};

export default Menu;