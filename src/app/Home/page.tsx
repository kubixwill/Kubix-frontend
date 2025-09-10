"use client"; 

import React from "react";
import Hero from "./Hero/Page";
import WhoWeAre from "./WhoAreWe/page";
import Highlights from "./Highlights/page";
import TrustedSection from "./TrustedSection/page";
import Testimonials from "./Testimonials/page";
import ConnectSection from "./ConnectSection/page";

const page = () => {
  return (
    <>
     <Hero />
      <WhoWeAre />
      <Highlights />
      <TrustedSection />
      <Testimonials />
      <ConnectSection />
    </>
  )
}

export default page