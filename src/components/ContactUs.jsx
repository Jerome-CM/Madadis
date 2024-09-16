import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Input} from "../components/input.jsx";
import {Submit} from "../components/submit.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_z1m4367', 'template_jonbcw1', form.current, {
          publicKey: 'kYArWM9ItmrBuYzdM',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast.success("Mail sent with success");
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error("Error ! Resent please");
          },
        );
  };

  return (
      <form className="w-11/12 md:w-9/12 rounded overflow-hidden shadow-lg p-4 my-5 mx-auto bg-white text-black flex flex-col items-center"  ref={form} onSubmit={sendEmail}>
          <img className="w-60" src="/src/assets/e-mail.gif" alt="Lock"/>
          <div className="flex flex-col md:flex-row md:justify-between w-full">
              <div className="w-full flex flex-col md:w-6/12 md:mr-2">
                  <Input type={'text'} name={'from_name'} placeholder={'Your name'}/>
                  <Input type={'text'} name={'to_name'} placeholder={'E-mail'}/>
              </div>
              <textarea placeholder="Your message" name="message" className="w-auto md:w-6/12 form-input px-4 py-3 h-48 my-4 md:m-0 mb:ml-2 md:mb-4  rounded border-none drop-shadow-md"></textarea>
          </div>
          <Submit type={'submit'} value={'Envoyer'}/>
      </form>

      );
}