import './globals.css'
import Navbar from '../components/Navbar/page'
import { Footer } from '../components/Footer/page'
import { Suspense } from 'react'
import Loading from './loading'
import ReviewModal from '../components/Modal/reviewModal'
// import RulesModal from '../components/Modal/RulesModal'

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="dark">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />


      <body className='flex flex-col justify-between items-center min-h-screen !bg-base-200'>
        {/* <RulesModal /> */}
        <Navbar />

        <main className='flex-1 w-full bg-base-200'>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>

        {/* <Footer /> */}

      </body>
    </html>

  )
}