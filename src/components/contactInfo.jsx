import React from "react";
import ContactInfoCard from "./contactInfoCard";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaTwitter,
} from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

const contacts = [
  {
    title: "LOCATION",
    decs: "Karachi, Pakistan + Remote",
    icon: <FaMapMarkedAlt size={35} className="mr-3 " color="#1f4b91" />,
  },
  {
    title: "EMAIL ME",
    decs: "muhammadsarimbinnesar@gmail.com",
    icon: <HiMailOpen size={35} className="mr-3 " color="#1f4b91" />,
  },
];

function ContactInfo() {
  return (
    <div className="w-4/12 m-3 max-sm:w-[90%]">
      <h1 className="text-2xl font-bold mb-3">DON'T BE SHY !</h1>
      <h1 className="text-sm mb-3">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </h1>
      {contacts.map((item, i) => (
        <ContactInfoCard key={i} item={item} />
      ))}
      <div className="flex mt-10">
        <a
          href="https://www.facebook.com/M.Sarim.Nesar"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF
            size={25}
            className="cursor-pointer mr-3 "
            color="#1f4b91"
          />
        </a>

        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter
            size={25}
            className="cursor-pointer mr-3 "
            color="#1f4b91"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-sarim-bin-nesar"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn
            size={25}
            className="cursor-pointer mr-3 "
            color="#1f4b91"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
