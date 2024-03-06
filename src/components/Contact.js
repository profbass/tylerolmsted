import React, { useState } from 'react';
import Button from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';
// import FadeInElement from "../utils/FadeInElement";

// const { fadeElementIn } = FadeInElement;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const notify = (e) => toast(e, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      progressStyle: { backgroundColor: "#ff775e" },
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
  
    const formData = {
      name,
      email,
      message
    };
  
    const response = await fetch('https://m3pcqudze9.execute-api.us-east-2.amazonaws.com/production/submitContactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      notify("Uh oh, something went wrong. Please try again.");
      throw new Error('Something went wrong');
    } else {
      notify("Thanks for reaching out! 🎉 I can't wait to connect with you.");
      // setName(''); // Reset name field
      // setEmail(''); // Reset email field
      // setMessage(''); // Reset message field
    }

    const responseBody = await response.text();
    console.log(responseBody); // Handle success
  };

  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Drop me a line
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        The power of connection is everything, I would love to hear from you!
      </h4>
      <form className="mx-auto w-full pt-10 sm:w-3/4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row">
          <input
            className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
            placeholder="Name"
            type="text"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
            placeholder="Email"
            type="email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
          placeholder="Message"
          id="Message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button
          size="lg"
          text="Send"
          type="submit"
          iconClass="bx-chevron-right"
        />
      </form>
      <div className="flex flex-col pt-16 lg:flex-row">
        <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My Phone</p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">+1(303)905-3904</p>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-envelope text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My Email</p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">tylerdolmsted@gmail.com</p>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-map text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My Location</p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">Denver CO, 80224 USA</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
