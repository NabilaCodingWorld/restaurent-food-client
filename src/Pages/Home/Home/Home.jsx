import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import DailyFood from '../DailyFood/DailyFood';
import BookTable from '../BookTable/BookTable';
import MasterChef from '../MasterChef/MasterChef';
import Gallery from '../Gallery/Gallery';
import ClientReview from '../ClientReview/ClientReview';
import PublicReceipe from '../Public/PublicReceipe';
import GoogleMap from '../GoogleMap/GoogleMap';
import Contact from '../Contact/Contact';
import { FaArrowUp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div> 

            <Helmet> <title>Foodie | Home</title> </Helmet>
             
            <Banner></Banner>

            <Services></Services> <br /> <br />

            <AboutUs></AboutUs>

            <DailyFood></DailyFood> <br /> <br />

            <BookTable></BookTable>

            <MasterChef></MasterChef>

            <Gallery></Gallery>

            <ClientReview></ClientReview>

            <PublicReceipe></PublicReceipe>

            <GoogleMap></GoogleMap>

            <Contact></Contact>

            

            <div className="md:ml-[1300px] ml-2 mt-10 " style={{ position: 'fixed', top: '500px', width: '100%', zIndex: '1' }}> <br /> <br />
                {/* Your portfolio content */}
                <button onClick={scrollToTop}> <FaArrowUp className='w-10 h-5 text-[#E9B64B]'></FaArrowUp> </button>
            </div> <br /> <br />

        </div>
    );
};

export default Home;