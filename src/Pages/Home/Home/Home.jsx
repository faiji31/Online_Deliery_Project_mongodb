import React from 'react';
import Banner from '../Banner/Banner';
import SmallCard from '../SmallCard/SmallCard';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import OurServices1 from '../OurServies1/OurServices1';
import Location from '../Location/Location';
import CustomerSaying from '../CustomerSaying/CustomerSaying';
import Reviews from '../Reviews/Reviews';
import Question from '../Question/Question';



const ReviewsPromise = fetch('/reviews.json').then(res=> res.json())

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <SmallCard></SmallCard>
                  <OurServices></OurServices>
                  <Brands></Brands>
                  <OurServices1></OurServices1>
                  <Location></Location>
                  <CustomerSaying></CustomerSaying>
                  <Reviews ReviewsPromise={ReviewsPromise}></Reviews>
                  <Question></Question>
            </div>
      );
};

export default Home;