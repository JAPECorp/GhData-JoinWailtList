import Head from 'next/head'
import Image from 'next/image'
import Index from '../components/landing-page/landing-page'
import Nav from '../components/utilities/nav/nav'



export default function Home() {
  return (
    <>
    <Nav/>
    <Index/>
    </>
  )
}
