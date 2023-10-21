import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateShare = () => {

    const share = useLoaderData();

    const {photo, name, description,
        ingredient, _id} = share;

        const handleUpdateShare = event => {

            event.preventDefault();
            const form = event.target;
    
            const photo = form.photo.value;
            const name = form.name.value;
            const description = form.description.value;
            const ingredient = form.ingredient.value;
    
            const submitData = {  photo, name, description,
                ingredient, _id }
            console.log(submitData);

            fetch(`https://restaurent-food-server.vercel.app/sharedReceipe/${_id}`, {
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
            <div className="flex items-center justify-center my-20">
                    <div className="max-w-md w-[1000px] space-y-8 p-8 bg-white rounded-lg shadow-md bg-opacity-50">
                        <h2 className="text-2xl font-extrabold text-center">Hello Users Manage Your Receipe</h2>

                        <center className='flex gap-10 justify-center'>

                            <Link to="/manageSharedReceipe"> <button className='btn btn-warning btn-sm'>Back </button> </Link> </center>

                        <form onSubmit={handleUpdateShare} className="mt-8 space-y-6">

                            <div className='w-full'>

                                <label className="block text-gray-700 text-sm font-bold">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    defaultValue={name}
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
                                        defaultValue={photo}
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
                                    defaultValue={description}
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
                                    defaultValue={ingredient}
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
    );
};

export default UpdateShare;