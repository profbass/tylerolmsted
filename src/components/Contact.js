import React, { useState } from 'react'
import Button from '../utils/Button'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Flip } from 'react-toastify'
import Reveal from '../utils/Reveal'
import { motion, useViewportScroll, useTransform } from 'framer-motion'


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    
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

  const { scrollYProgress } = useViewportScroll() 
  const yRange = useTransform(scrollYProgress, [0, 1], ['-100px', '100px'])

  return (
    <section id="contact" className="mt-60">
      <Reveal yValue={20}>
          <div className="text-base">
              <span className="text-primary pr-8 mr-2 inline-block border-b-4 border-b-secondary"></span>
              <span className="text-off-black inline-block font-semibold">DROP ME A LINE</span>
          </div>
      </Reveal>
      <div 
          className="flex flex-wrap w-full h-screen overflow-hidden"
      >
        <div
          className="relative lg:w-1/2 xs:w-full"
        >
          <div className="relative container py-16 md:py-20 z-20">
            {/* <div className="flex mb-10">
                <div className="w-full">
                    <Reveal yValue={20}>
                        <div className="text-base text-center">
                            <span className="pr-8 mr-2 inline-block border-b-4 border-b-yellow"></span>
                            <span className="text-paper inline-block font-semibold">CONTACT ME</span>
                        </div>
                    </Reveal>
                    <Reveal delayInView="0.25">
                        <h1 className="lg:text-vw-lg xs:text-8xl text-center text-paper font-semibold leading-extra-tight">
                          Let's Stay<br />in Touch
                        </h1>
                    </Reveal>
                    <Reveal delayInView="0.5">
                        <p className="text-2xl text-center text-paper leading-relaxed lg:pt-10 lg:pl-15">
                          Drop me a line! The power of connection is <br/>
                          <span className="text-secondary font-bold underline">everything</span>, I would love to hear from you! 🙉
                        </p>
                    </Reveal>
                </div>
            </div> */}
          </div>
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
              <h2 className="text-vw-base xs:text-6xl text-white mb-20 inline-block leading-extra-tight font-bold bg-primary">
                <motion.span 
                  className="inline-block text-yellow"
                  animate={{ rotate: [0, 360, 0] }}
                  transition={{
                    ease: "linear",
                    loop: Infinity,
                    duration: 2
                }}
                >*</motion.span> Tell me<br />about yourself
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
              <ToastContainer />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
