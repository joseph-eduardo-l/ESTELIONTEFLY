import Head from 'next/head'
import { Inter } from 'next/font/google'
import Banner from '@/components/ERP360/Banner'
import Footer from '@/components/footer/Footer'
import { Navbar } from '@/components/navbar'
import PhoneBar from '../components/navbar/PhoneBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PhoneBar/>
      <Navbar />
      <Banner />
      <Footer />
    </>
  )
}
