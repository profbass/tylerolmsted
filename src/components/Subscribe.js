import React from 'react';

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
  };

  return (
    <div 
      data-testid="subscribe-component" 
      className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24" 
      style={{backgroundImage: 'url(/img/bg-hero3.jpg)'}}
    >
      <div className="container relative z-30">
        <h3 className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
          Keep <span className="font-bold">up-to-date</span> <br />
          with what I'm up to
        </h3>
        <form className="mt-6 flex flex-col justify-center sm:flex-row" onSubmit={handleSubmit}>
          <input
            className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
            type="text"
            id="email"
            placeholder="Give me your Email"
          />
          <button
            className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
            type="submit"
          >
            Join the club
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
