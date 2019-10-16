import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page aint here bro">
        <Link to="/">
          Back to HomePage
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
