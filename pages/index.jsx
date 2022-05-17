import Head from 'next/head'
import Image from 'next/image'
import Index from '../components/landing-page/landing-page'
import Nav from '../components/utilities/nav/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Nav/>
    <Index/>
    </>
  )
}
