import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageTable = () => {

    const {user} = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(`http://localhost:5000/booking/${_id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                  const updatedBookings = bookings.filter(item => item._id !==_id);
                  setBookings(updatedBookings);
    
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
          }
        })
    
      }

    return (
        <div>
            <center> <Link to="/booked"><button className='my-20 btn btn-warning'>Back To Home</button></Link> 
            <div className='divider text-3xl mx-20 text-[#E9B64B] mb-20'>Manage Your Data</div>
            </center>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Booking Date</th>
                            <th>Total People</th>
                            <th>Table No</th>
                            <th>Message</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        bookings.map((booking, index) =>  <tr key={booking._id}>
                            <th>{index+1}</th>
                            <td>{booking.date}</td>
                            <td>{booking.number}</td>
                            <td>{booking.table}</td>
                            <td>{booking.message}</td>

                            <Link to={`update/${booking._id}`}><td> <FaEdit className='h-6 w-6'></FaEdit> </td></Link>


                            <td> <button onClick={() => handleDelete(booking._id)}><FaTrashAlt className='h-6 w-6 text-red-700'></FaTrashAlt></button> </td>
                        </tr>)
                       }
                        
                    </tbody>
                </table>
            </div> <br />
        </div>
    );
};

export default ManageTable;