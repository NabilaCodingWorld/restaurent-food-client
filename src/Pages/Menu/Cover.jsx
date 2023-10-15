import React from 'react';

const Cover = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1697276983~exp=1697277583~hmac=dda46716375dcb8706790ba403da3e74200623438080f8ce4524ebe2fc9214f0)' }}>
                <div className="hero-overlay  bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">MENU</h1>

                        <div className="relative text-gray-600">
                            <input
                                className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search..."
                            />
                            <button type="submit" className="absolute right-0 top-0 -mt-1 -mr-24 btn  btn-warning">
                                Search
                            </button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;