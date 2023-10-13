import React from 'react';
import bgPhoto from '../../../assets/1000_F_627088962_q9NsYB1j7qIR3mVS4yRaKQbsUwGFnqKX.jpg'

const BookTable = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${bgPhoto})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="w-[1000px] ">
                    <p className='text-4xl font-bold text-center text-white mt-10'>Book A Table</p> <br />

                    <div className="flex items-center justify-center">
                        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md bg-opacity-50">
                            <h2 className="text-2xl font-extrabold text-center">Beautiful Form</h2>
                            <form className="mt-8 space-y-6">


                                <div className='grid md:grid-cols-2 gap-5'>
                                    <div className='w-full'>
                                        <label className="block text-gray-700 text-sm font-bold">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-3 mt-2 border rounded-md"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full p-3 mt-2 border rounded-md"
                                            placeholder="johndoe@example.com"
                                        />
                                    </div>
                                </div>

                                <div className='grid md:grid-cols-2 gap-5'>
                                    <div className='w-full'>
                                        <label className="block text-gray-700 text-sm font-bold">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-3 mt-2 border rounded-md"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full p-3 mt-2 border rounded-md"
                                            placeholder="johndoe@example.com"
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
                    </div> <br />

                </div>
            </div>
        </div>
    );
};

export default BookTable;