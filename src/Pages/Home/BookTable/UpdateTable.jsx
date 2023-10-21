import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTable = () => {

    const booked = useLoaderData();
    const formRef = useRef(null);

    const {date, number, message, table, _id} = booked;

    const handleUpdateBooking = event => {

        event.preventDefault();
        const form = event.target;

        const date = form.date.value;
        const number = form.number.value;
        const table = form.table.value;
        const message = form.message.value;

        const submitData = {  date, number, table, message, _id: _id, }
        console.log(submitData);




        fetch(`https://restaurent-food-server.vercel.app/booking/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inserted data')
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    // Reset the form
                    form.reset();
                }
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/delicious-tacos-table_23-2150770513.jpg?t=st=1697260713~exp=1697264313~hmac=8b4cb3f41cca49db85d62e800d5c640e43dee307d9a5a038eb5d5db2ffa04752&w=740)' }}>
                <div className="hero-overlay bg-opacity-60"></div>



                <div className="flex items-center justify-center my-20">
                    <div className="max-w-md w-[1000px] space-y-8 p-8 bg-white rounded-lg shadow-md bg-opacity-50">
                        <h2 className="text-2xl font-extrabold text-center">Book A Table</h2>

                        <center className='flex gap-10 justify-center'>
                            <Link to="/"> <button className='btn btn-warning btn-sm'>Back </button> </Link> </center>

                        <form ref={formRef} onSubmit={handleUpdateBooking} className="mt-8 space-y-6">



                            <div className='w-full'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Date:
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    defaultValue={date}
                                    className="w-full p-3 mt-2 border rounded-md"
                                    placeholder="John Doe"
                                />


                                <div> <br />
                                    <label className="block text-gray-700 text-sm font-bold">
                                        Number of People:
                                    </label>
                                    <input
                                        type="number"
                                        id='number'
                                        name='number'
                                        className="w-full p-3 mt-2 border rounded-md"
                                        defaultValue={number}
                                        placeholder="Enter Number of People"
                                    />
                                </div>
                            </div>

                           

                            <div>
                                <div className='w-full'>
                                    <label className="block text-gray-700 text-sm font-bold">
                                        Table No:
                                    </label>
                                    <input
                                        type="number"
                                        id='table'
                                        name='table'
                                        defaultValue={table}
                                        className="w-full p-3 mt-2 border rounded-md"
                                        placeholder="Number of Table"
                                    />
                                </div>


                            </div>


                            <div>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Message
                                </label>
                                <textarea
                                    className="w-full p-3 mt-2 border rounded-md"
                                    rows="4"
                                    id='message'
                                    name='message'
                                    defaultValue={message}
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2.5 text-white bg-blue-500 rounded-md hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default UpdateTable;