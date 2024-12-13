"use client";

import Image from "next/image";

const Contacts = () => {
   
   const email = "your_email@example.com";
    const subject = "Hello Raghav";
    const body = "I wanted to discuss something important with you.";
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  return (
    <div className="bg-navy relative w-full h-lvh  justify-center items-center content-center inset-0 md:px-40 p-20 flex flex-col">
      <div className="flex gap-5 items-center">
        <h1 className="text-aquamarine text-lg font-sans">
          {`05. What's Next`}
        </h1>
      </div>
      <div className="flex flex-col justify-center content-center items-center">
            <h1 className="text-lavendar text-4xl font-sans font-bold text-center mt-3">Get In Touch</h1>
            <h1 className="text-lightslategray text-lg font-sans mt-3 text-center w-1/2">I'm always looking for new opportunities, my inbox is always open. Whether you have a question or just want to say Hi, I'll try mu best to get back to you!</h1>
            <div onClick={()=>{window.location.href = mailtoLink}} className="px-3 py-2 rounded-lg bg-transparent border border-aquamarine group w-28 mt-3 cursor-pointer hover:bg-aquamarine">
                <h1 className="text-aquamarine font-sans text-center group-hover:text-lightnavy">Say Hi!</h1>
            </div>
      </div>
      <div className="absolute bottom-2 flex justify-center content-center items-center">
        <h1 className="text-lightslategray font-sans">Developed by Raghav Kashyap</h1>
      </div>
    </div>
  );
};

export default Contacts;
