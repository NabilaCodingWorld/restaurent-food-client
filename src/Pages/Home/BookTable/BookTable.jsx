import React, { useEffect, useState } from 'react';
import BookedTable from './BookedTable';
import Pagination from '../../Pagination/Pagination';
import { Link } from 'react-router-dom';


const BookTable = () => {
    const [bookings, setBookings] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    useEffect(() => {
        fetch('https://restaurent-food-server.vercel.app/bookingData')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = bookings.slice(firstPostIndex, lastPageIndex);

    return (
        <div className='md:max-w-7xl md:mx-auto mx-5'>
            <div className='divider md:text-2xl my-20 mx-5 text-[#E9B64B]'>Booked Table</div>
            <Link to="/booked"> <center> <button className="btn btn-outline btn-warning btn-sm">Booked Table</button> </center> </Link> <br /> <br />
            <div className='grid md:grid-cols-2 gap-10 '>
                {
                    currentPosts.map(booking => <BookedTable key={booking._id} booking={booking} ></BookedTable>)
                }
            </div> <br />

            <Pagination
                totalPosts={bookings.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Pagination> <br />
        </div>
    );
};

export default BookTable;