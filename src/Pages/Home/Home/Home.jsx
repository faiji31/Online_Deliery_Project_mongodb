import React from 'react';
import Banner from '../Banner/Banner';
import SmallCard from '../SmallCard/SmallCard';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <SmallCard></SmallCard>
                  <OurServices></OurServices>
                  <Brands></Brands>
            </div>
      );
};

export default Home;