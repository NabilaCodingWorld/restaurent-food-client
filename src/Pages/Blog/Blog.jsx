import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import History from './History';
import { Helmet } from 'react-helmet-async';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>

            <Helmet> <title>Foodie | Blog</title> </Helmet>

            <h1 className='border-b-4 py-10 text-center text-3xl font-bold bg-gray-300'>Food History</h1>

            <div>
                {
                    blogs.map(blog => <History key={blog._id} blog={blog} ></History>)
                }
            </div>
        </div>
    );
};

export default Blog;