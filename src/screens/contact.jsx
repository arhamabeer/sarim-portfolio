import React from "react";
import SideNav from "../components/sideNav";
import ContactForm from "../components/contactForm";
import ContactInfo from "../components/contactInfo";

function Contact() {
  return (
    <div className="h-[100vh] justify-center flex flex-col text-white   max-lg:mb-6">
      <div className="flex items-center justify-center my-8">
        <h1 className="font-black text-5xl max-sm:text-3xl text-white">
          GET IN <span className="text-[#1f4b91]">TOUCH</span>
        </h1>
      </div>
      <div className="flex px-[10%] max-md:px-[3%] max-sm:px-4 justify-between self-center max-sm:flex-col">
        <ContactInfo />
        {/* <div className="w-2/3 max-sm:w-full ">
          <ContactForm />
        </div> */}
      </div>
      <SideNav current={3} />
    </div>
  );
}

export default Contact;
