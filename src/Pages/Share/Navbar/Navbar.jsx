import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut, updateProfileData } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    };

    const renderAvatar = () => {
        if (user) {
            return (
                <div className="avatar">
                    <div className="w-12 md:ml-40 ml-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} title={user.displayName} alt={user.displayName} />
                    </div>
                </div>
            );
        }

    }

    const navOption = <>
        <Link to="/"> <li><a className='hover:text-white'>Home</a></li> </Link>

        <Link to="/menu"><li><a className='hover:text-white'>Menu</a></li> </Link> 

        <Link to="/blog"><li><a className='hover:text-white'>Blog</a></li></Link> 



        {
            user ?
                <>
                    <Link to="/shared"> <li><a className='hover:text-white'>Share Receipe</a></li> </Link> 

                    <li><button onClick={handleLogOut}><a className='hover:text-white'>Log Out</a></button></li>
                </>
                : <Link to="/login"> <li><a className='hover:text-white'>Log In</a></li> </Link> 
        }

    </>

    return (
        <div>
            <div className="navbar bg-[#000000] text-xl font-bold text-white">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">

                            {navOption}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Foodie</a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end mr-5">
                    {user && (
                        <div >
                            {renderAvatar()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;