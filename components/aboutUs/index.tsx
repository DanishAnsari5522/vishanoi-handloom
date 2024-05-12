import React from "react";
import AboutCompany from "./aboutCompany";
import WhyUS from "./whyUs";
import Hero from "./hero";

export default function AboutUsPage() {
  return (
    <>
      {/* <div className='container mx-auto px-5' > */}
        <Hero />
      {/* </div> */}
      <div className='container mx-auto px-5'>
        <AboutCompany />
        <WhyUS />
      </div>

    </>
  );
}
