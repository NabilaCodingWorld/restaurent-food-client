import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GoogleMap = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <center className='mx-5 md:mx-auto md:max-w-7xl rounded-2xl'>
            <div className='md:text-4xl divider text-[#E9B64B] my-20 '>Check The Google Map To Find Our Restaurent</div>
            <iframe data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28802.12982399038!2d89.27879829999999!3d25.529507399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1697220070700!5m2!1sbn!2sbd"  width="350" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <br />
        </center>
    );
};

export default GoogleMap;