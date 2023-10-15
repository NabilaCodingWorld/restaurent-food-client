import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Registration = () => {
    const { createUser, updateProfileData } = useContext(AuthContext);

    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    // registration 
    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setErrors('');

        // collect from data
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form['photo-url'].value;

        console.log(email, password, name, photoUrl)

        // validation
        if (password.length < 6) {
            setErrors('Please enter a password with at least 6 characters.');
            return;
        }

        // create user in firebase
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                setSuccess('Registration SuccessFully');
                setErrors('')


                // for user name and photo url
                updateProfileData(loggedUser, name, photoUrl)
                    .then(() => {
                        console.log('user name updated')
                    })
                    .catch(error => {
                        setErrors(error.message)
                    })
            })

            .catch(error => {
                console.error(error.message);
                setErrors(error.message);
                setSuccess('');
            })


    }

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen bg-gray-200">
                <div className='divider mx-20 my-20 text-3xl text-[#E9B64B]'>Registration</div>
                <form data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" onSubmit={handleRegistrationSubmit} className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                        <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Name</label>

                        <input id="text" name='name' type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" required />

                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>

                        <input id="email" name='email' type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>

                        <input id="password" name='password' type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo-url" className="block text-gray-700 text-sm font-bold mb-2">Photo Url</label>

                        <input id="photo-url" type="url" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your photo-url" required />
                    </div>

                    <div className="flex items-center justify-between">

                        <input type="submit" className="btn btn-warning rounded-lg w-full" value='Register' />

                    </div>

                    <p className='mt-5 text-center text-blue-500'> <Link to='/login'>Go To The Log In Page </Link> </p>
                </form>

                <br />
                {errors && <p className='text-center text-red-700'>{errors}</p>}
                {success && <p className='text-center text-green-700'>{success}</p>}

            </div>

        </div>
    );
};

export default Registration;