import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';




function Index(props) {
  return (
    <>

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





      </section>
      <section className="py-20 ">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="sm:w-4/5 lg:w-1/2 text-center mx-auto">
            <h2 className="leading-9 text-2xl md:text-3xl font-semibold mb-10">
              Easily Integrate with our API to
              get access to every Data in Ghana
            </h2>

          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Drag-n-drop design</p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Design Made Easy</h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">Crafting your user experience has never been easier, with our intuitive drag'n drop interface you will be creating beatiful designs in no time.</p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">know your data</p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Optimized For Conversions</h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">Backed by data, these templates have been crafted for ultimate optimization. Now, converting your visitors into customers is easier than ever before.</p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-03.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Easy to customize</p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Make It Your Own</h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">All templates and components are fully customizable. You can use these templates to tell your personal story and convey your message.</p>
            </div>
          </div>

        </div>
      </section>



    </>
  );
}

export default Index;
