import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Services from "./Services";
import FeaturedRooms from "./FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Find You A House"
          subtitle="affordable houses for you on pata hao"
        >
          <Link to="/rooms" style={{color: 'green'}}>Houses and Rooms</Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
