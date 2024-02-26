import React, { useState } from 'react';



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   name,
    //   email,
    //   message,
    // };
    setSuccess(true);
  };

  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Drop me a line
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        The power of connection is everything, I would love to hear from you!
      </h4>
      {success && (
        <div className="flex justify-center pt-10">
          <div className="w-1/2 bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
            <p className="font-bold">Success!</p>
            <p>Your message has been sent successfully. I'll be in touch soon!</p>
          </div>
        </div>
      )}
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
            type="text"
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
        <button
          className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
          type="submit"
        >
          Send
          <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
        </button>
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
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">me@tylerolmsted.co</p>
        </div>
        <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
          <div className="flex items-center">
            <i className="bx bx-map text-2xl text-grey-40"></i>
            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">My Location</p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">Denver CO, 80224 USA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
