import React, { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const SharedReceipe = () => {

    const { user } = useContext(AuthContext);

    const handleSubmitSharedReceipe = event => {

        event.preventDefault();
        const form = event.target;

        const email = user?.email;
        const photo = form.photo.value
        const name = form.name.value
        const description = form.description.value;
        const ingredient = form.ingredient.value;


        const submitData = {email, photo, name, description, ingredient }
        console.log(submitData);




        fetch('http://localhost:5000/sharedReceipe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inserted data')
                if (data.insertedId) {
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
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/side-view-fried-meat-with-french-fries-ketchup_141793-4908.jpg?w=740&t=st=1697277983~exp=1697278583~hmac=2a93d8e154216b098f06e51d067a44c59eb83ff46c18121801d8322ed9cc2bad)' }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="flex items-center justify-center my-20">
                    <div className="max-w-md w-[1000px] space-y-8 p-8 bg-white rounded-lg shadow-md bg-opacity-50">
                        <h2 className="text-2xl font-extrabold text-center">Hello Users Manage Your Receipe</h2>

                        <center className='flex gap-10 justify-center'><Link to='/manageSharedReceipe'><FaEdit className='h-8 w-8'></FaEdit></Link>

                            <Link to="/"> <button className='btn btn-warning btn-sm'>Back </button> </Link> </center>

                        <form onSubmit={handleSubmitSharedReceipe} className="mt-8 space-y-6">

                            <div className='w-full'>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    defaultValue={user?.email}
                                    className="w-full p-3 mt-2 border rounded-md"
                                    placeholder="John Doe"
                                />

                                <label className="block text-gray-700 text-sm font-bold">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    className="w-full p-3 mt-2 border rounded-md"
                                    placeholder="John Doe"
                                />


                                <div> <br />
                                    <label className="block text-gray-700 text-sm font-bold">
                                        Photo URL
                                    </label>
                                    <input
                                        type="photoURL"
                                        id='photo'
                                        name='photo'
                                        className="w-full p-3 mt-2 border rounded-md"
                                        placeholder="johndoe@example.com"
                                    />
                                </div>
                            </div>



                            <div>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Description
                                </label>
                                <textarea
                                    className="w-full p-3 mt-2 border rounded-md"
                                    rows="4"
                                    id='description'
                                    name='description'
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>


                            <div>
                                <label className="block text-gray-700 text-sm font-bold">
                                    Ingredient
                                </label>
                                <textarea
                                    className="w-full p-3 mt-2 border rounded-md"
                                    rows="4"
                                    id='ingredient'
                                    name='ingredient'
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

export default SharedReceipe;