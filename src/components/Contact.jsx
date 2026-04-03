import React from "react";
import TitleSection from "./TitleSection";
import Card from "./Card";
// Icon
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Item({ icon, title, desc, link }) {
  return (
    <Card width={""}>
      <div className="w-75 p-2 flex flex-col items-center">
        <span className="pb-2 text-2xl"> {icon} </span>
        <h5 className="text-[18px]"> {title} </h5>
        <p className="pb-2 text-[14px]"> {desc} </p>
        <a href={link}>Send Message</a>
      </div>
    </Card>
  );
}

const data = [
  {
    id: 0,
    title: "Email",
    descripton: "m.sami.office@gmile.com",
    icon: <MdOutlineMail />,
    link: "#",
  },
  {
    id: 1,
    title: "Messenger",
    descripton: "Mustafa Sami",
    icon: <FaFacebookMessenger />,
    link: "#",
  },
  {
    id: 2,
    title: "WhatsApp",
    descripton: "01094803310",
    icon: <FaWhatsapp />,
    link: "#",
  },
];

function Contact() {
  return (
    <section>
      <div className="container">
        <TitleSection
          title={{ t: "Get In Touch", style: "text-center" }}
          desc={{ d: "Contact Me", style: "text-center" }}
        />
        <div className=" flex justify-center gap-30">

          <div className=" flex flex-col gap-5">
            {data.map((i) => {
              return (
                <Item
                  title={i.title}
                  desc={i.descripton}
                  icon={i.icon}
                  link={i.link}
                />
              );
            })}
          </div>

          <div className="w-[40%] flex flex-col gap-7">
            <input
              type="text"
              placeholder="Your Full Name"
              className="p-5 border-2 outline-0 border-(--color-primary-variant) rounded-lg focus:border-(--color-light) transition-(--transition)"
            />
            <input
              type="emil"
              placeholder="Email"
              className="p-5 border-2 outline-0 border-(--color-primary-variant) rounded-lg focus:border-(--color-light) transition-(--transition)"
            />
            <textarea
              name=""
              id=""
              placeholder="Your Full Name"
              className="p-5 h-50 border-2 outline-0 border-(--color-primary-variant) rounded-lg focus:border-(--color-light) transition-(--transition)"
            ></textarea>
            <a href="#" className="btn btn-primary">
              Send Message
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
