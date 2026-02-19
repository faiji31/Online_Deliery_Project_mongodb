import React from 'react';
import Banner from '../Banner/Banner';
import SmallCard from '../SmallCard/SmallCard';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import OurServices1 from '../OurServies1/OurServices1';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <SmallCard></SmallCard>
                  <OurServices></OurServices>
                  <Brands></Brands>
                  <OurServices1></OurServices1>
            </div>
      );
};

export default Home;