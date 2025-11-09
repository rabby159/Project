import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='h-screen'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;