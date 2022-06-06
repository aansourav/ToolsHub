import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BussinessSummary from '../BussinessSummary/BussinessSummary';
import OtherServices from '../OtherServices/OtherServices';
import ProductList from '../ProductList/ProductList';
import Reviews from '../Reviews/Reviews';
import Team from '../Team/Team';



const Home = () => {
    return (
        <>
         <Banner></Banner>
         <BussinessSummary></BussinessSummary>
         <ProductList></ProductList>
         <OtherServices></OtherServices>
         <AboutUs></AboutUs>
         <Team></Team>
         <Reviews></Reviews>
        </>
       
    );
};

export default Home;