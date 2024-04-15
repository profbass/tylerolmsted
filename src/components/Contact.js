import React, { useState } from 'react'
import Button from '../utils/Button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Flip } from 'react-toastify'
import Reveal from '../utils/Reveal'



const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(name, email, message)
    
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
    })
  
    const formData = {
      name,
      email,
      message
    }
  
    const response = await fetch('https://m3pcqudze9.execute-api.us-east-2.amazonaws.com/production/submitContactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
  
    if (!response.ok) {
      notify("Uh oh, something went wrong. Please try again.")
      throw new Error('Something went wrong')
    } else {
      notify("Thanks for reaching out! 🎉 I can't wait to connect with you.")
      // setName('') // Reset name field
      // setEmail('') // Reset email field
      // setMessage('') // Reset message field
    }

    const responseBody = await response.text()
    console.log(responseBody) // Handle success
    
  }

  return (
    <section id="contact" className="lg:mt-80 xs:mt-20">
      <div className="container mx-auto lg:my-10">
        <div className="flex flex-wrap lg:px-20 xs:px-0 mb-10">
            <div>  
              <Reveal yValue={20}>
                  <div className="text-base">
                      <span className="text-primary pr-8 mr-2 inline-block border-b-4 border-b-secondary"></span>
                      <span className="text-off-black inline-block font-semibold">DROP A LINE</span>
                  </div>
              </Reveal>
              <Reveal delayInView="0.5">
                  <h1 className="lg:text-vw-xl xs:text-8xl font-semibold leading-tight xs:mb-10 text-off-black">Contact <span className="text-yellow">Me</span></h1>
              </Reveal>
            </div>
            <div className="lg:w-2/5 xs:w-full lg:ml-20">
              <Reveal delayInView="0.25">
                  <p className="text-xl leading-relaxed text-off-black">
                  The power of connection is everything, I would <span className="text-secondary font-bold underline">love</span> to hear from you. Let's chat about your next project, your favorite book, or your favorite place to grab a cup of coffee ☕️. I'm all ears.
                  </p>
              </Reveal>
            </div>
          </div> 
      </div>
      <div 
          className="flex flex-wrap w-full h-screen overflow-hidden"
      >
        <div
          className="relative lg:w-1/2 xs:w-full"
        >
          <video
              className="absolute inset-0 z-10"
              style={{
                  objectPosition: "bottom",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%"
              }}
              autoPlay
              muted
              loop
              src={"https://tylerco-assets.s3.us-east-2.amazonaws.com/clouds.mp4"}
          />
        </div>
        <div
          className="lg:w-1/2 xs:w-full bg-primary"
        >
          {/* Form */}
            <div
              className="w-full z-20"
            >
              <h2 className="text-vw-base xs:text-6xl text-white mb-20 inline-block leading-extra-tight font-bold bg-primary p-5">
                <span 
                  className="inline-block text-yellow"
                >*</span> Tell me<br />about yourself
              </h2> 
             
              <form className="mx-auto bg-primary w-full p-10 block" onSubmit={handleSubmit}>
                <div className="">
                  <input
                    className="w-full px-4 py-3 font-body text-white placeholder-white bg-transparent border-b-2 border-white mb-10"
                    placeholder="Name"
                    type="text"
                    id="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="w-full px-4 py-3 font-body text-white placeholder-white bg-transparent border-b-2 border-white mb-10"
                    placeholder="Email"
                    type="email"
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <textarea
                  className="w-full px-4 py-3 font-body text-white placeholder-white bg-transparent border-b-2 border-white"
                  placeholder="Message"
                  id="Message"
                  rows="8"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <Button
                  size="lg"
                  text="Submit"
                  type="submit"
                  iconClass="bx-right-arrow-alt"
                />
                <ToastContainer />
              </form>
              
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
