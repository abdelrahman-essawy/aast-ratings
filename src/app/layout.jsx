import './globals.css'
import Navbar from '../components/Navbar/page'
import { Footer } from '../components/Footer/page'
import { Suspense } from 'react'
import Loading from './loading'
// import RulesModal from '../components/Modal/RulesModal'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />


      <body className='flex flex-col justify-between items-center overflow-x-hidden min-h-screen bg-base-200'>
        {/* <RulesModal /> */}
        <Navbar />
        <main className='flex-1 w-full h-full'>
          <Suspense fallback={<div className='h-[calc(100vh_-_117px)]'>
            <Loading />
          </div>}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>

  )
}