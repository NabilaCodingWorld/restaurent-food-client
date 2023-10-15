import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

  const form = useRef();
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: '',
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_oh0pz6d', 'template_4arazxs', form.current, 'ASqDdtT4Ef94GQmxT')
            .then((result) => {
                console.log(result.text);
                setMessage('Message sent successfully.');
                setFormData({
                    to_name: '',
                    from_name: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error(error.text);
                setMessage('An error occurred while sending the message.');
            });
    };

    return (
        <div className='my-20'>
            <div className='divider max-w-7xl my-20 mx-auto text-5xl text-[#E9B64B]'>Contact</div>


            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/pizza-with-salami-tomato-cheese-mushrooms_2829-20001.jpg?w=740&t=st=1697282534~exp=1697283134~hmac=c4d054607aecad8edc11186e670d9f0e6505e88ddb8a466a5e594243b89c37a1)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">

                    <form  ref={form} onSubmit={sendEmail} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
                        <div className="md:max-w-md md:w-[1000px] bg-black p-10 bg-opacity-50 text-black mx-auto rounded-xl">
                            <label className="block font-bold mb-2 text-white text-xl" htmlFor="to_name">
                                Name
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="to_name"
                                type="text"
                                name="to_name"
                                placeholder="Enter your name"
                                value={formData.to_name}
                                    onChange={handleChange}

                            />

                            <label className="block font-bold mt-4 text-white text-xl" htmlFor="from_name">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="from_name"
                                type="email"
                                name="from_name"
                                placeholder="Enter your email"
                                value={formData.from_name}
                                    onChange={handleChange}

                            />

                            <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}

                            />

                            <input
                                type="submit"
                                value="Send"
                                className='w-full btn btn-warning my-2'
                            />
                        </div>
                    </form>

                    {message && <p className="text-white text-center text-xl mt-4">{message}</p>}
                </div>
            </div>



        </div>
    );
};

export default Contact;