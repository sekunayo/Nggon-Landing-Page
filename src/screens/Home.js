import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Sponsors from "../components/Sponsors/Sponsors";
import MoreInfo from "../components/MoreInfo/MoreInfo";
import Services from "../components/Services/Services";
import service1 from "../assets/images/concepting.jpg";

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      {/* <Sponsors /> */}
      <MoreInfo />
      <Services image={service1} heading="Always do concepting" />
    </div>
  );
}

export default Home;
