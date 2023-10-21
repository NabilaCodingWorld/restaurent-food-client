import React from 'react';
import gif from '../../../assets/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a7675645f79733541566b786e513d3d2d3732303532373938332e31353936323238376634.gif'

import gif2 from '../../../assets/icegif-948.gif'

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#000000] text-white text-xl">
                <aside>
                    <img className='w-40' src={gif} alt="" />
                    <p>Food World Ltd.<br />We start our Journey since 1997</p>
                </aside>
                <nav>
                    <header className="footer-title font-bold ">Services</header>
                    <a className="link link-hover hover:translate-x-2 duration-700"> <Link to="/">Home</Link> </a>

                    <a className="link link-hover hover:translate-x-2 duration-700"><Link to="/menu">Menu</Link></a>

                    <a className="link link-hover hover:translate-x-2 duration-700"><Link to="/blog">Blog</Link></a>

                    <a className="link link-hover hover:translate-x-2 duration-700"> <Link to="/shared">Share Receipe</Link> </a>
                </nav>
                <nav>
                <header className="footer-title">Contact</header>
                    <a className="link link-hover hover:translate-x-2 duration-700">karim@gmail.com</a>
                    <a className="link link-hover hover:translate-x-2 duration-700">salam@gmail.com</a>
                    <a className="link link-hover hover:translate-x-2 duration-700">+923891321</a>
                    <a className="link link-hover hover:translate-x-2 duration-700">+9304772811</a>
                </nav>
                <nav>
                    <img src={gif2} alt="" />
                </nav>
            </footer>
        </div>
    );
};

export default Footer;