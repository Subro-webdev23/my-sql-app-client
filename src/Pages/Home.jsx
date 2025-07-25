import React from 'react';
import Banner from '../Components/Home/Banner';
import Features from '../Components/Home/Features';
import CallToAction from '../Components/Home/CallToAction';
import TeamSection from '../Components/Home/TeamSection';
import SimpleHighlight from '../Components/Home/SimpleHighlight';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <CallToAction />
            <TeamSection />
            <SimpleHighlight />
        </div>
    );
};

export default Home;