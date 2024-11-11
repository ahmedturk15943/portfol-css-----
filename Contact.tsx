import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "@/app/CSS/contact.css";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='contact-info' data-aos="zoom-in-up">
                <div className='flex gap-3'>
                    <AiOutlineMail size={30}/> <span>ahmedturk748972@gmail.com</span>
                </div>
                <div className='flex gap-3'>
                    <BsTelephone size={30}/> <span>(0323) 2879242</span>
                </div>
            </div>
        </div>
        <div className='space-y-8'>
          <div className='form-fields'>
            <div className='flex-row' data-aos="zoom-in-up">
              <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name'/>
              </div> 
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email'/>
              </div>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
              <label htmlFor="msg">Message</label>
              <textarea id='msg' rows={8}></textarea>
            </div>
            <button className='bg-green-500 p-2 px-6 border' data-aos="zoom-in-up">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
