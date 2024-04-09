import React from 'react';
import Button from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';
import Reveal from '../utils/Reveal';

const Subscribe = () => {
  function handleSubmit(event) {
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
  
    const url = 'https://97kzpx38li.execute-api.us-east-2.amazonaws.com/prod/NewsletterSubscription';
    const email = event.target.email.value; // get the email value from the form field
  
    const data = {
      email: email
    };
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log(data);
      notify("Thanks for subscribing! 🎉 I can't wait to connect with you.");
      event.target.reset(); // reset form fields
    })
    .catch(error => console.error('Error:', error));
  }

  return (
    <div 
      data-testid="subscribe-component" 
      className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24" 
      style={{backgroundImage: 'url(/img/bg-hero3.jpg)'}}
    >
      <div className="container relative z-30 transition-all will-change-transform">
        <Reveal>
          <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Keep <span className="font-bold">up-to-date</span> <br />
            with what I'm up to
          </h3>
        </Reveal>
        <Reveal delayInView='0.5'>
          <form className="mt-6 flex flex-col justify-center sm:flex-row" onSubmit={handleSubmit}>
          <input
              className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
              type="email"
              id="email"
              placeholder="Give me your Email"
            />
            <Button
              text="Join the club"
              buttonClass="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
              type="submit"
            />
          </form>
        </Reveal>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Subscribe;
