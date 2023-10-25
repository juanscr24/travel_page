import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <div className='relative overflow-hidden'>
          <Main />
        </div>
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
