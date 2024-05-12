import React from "react";
import Hero from "../newHome/hero";
import ContactPage from "./contactPage";
export default function ContactUs() {
  return (
    <>
      <Hero />
      <div className='container mx-auto px-5'>
        <ContactPage />
      </div>

    </>
  );
}
