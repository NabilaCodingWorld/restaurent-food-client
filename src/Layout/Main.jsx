import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Share/Navbar/Navbar';
import Footer from '../Pages/Share/Footer/Footer';
import { FaSun } from 'react-icons/fa';

const Main = () => {


    return (

        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer />

        </div>

    );
};

export default Main;