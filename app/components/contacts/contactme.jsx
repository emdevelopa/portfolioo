import React from "react";
import ContactSection from "../contacts.jsx";

const Contacts = () => {
  return (
    <>
      <section className="mt-16 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4 lg:gap-0">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <h1 className="text-2xl md:text-3xl">
              <span className="text-[#C778DD]">#</span>Contacts
            </h1>
            <div className="flex-grow lg:w-[14em] h-[2px] bg-[#C778DD] hidden lg:block"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export default Contacts;
