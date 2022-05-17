import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import ParticlesComponent from "../utilities/particles/particles";




function Index(props) {
  return (
    <>
     <ParticlesComponent/>
      <section className="pt-16 md:pt-32">
        <div className="text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
            className="text-4xl md:text-6xl font-bold"
          >
            Big text about the project
          </motion.h1>
        

          
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.7,
                  },
                },
              }}
              className="text-gray-700 text-xl md:text-2xl mt-8 md:mt-8 leading-8 font-normal"
            >
              Descriptive text about the project maybe two lines but let’s see how it goes. Maybe something like this.
            </motion.h3>
            <button className="large mt-5" onClick={{}}>
              Join our waitlist
            </button>
          
        </div>
      </section>

      <section className="h-52 xsm:h-72 sm:h-80 md:h-96 lg:h-screen relative mb-20 mt-8 md:mt-0">
      <Image layout='fill' objectFit='contain' src='/CodeSnap.svg' alt='' />
      </section>

      

      <section className="mt-18">
       
          <div className="sm:w-4/5 lg:w-1/2 text-center mx-auto">
            <h2 className="leading-9 text-2xl md:text-3xl font-semibold mb-10">
            Easily Integrate with our API to
            get access to every Data in Ghana
            </h2>
            
          </div>
     

      
      </section>

      

     
    </>
  );
}

export default Index;
