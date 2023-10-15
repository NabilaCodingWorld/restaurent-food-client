import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../provider/AuthProvider';

const BookedTable = ({ booking }) => {
    const { photo, date, number, message, table, email, name } = booking;


    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <center
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="md:p-10 p-2 rounded-2xl shadow-2xl"
        >
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={photo} />
                </div>
            </div>

            <p className="my-5 md:text-2xl">Client Name: {name}</p>
            <p className="my-5 md:text-2xl">Cleint Email: {email}</p>
            <p className="my-5 md:text-2xl">Booking Date: {date}</p>
            <p className="my-5 md:text-2xl">Total People: {number}</p>
            <p className="my-5 md:text-2xl">Table No: {table}</p>
            <p className="my-5 md:text-xl">{message}</p>
        </center>
    );
};

export default BookedTable;
