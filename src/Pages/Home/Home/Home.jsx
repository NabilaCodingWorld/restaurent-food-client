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

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Services></Services>

            <AboutUs></AboutUs>

            <DailyFood></DailyFood>

            <BookTable></BookTable>

            <MasterChef></MasterChef>

            <Gallery></Gallery>

            <ClientReview></ClientReview>

            <PublicReceipe></PublicReceipe>

        </div>
    );
};

export default Home;