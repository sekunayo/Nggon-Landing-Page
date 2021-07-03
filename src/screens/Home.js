import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
// import Sponsors from "../components/Sponsors/Sponsors";
import MoreInfo from "../components/MoreInfo/MoreInfo";
import Services from "../components/Services/Services";
import service1 from "../assets/images/concepting.jpg";
import Slider from "../components/Slider/Slider";
import FAQ from "../components/FAQ/FAQ";
import Project from "../components/Project/Project";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      {/* <Sponsors /> */}
      <MoreInfo />
      <Services image={service1} heading="Always do concepting" />
      <Slider />
      <FAQ />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
