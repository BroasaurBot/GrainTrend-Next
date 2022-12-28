import '../styles/globals.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footbar';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
