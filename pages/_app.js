import '../styles/globals.css'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GrainTrend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Header />
      <div className='max-w-screen-xl px-6 md:px-10 lg:px-14 mx-auto my-6 md:my-16'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
