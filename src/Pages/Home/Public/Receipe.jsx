import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Receipe = ({ receipe }) => {

    const { email, photo, name, description, ingredient, _id } = receipe;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div>

            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='shadow-2xl bg-white text-black md:p-10 p-2 bg-opacity-50 rounded-2xl'>
                <p className='text-center text-3xl mb-4 font-bold'>{name}</p>
                <div className="group inline-block overflow-hidden relative">
                    <img className="md:h-96 md:w-96 transition-transform transform group-hover:scale-110" src={photo} alt="" />
                </div>

                <p className='text-center text-2xl my-3 text-gray-400'>{email}</p>


                <center><FaArrowRight onClick={openModal} className='text-[#E9B64B] w-8 h-8'></FaArrowRight></center>

                {/* Modal */}
                <center>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="About Details Modal"


                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            content: {
                                width: '90%', // 90% of the screen width
                                maxWidth: '90vw', // Set a maximum width based on viewport width
                                height: '90vh', // 90% of the screen height
                                maxHeight: '90vh', // Set a maximum height based on viewport height
                                margin: 'auto',
                                padding: '4% 4% 3%', // Adjust padding as a percentage of content area
                                border: 'none', // Remove border
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            },
                        }}


                    >
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                        <h3 className="font-bold md:text-3xl text-center">This is {name}</h3>

                        <p className="py-4 md:text-xl"><span className='font-bold'>Description:</span> {description}</p> <br />
                        <p className='md:text-xl'><span className='font-bold'>Ingrediant: </span>{ingredient}</p>
                    </Modal>
                </center>
            </div>

        </div>
    );
};

export default Receipe;