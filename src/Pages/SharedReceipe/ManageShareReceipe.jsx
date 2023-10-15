import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyShare from './MyShare';
import Swal from 'sweetalert2';

const ManageShareReceipe = () => {

    const { user } = useContext(AuthContext);

    const [myShares, setMyShares] = useState([]);

    const url = `http://localhost:5000/sharedReceipe?email=${user.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyShares(data)
                console.log(data)
            })
    }, [])


    const handleDeleteShare = (_id) => {
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

                fetch(`http://localhost:5000/sharedReceipe/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            const updatedShare = myShares.filter(item => item._id !== _id);
                            setMyShares(updatedShare);

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
            <div className='mx-20 my-20'>
                <center className='flex gap-10 justify-center'>

                    <Link to="/shared"> <button className='btn btn-warning btn-sm'>Back </button> </Link> </center>
                {
                    myShares.map(myShare => <MyShare key={myShare._id} myShare={myShare} handleDeleteShare={handleDeleteShare}></MyShare>)
                }
            </div>
        </div>
    );
};

export default ManageShareReceipe;