import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import Pagination from '../Pagination/Pagination';
import { Helmet } from 'react-helmet-async';

const Menu = () => {

    const [menus, setMenus] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    useEffect(() => {
        fetch('https://restaurent-food-server.vercel.app/menu')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://restaurent-food-server.vercel.app/menuSearch/${searchText}`)
            .then((res) => res.json())
            .then((data) => setMenus(data))
            .catch((error) => console.error('Error:', error));
    };


    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = menus.slice(firstPostIndex, lastPageIndex);

    return (
        <div>

            <Helmet> <title>Foodie | Menu</title> </Helmet>

            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1697276983~exp=1697277583~hmac=dda46716375dcb8706790ba403da3e74200623438080f8ce4524ebe2fc9214f0)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 md:text-5xl font-bold">MENU</h1>
                        
                        <div className="relative text-gray-600">
                            <input
                                onChange={(e) => setSearchText(e.target.value)}
                                className="border-2 border-gray-300 bg-white md:h-10 md:px-5 md:pr-10 rounded-lg text-sm focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search..."
                            />
                            <button onClick={handleSearch} className="absolute right-0 top-0  md:-mr-24 -mr-8 btn btn-warning btn-sm">
                                Search
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='divider md:mx-20 mx-5 md:text-4xl text-[#E9B64B] my-20'>Menu</div>

            <div className='mx-5 md:mx-auto md:max-w-7xl '>
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