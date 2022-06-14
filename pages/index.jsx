import Head from 'next/head'
import Image from 'next/image'
import Index from '../components/landing-page/landing-page'
import Footer from '../components/utilities/footer/footer'
import Nav from '../components/utilities/nav/nav'



export default function Home() {
  return (
    <>
      <Nav />
      <Index />
      <Footer />
    </>
  )
}
