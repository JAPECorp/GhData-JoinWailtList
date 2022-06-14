/* eslint-disable @next/next/no-img-element */
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
              <h3 className="pl-20 mt-2 text-xl sm:text-left md:text-2xl">Heading One</h3>
              <p className="px-20 mt-5 text-lg text-gray-700 text md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat mi
                vel diam convallis facilisis. Donec hendrerit turpis sem,
                eget mattis tortor consectetur sed. Suspendisse at porta nibh.
                <br />
                <br />
                Curabitur viverra efficitur iaculis.
                Nunc non velit lobortis, posuere felis quis,
                aliquet arcu. Pellentesque lobortis congue condimentum.
                Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nam consequat
                urna tincidunt,
                ullamcorper ante quis, auctor orci. Nullam tristique lacinia eros, non consequat purus malesuada at.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="p-10 flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <h3 className="pl-20 mt-2 text-xl sm:text-left md:text-2xl">Heading Two</h3>
              <p className="px-20 mt-5 text-lg text-gray-700 text md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat mi
                vel diam convallis facilisis. Donec hendrerit turpis sem,
                eget mattis tortor consectetur sed. Suspendisse at porta nibh.
                <br />
                <br />
                Curabitur viverra efficitur iaculis.
                Nunc non velit lobortis, posuere felis quis,
                aliquet arcu. Pellentesque lobortis congue condimentum.
                Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nam consequat
                urna tincidunt,
                ullamcorper ante quis, auctor orci. Nullam tristique lacinia eros, non consequat purus malesuada at.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-03.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <h3 className="pl-20 mt-2 text-xl sm:text-left md:text-2xl">Heading Three</h3>
              <p className="px-20 mt-5 text-lg text-gray-700 text md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat mi
                vel diam convallis facilisis. Donec hendrerit turpis sem,
                eget mattis tortor consectetur sed. Suspendisse at porta nibh.
                <br />
                <br />
                Curabitur viverra efficitur iaculis.
                Nunc non velit lobortis, posuere felis quis,
                aliquet arcu. Pellentesque lobortis congue condimentum.
                Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nam consequat
                urna tincidunt,
                ullamcorper ante quis, auctor orci. Nullam tristique lacinia eros, non consequat purus malesuada at.
              </p>
            </div>
          </div>

        </div>
      </section>



    </>
  );
}

export default Index;
