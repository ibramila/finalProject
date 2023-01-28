import React from "react";
import { Helmet } from "react-helmet-async";
import BestServices from "../components/BestServices/BestServices";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesInformation from "../components/SericesInformation/ServicesInformation";
import Members from "../components/Members/ProfessionalMembers";
function Home() {
  return (
    <>
      <Helmet>
        <title>Home!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <HeroSection />
      <BestServices />
      <ServicesInformation />
      <Members />
    </>
  );
}

export default Home;
